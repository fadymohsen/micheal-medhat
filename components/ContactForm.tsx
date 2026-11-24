'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const kind = String(fd.get('opportunity') || 'Collaboration');
    const msg = `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nCompany: ${fd.get('company')}\nType: ${kind}\n\n${fd.get('message')}`;
    const mailFallback = `mailto:micamedhat@gmail.com?subject=${encodeURIComponent('Website inquiry — ' + kind)}&body=${encodeURIComponent(msg)}`;

    const body = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      company: String(fd.get('company') || ''),
      opportunity: kind,
      message: String(fd.get('message') || ''),
      website: String(fd.get('website') || ''), // honeypot
      consent: fd.get('consent') === 'on',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setStatus('Message received. Thank you.');
        (e.target as HTMLFormElement).reset();
        return;
      }
      if ([404, 405].includes(res.status)) {
        setStatus('Opening your email app to send your message.');
        window.location.href = mailFallback;
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus(data.error || 'Unable to submit; please email directly.');
    } catch {
      setStatus('Opening your email app as server contact is unavailable.');
      window.location.href = mailFallback;
    }
  }

  return (
    <form className="form panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <input className="input" name="name" placeholder="Your name" required />
        </label>
        <label>
          Your email
          <input className="input" name="email" placeholder="name@company.com" required type="email" />
        </label>
      </div>

      <label>
        Company or organization
        <input className="input" name="company" placeholder="Optional" />
      </label>

      <label>
        Type of opportunity
        <select className="input" name="opportunity">
          <option>Project collaboration</option>
          <option>Creative leadership opportunity</option>
          <option>Speaking / advisory</option>
          <option>Other conversation</option>
        </select>
      </label>

      <label>
        Your message
        <textarea
          className="input"
          name="message"
          placeholder="Tell me about the challenge, audience, timing or role…"
          required
        />
      </label>

      {/* Honeypot — hidden from real users */}
      <label style={{ display: 'none' }}>
        Website
        <input autoComplete="off" name="website" tabIndex={-1} />
      </label>

      <label style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '.8rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
        <input name="consent" required style={{ marginTop: '4px' }} type="checkbox" />
        I agree to be contacted about my enquiry.{' '}
        <a href="/privacy">Privacy details</a>.
      </label>

      <button className="btn" type="submit">
        SEND MY ENQUIRY ↗
      </button>

      {status && (
        <p aria-live="polite" className="form-help" id="formStatus" role="status">
          {status}
        </p>
      )}

      <p className="form-help">
        With the Node server your enquiry is stored securely; without it, your email application
        opens instead.
      </p>
    </form>
  );
}
