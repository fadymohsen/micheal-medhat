import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// ─── Config ──────────────────────────────────────────────────────────────────

const DATA_DIR =
  process.env.PRIVATE_DATA_DIR ||
  path.join(process.cwd(), '..', 'michael-medhat-leads');

const MAX_BODY = 32 * 1024; // 32 KB

// ─── Rate limiter (in-process, cleared on restart) ──────────────────────────

const limits = new Map<string, number[]>();

// Auto-prune IPs that haven't been seen in >5 minutes to avoid unbounded growth
setInterval(() => {
  const cutoff = Date.now() - 5 * 60_000;
  for (const [ip, times] of limits) {
    if (times[times.length - 1] < cutoff) limits.delete(ip);
  }
}, 60_000);

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const history = (limits.get(ip) ?? []).filter((t) => now - t < 60_000);
  history.push(now);
  limits.set(ip, history);
  return history.length > 5;
}

// ─── Input sanitisation ───────────────────────────────────────────────────────

function clean(value: unknown, max = 3000): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '').trim().slice(0, max);
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Identify caller
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please try again later.' },
      { status: 429 }
    );
  }

  // Body size guard
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY) {
    return NextResponse.json({ ok: false, error: 'Message too large.' }, { status: 413 });
  }

  // Parse JSON
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 });
  }

  // Honeypot
  if (clean(data.website, 200)) {
    return NextResponse.json({ ok: true }); // silently discard
  }

  // Extract & validate fields
  const name = clean(data.name, 150);
  const email = clean(data.email, 250);
  const company = clean(data.company, 200);
  const opportunity = clean(data.opportunity, 150);
  const message = clean(data.message, 6000);

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: 'Name, valid email and message are required.' },
      { status: 422 }
    );
  }

  if (data.consent !== true) {
    return NextResponse.json(
      { ok: false, error: 'Please confirm consent to be contacted.' },
      { status: 422 }
    );
  }

  // Persist lead
  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    email,
    company,
    opportunity,
    message,
  };

  try {
    fs.mkdirSync(DATA_DIR, { recursive: true, mode: 0o700 });
    fs.appendFileSync(path.join(DATA_DIR, 'inquiries.jsonl'), JSON.stringify(lead) + '\n', {
      mode: 0o600,
    });
  } catch (err) {
    console.error('Lead write error:', (err as Error).message);
    return NextResponse.json(
      { ok: false, error: 'Could not receive message. Please email directly.' },
      { status: 500 }
    );
  }

  // Optional webhook
  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook && /^https:\/\//i.test(hook)) {
    fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(5000),
    }).catch((err: Error) => console.error('Webhook failed:', err.message));
  }

  return NextResponse.json({ ok: true, message: 'Thanks — your message has been received.' });
}
