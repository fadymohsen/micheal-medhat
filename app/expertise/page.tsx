import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Expertise — Creative Leadership & Brand Strategy Capabilities',
  description:
    'Strategic thinking and creative execution capabilities: creative leadership, healthcare communication, brand strategy, campaigns, experiential events and creative technology.',
};

const CAPABILITIES = [
  {
    num: '001',
    title: 'Creative Leadership',
    body: 'Creative direction, multidisciplinary team guidance, concept reviews and regional campaign leadership.',
  },
  {
    num: '002',
    title: 'Healthcare Communication',
    body: 'Complex medical narratives, HCP-focused activations, disease awareness and scientific experience design.',
  },
  {
    num: '003',
    title: 'Brand Strategy',
    body: 'Positioning, narrative systems, cross-market consistency, creative platforms and GTM thinking.',
  },
  {
    num: '004',
    title: 'Campaigns & Content',
    body: 'Integrated digital, social, film storyboards, editorial systems and outdoor communication.',
  },
  {
    num: '005',
    title: 'Experiential & Events',
    body: 'Visitor journeys, interactive screens, stage reveal systems, exhibitions and event communications.',
  },
  {
    num: '006',
    title: 'Creative Technology',
    body: 'AI-assisted ideation, motion/storyboarding workflows and interactive brand experiences.',
  },
];

export default function ExpertisePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>EXPERTISE</span>
          </div>
          <div className="eyebrow">EXPERTISE</div>
          <h1>Strategic thinking.<br /><span className="accent">Creative execution.</span></h1>
          <p className="lead">
            From the first brief to the final brand experience, leadership and craft should
            reinforce each other.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {CAPABILITIES.map(({ num, title, body }) => (
              <article key={num} className="panel">
                <div className="eyebrow">{num} / CAPABILITY</div>
                <h3>{title}</h3>
                <p style={{ color: 'var(--muted)' }}>{body}</p>
              </article>
            ))}
          </div>
          <div className="button-row">
            <Link href="/work" className="btn">EXPLORE CASE STUDIES ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
