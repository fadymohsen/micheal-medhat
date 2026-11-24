import type { Metadata } from 'next';
import Link from 'next/link';
import { featuredCaseStudies, brandGroups, assetSrc } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import BrandLogo from '@/components/BrandLogo';

export const metadata: Metadata = {
  title: 'Michael Medhat | Creative Strategy Consultant & Regional Brand Advisor',
  description:
    'Michael Medhat is a regional creative strategy consultant advising brands and leadership teams on business challenges, communication platforms, brand experiences and creative execution.',
};

const FEATURED_SLUGS = [
  'nissan-into-the-horizon',
  'nissan-patrol-75',
  'nissan-oman-billboard',
  'nissan-social-film',
  'nissan-anniversary-experience',
  'sanofi-one-pulse',
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((slug) =>
    featuredCaseStudies.find((s) => s.slug === slug)
  ).filter(Boolean) as typeof featuredCaseStudies;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="eyebrow">MICHAEL MEDHAT · REGIONAL CREATIVE STRATEGY CONSULTANT</div>
            <h1>
              <span>THINK.</span>
              <span className="outline">LEAD.</span>
              <span className="accent-word">CREATE.</span>
            </h1>
            <p className="lead">
              I advise ambitious brands and leadership teams on turning business complexity into
              clear strategy, compelling creative platforms and experiences that move people to act.
            </p>
            <p className="hero-support-line">
              10+ years · Egypt, Saudi Arabia &amp; UAE · Healthcare, automotive, tourism &amp;
              consumer brands
            </p>
            <div className="button-row">
              <Link href="/work" className="btn">EXPLORE SELECTED WORK ↗</Link>
              <Link href="/experience" className="btn ghost">EXPLORE MY EXPERIENCE ↗</Link>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src="/assets/hero-olive-original-v7.webp"
              alt="Michael Medhat seated in an olive sweatshirt — original user-supplied portrait, precisely isolated without changing his face or body"
            />
            <small>CREATIVITY MEETS DIRECTION / 2026</small>
          </div>
        </div>
        <div className="container hero-footer">
          <span>CAIRO · EGYPT / GCC &amp; REGIONAL PROJECTS</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>10+</strong><span>Years building brands</span></div>
          <div className="stat"><strong>3</strong><span>Core regional markets</span></div>
          <div className="stat"><strong>16</strong><span>Detailed case studies</span></div>
          <div className="stat"><strong>84</strong><span>Archive entries reviewed</span></div>
        </div>
      </section>

      {/* Career preview */}
      <section className="section home-career-section" id="experience-preview">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">CAREER / THE LEADERSHIP BEHIND THE IDEAS</div>
              <h2>I built my career<br /><span className="accent">from the work up.</span></h2>
            </div>
            <p>
              From graphic design to running creative teams and developing regional platforms. The
              craft still matters; the ability to lead the whole picture matters more.
            </p>
          </div>
          <div className="home-career-layout">
            <figure className="editorial-photo home-career-photo">
              <img
                src="/assets/leadership-stage-original.webp"
                alt="Michael Medhat presenting on stage in a user-supplied photograph"
                loading="lazy"
              />
              <figcaption>LEADING THE CONVERSATION · ON STAGE</figcaption>
            </figure>
            <div className="home-career-copy">
              <p className="copy-large">
                I combine strategic consulting, senior creative leadership and hands-on design
                judgment. My value is in connecting the right insight, the right team and the right
                execution—without losing sight of the business objective.
              </p>
              <div className="home-current-roles">
                <div>
                  <span>MAR 2025 — NOW</span>
                  <strong>ADWIA</strong>
                  <small>Brand Communication Manager</small>
                </div>
                <div>
                  <span>NOV 2024 — NOW</span>
                  <strong>Promovision</strong>
                  <small>Regional Creative Director</small>
                </div>
                <div>
                  <span>NOV 2024 — NOW · PART-TIME</span>
                  <strong>Innovation Dynamics</strong>
                  <small>Regional Executive Creative Director</small>
                </div>
              </div>
              <div className="home-career-facts">
                <span><b>≈10</b> creatives led at BrandMark</span>
                <span><b>6</b> specialists led at TAMAV</span>
              </div>
              <Link href="/experience" className="btn">ALL COMPANIES &amp; EXPERIENCE ↗</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section" id="selected-work">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / CASE STUDIES</div>
              <h2>Ideas with<br /><span className="accent">direction.</span></h2>
            </div>
            <p>
              Detailed storytelling from automotive, healthcare and brand experiences. Each project
              has its own page, visual gallery and credited status.
            </p>
          </div>
          <div className="feature-grid">
            {featured.map((s) => (
              <ProjectCard
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                title={s.title}
                brand={s.brand}
                year={s.year}
                status={s.status}
                sector={s.sector}
                subtitle={s.subtitle}
                hero={s.hero}
              />
            ))}
          </div>
          <div className="button-row">
            <Link href="/work" className="btn">ALL PROJECTS &amp; CASE STUDIES ↗</Link>
          </div>
        </div>
      </section>

      {/* Craft section */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container split">
          <div>
            <div className="eyebrow">02 / BEHIND THE WORK</div>
            <h2>Creative craft.<br /><span className="accent">Executive perspective.</span></h2>
            <p className="lead">
              Art direction evolved into strategic creative leadership, from finding the insight to
              shaping the story, building the team and guiding the experience.
            </p>
            <div className="button-row">
              <Link href="/expertise" className="btn ghost">MY CAPABILITIES ↗</Link>
            </div>
          </div>
          <div className="about-photo">
            <img
              src="/assets/michael-original-photo.webp"
              alt="Michael Medhat sitting in an olive sweatshirt in a creative studio"
            />
          </div>
        </div>
      </section>

      {/* Brands preview */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 / BRANDS &amp; EXPERIENCE</div>
              <h2>Across<br /><span className="accent">industries.</span></h2>
            </div>
            <p>
              Experience developed with multidisciplinary teams for healthcare, automotive, consumer
              and destination brands.
            </p>
          </div>
          {brandGroups.map(([groupName, brands]) => (
            <div key={groupName} className="brand-group">
              <p className="brand-group-label">{groupName}</p>
              <div className="brand-grid">
                {brands.map(([name, domain]) => (
                  <BrandLogo key={name} name={name} domain={domain} />
                ))}
              </div>
            </div>
          ))}
          <p className="brands-caption">
            Brand marks are retrieved from their official domains through a favicon service.
            Attribution does not imply direct contract or endorsement; work may have been delivered
            through agencies.
          </p>
          <Link href="/brands" className="btn ghost" style={{ marginTop: '20px', display: 'inline-flex' }}>
            EXPLORE ALL BRANDS ↗
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 / HOW I WORK</div>
              <h2>One idea.<br /><span className="accent">Many disciplines.</span></h2>
            </div>
          </div>
          <div className="flow">
            {[
              ['01', 'Understand', 'Find the real business and communication challenge beneath the brief.'],
              ['02', 'Connect', 'Link insights, audiences and brand purpose in one strategic thought.'],
              ['03', 'Create', 'Turn a strong concept into a coherent visual and content universe.'],
              ['04', 'Lead', 'Guide teams, executions and audience touchpoints with precision.'],
            ].map(([num, title, body]) => (
              <div key={num} className="panel">
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">05 / LINKEDIN RECOMMENDATION</div>
          <blockquote className="testimonial">
            &ldquo;Michael has the passion, creativity, and leadership qualities that you want for
            your team.&rdquo;
          </blockquote>
          <div className="quote-credit">
            Mina Medhat · Public recommendation excerpt on LinkedIn.{' '}
            <a href="https://www.linkedin.com/in/michaelmedhat/" target="_blank" rel="noopener noreferrer">
              View original profile ↗
            </a>
          </div>
          <p style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: '18px' }}>
            Excerpt shortened for clarity. No additional testimonials are fabricated.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="home-end-cta">
        <div className="container">
          <div className="eyebrow">YOUR NEXT CHALLENGE</div>
          <h2>Let&apos;s build something<br /><span className="accent">meaningful.</span></h2>
          <p>Brand projects, integrated experiences or executive creative opportunities.</p>
          <div className="button-row" style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn">START A CONVERSATION ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
