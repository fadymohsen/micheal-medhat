import type { Metadata } from 'next';
import Link from 'next/link';
import { careerRoles, normaliseLink } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Professional Experience — Career Timeline',
  description:
    'Full professional experience and leadership career of Michael Medhat: ADWIA, Promovision, Innovation Dynamics, InterMark Network, TAMAV, CAT, BrandMark, The Hub and TCL.',
};

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero career-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>EXPERIENCE</span>
          </div>
          <div className="eyebrow">THE CAREER BEHIND THE WORK</div>
          <h1>Built in the craft.<br /><span className="accent">Proven in leadership.</span></h1>
          <p className="lead">
            My professional path began in hands-on creative craft and grew into regional leadership
            and strategic consultancy. Here is the experience that informs my advice—from building
            teams to guiding complex, integrated brand projects.
          </p>
          <div className="button-row">
            <Link href="/work" className="btn">EXPLORE THE WORK ↗</Link>
            <Link href="/about" className="btn ghost">THE PERSON BEHIND IT ↗</Link>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">EXPERIENCE SNAPSHOT</div>
              <h2>Three perspectives.<br /><span className="accent">One creative mindset.</span></h2>
            </div>
            <p>
              Agency leadership, organizational brand communication and experiential creative
              direction—each broadens the way I think about a client&apos;s challenge.
            </p>
          </div>
          <div className="leadership-proof-grid">
            {[
              ['IN-HOUSE', 'ADWIA', 'Communications that translate company values, priorities and culture into employee experiences.'],
              ['REGIONAL AGENCY', 'Promovision', 'Multi-market campaigns, automotive storytelling, tourism, integrated communication and client pitches.'],
              ['EXPERIENTIAL', 'Innovation Dynamics', 'Creative standards, spatial narratives and cross-discipline event experiences.'],
              ['CRAFT TO LEADERSHIP', 'Earlier career', 'Team building, creative reviews, art direction, brand systems and campaign development.'],
            ].map(([label, name, body]) => (
              <article key={name} className="leadership-proof">
                <b>{label}</b>
                <h3>{name}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">CAREER TIMELINE · 2010–2026</div>
              <h2>Every chapter<br /><span className="accent">built the next.</span></h2>
            </div>
            <p>
              Regional creative-advisory and leadership engagements appear first, beginning with
              Promovision. Corporate and agency roles then follow through the earlier career. Titles
              and dates remain grounded in the supplied professional records.
            </p>
          </div>
          <div className="career-timeline">
            {careerRoles.map((role) => {
              const id = `role-${role.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <article className="career-role" key={id} id={id}>
                  <div className="career-rail">
                    <span className="career-dot" />
                    <span>{role.period}</span>
                  </div>
                  <div className="career-body">
                    <div className="career-headline">
                      <div>
                        <div className="eyebrow">{role.company}</div>
                        <h3>{role.title}</h3>
                        <p className="career-location">{role.location}</p>
                      </div>
                      <span className="career-status">
                        {role.current ? 'CURRENT' : 'PREVIOUS'}
                      </span>
                    </div>
                    <p className="career-intro">{role.intro}</p>
                    <ul className="career-bullets">
                      {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className="career-tail">
                      <span>{role.lens}</span>
                      {role.links.map(([label, href]) => (
                        <a key={label} href={normaliseLink(href)}>
                          {label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="fineprint" style={{ marginTop: '32px' }}>
            Career periods and responsibilities reflect the supplied integrated CV and historical
            portfolio. The 2010–2012 freelance period is drawn from the 2023 portfolio; its
            description is intentionally limited. Project associations represent work in the
            creative portfolio and should not imply sole authorship or completed implementation.
          </p>
        </div>
      </section>

      {/* Leadership visual */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container experience-visual-row">
          <div>
            <div className="eyebrow">LEADERSHIP IN ACTION</div>
            <h2>Closer to the brief.<br /><span className="accent">Closer to the team.</span></h2>
            <p className="copy-large">
              My value is in connecting disciplines, not separating them. I move between strategic
              conversations, campaign ideas, storyboards, on-stage presentations and creative
              review—with the same objective: make the work clearer and stronger.
            </p>
            <Link href="/contact" className="btn">DISCUSS A COLLABORATION ↗</Link>
          </div>
          <figure className="editorial-photo">
            <img
              src="/assets/creative-at-work-original.webp"
              alt="Top-down original photograph of Michael Medhat at a desk with sketches, creative work and color swatches"
              loading="lazy"
            />
            <figcaption>PROCESS &amp; CRAFT · ORIGINAL PHOTO</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
