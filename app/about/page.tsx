import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Creative Leadership & Personal Story',
  description:
    'Meet Michael Medhat: regional executive creative and marketing leader with experience across healthcare, automotive, tourism, experiential and integrated brand strategy.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-lead-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>ABOUT MICHAEL</span>
          </div>
          <div className="eyebrow">PERSONAL STORY / REGIONAL CREATIVE LEADERSHIP</div>
          <h1>
            Creative instincts.<br />
            <span className="accent">Business perspective.</span><br />
            Leadership that connects both.
          </h1>
          <p className="lead">
            I work as a creative strategy consultant and regional creative advisor—helping brands,
            organizations and leadership teams make better decisions about what to say, how to say
            it and how to turn it into impact.
          </p>
          <div className="button-row">
            <Link href="/experience" className="btn">MY FULL CAREER JOURNEY ↗</Link>
            <Link href="/work" className="btn ghost">SEE SELECTED WORK ↗</Link>
          </div>
        </div>
      </section>

      {/* Intro grid */}
      <section className="section">
        <div className="container about-intro-grid">
          <div className="about-statement">
            <div className="eyebrow">THE PERSON BEHIND THE WORK</div>
            <h2>From mastering<br /><span className="accent">the craft</span> to leading the bigger picture.</h2>
            <p className="copy-large">
              I began my career close to the work: exploring visual ideas, mastering art direction,
              shaping campaign narratives and learning what makes communication immediately
              understandable. That craft-first foundation still informs the way I approach every
              challenge.
            </p>
            <p>
              Over the past decade, my role expanded from developing ideas to building teams,
              advising decision-makers and connecting brand strategy with integrated creative
              execution. I have led teams, directed multi-market creative work and partnered with
              organizations in Egypt, Saudi Arabia, the UAE and beyond.
            </p>
            <p>
              Today, I bring a consultant&apos;s perspective to every engagement. I focus on the
              commercial problem before the campaign, the audience truth before the visual, and the
              operating model behind the execution. I help teams identify where to concentrate
              effort, develop a compelling creative territory, and carry it consistently across
              content, digital, film, live experiences and brand environments.
            </p>
            <p>
              What I offer is not a collection of isolated creative services. It&apos;s a way of
              connecting business objectives, people, creative ideas and practical
              delivery—while helping the individuals and teams involved do stronger work.
            </p>
            <div className="button-row">
              <Link href="/contact" className="btn small">LET&apos;S WORK TOGETHER ↗</Link>
            </div>
          </div>
          <figure className="editorial-photo">
            <img
              src="/assets/editorial-cafe-original.webp"
              alt="Michael Medhat in a café with a portfolio of creative work — original photo supplied for this site"
              loading="lazy"
            />
            <figcaption>THE CREATIVE MIND · THE BUSINESS LENS</figcaption>
          </figure>
        </div>
      </section>

      {/* Leadership proofs */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHAT I BRING</div>
              <h2>A leader who sees<br /><span className="accent">the whole system.</span></h2>
            </div>
            <p>
              Business understanding, craft and the ability to make diverse specialists work toward
              the same creative ambition.
            </p>
          </div>
          <div className="leadership-proof-grid">
            {[
              ['01 / STRATEGY', 'I go beyond the brief.', 'Translate stakeholder expectations and audience insight into a clear communication challenge and an ownable creative direction.'],
              ['02 / LEADERSHIP', 'I build the team behind the idea.', 'Set standards, mentor creative talent and connect art, copy, content, digital, motion, 3D and production disciplines.'],
              ['03 / HEALTHCARE', 'I make complexity understandable.', 'Develop creative systems for scientific narratives, disease awareness, HCP engagement and regulated brand communication.'],
              ['04 / EXECUTION', 'I protect the idea all the way through.', 'Guide the translation of concepts into content, activations, events, experiences and the details audiences actually encounter.'],
            ].map(([label, title, body]) => (
              <article key={label} className="leadership-proof">
                <b>{label}</b>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stage photo + proof points */}
      <section className="section">
        <div className="container about-proof-split">
          <figure className="editorial-photo stage-photo">
            <img
              src="/assets/leadership-stage-original.webp"
              alt="Michael Medhat presenting a growth strategy, from a photo supplied for the site"
              loading="lazy"
            />
            <figcaption>ON STAGE · PRESENTATION &amp; CREATIVE LEADERSHIP</figcaption>
          </figure>
          <div>
            <div className="eyebrow">EVIDENCE, NOT ADJECTIVES</div>
            <h2>Leadership<br /><span className="accent">in practice.</span></h2>
            <div className="proof-points">
              <div><strong>≈10</strong><span>creative specialists led at BrandMark</span></div>
              <div><strong>6</strong><span>art, copy and 3D specialists led at TAMAV</span></div>
              <div><strong>3</strong><span>core markets: Egypt, Saudi Arabia and UAE</span></div>
              <div><strong>15</strong><span>campaign publications listed in my current CV</span></div>
            </div>
            <p className="fineprint">
              Figures are drawn from the supplied CV. They are team sizes, geographic experience and
              publication counts—not unverified business results or awards.
            </p>
          </div>
        </div>
      </section>

      {/* Career mini */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">WHERE I&apos;VE WORKED</div>
              <h2>From graphic designer<br /><span className="accent">to regional leader.</span></h2>
            </div>
            <p>More than a list of job titles: each stage added a capability that shapes how I lead today.</p>
          </div>
          <div className="home-career-mini">
            {[
              ['2025 — PRESENT', 'ADWIA', 'Brand Communication Manager', 'In-house healthcare communication', '/experience#role-adwia'],
              ['2024 — PRESENT', 'Promovision', 'Regional Creative Director', 'Cross-market campaigns and experiences', '/experience#role-promovision'],
              ['2024 — PRESENT', 'Innovation Dynamics', 'Regional Executive Creative Director · Part-time', 'Experiential and spatial creativity', '/experience#role-innovation-dynamics'],
              ['2023 — 2024', 'InterMark Network', 'Regional Executive Creative Director', 'Multi-market creative leadership', '/experience#role-intermark-network'],
            ].map(([period, company, title, desc, href]) => (
              <a key={company} className="career-mini-card" href={href}>
                <span>{period}</span>
                <strong>{company}</strong>
                <em>{title}</em>
                <small>{desc}</small>
              </a>
            ))}
          </div>
          <div className="button-row">
            <Link href="/experience" className="btn">EXPLORE ALL COMPANIES &amp; ROLES ↗</Link>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="container education-grid">
          <div>
            <div className="eyebrow">EDUCATION &amp; DEVELOPMENT</div>
            <h2>Craft. Strategy.<br /><span className="accent">Continuous learning.</span></h2>
            <p>
              Creative leadership is built on practice, supported by marketing knowledge and an
              ongoing interest in how technologies reshape communication and production.
            </p>
          </div>
          <div className="education-list">
            {[
              ['IN PROGRESS', 'Doctor of Business Administration (DBA), Marketing', 'RB College, United Kingdom · Expected 2027 per CV'],
              ['2022', 'Master of Business Administration (MBA), Marketing', 'RB College, United Kingdom'],
              ['2018', 'Digital Marketing Diploma', 'Cairo University, Egypt'],
              ['2012', 'Bachelor of Commerce', 'Ain Shams University, Egypt'],
              ['PROFESSIONAL DEVELOPMENT', 'LinkedIn Certified Marketing Insider (2025) · Cairo AD School (2019) · Russian Culture Center (2012)', 'Marketing strategy, creative dynamics and graphic design'],
            ].map(([year, degree, school]) => (
              <div key={degree}>
                <span>{year}</span>
                <strong>{degree}</strong>
                <small>{school}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="eyebrow">A PROFESSIONAL&apos;S PERSPECTIVE</div>
          <blockquote className="testimonial">
            &ldquo;Michael has the passion, creativity, and leadership qualities that you want for
            your team.&rdquo;
          </blockquote>
          <p className="quote-credit">
            Mina Medhat · Public LinkedIn recommendation excerpt.{' '}
            <a href="https://www.linkedin.com/in/michaelmedhat/" target="_blank" rel="noopener noreferrer">
              View LinkedIn profile ↗
            </a>
          </p>
          <p className="fineprint">
            Only the previously verified excerpt is included; no additional recommendations are
            invented.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="home-end-cta">
        <div className="container">
          <div className="eyebrow">THE NEXT CONVERSATION</div>
          <h2>Let&apos;s put<br /><span className="accent">the thinking to work.</span></h2>
          <p>For brand projects, creative partnerships and senior leadership opportunities.</p>
          <div className="button-row centered">
            <Link href="/contact" className="btn">START A CONVERSATION ↗</Link>
            <Link href="/work" className="btn ghost">EXPLORE MY WORK ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
