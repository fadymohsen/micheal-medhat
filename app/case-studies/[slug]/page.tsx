import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseStudy, getCaseStudySlugs, assetSrc } from '@/lib/data';
import GalleryFigure from '@/components/GalleryFigure';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getCaseStudy(slug);
  if (!s) return {};
  return {
    title: `${s.title} — ${s.brand}`,
    description: s.challenge.slice(0, 155),
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const s = getCaseStudy(slug);
  if (!s) notFound();

  const isProposal = !s.public;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span>
            <Link href="/work">Work</Link><span>/</span>
            <span>{s.title}</span>
          </div>
          <div className="eyebrow">{s.sector} / CASE STUDY / {s.year}</div>
          <div className="case-hero">
            <div>
              <h1>{s.title}</h1>
              <p className="lead">{s.subtitle}</p>
              <div className="case-meta">
                <span>{s.brand}</span>
                <span>{s.status}</span>
                <span>{s.year}</span>
              </div>
            </div>
            <div className="case-photo">
              <img
                src={assetSrc(s.hero)}
                alt={`${s.title} — ${s.brand} creative artwork`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {isProposal && (
            <div className="notice">
              Internal creative work or proposal. Images are source-deck visuals, not proof that the
              campaign or event was executed. Public use requires client and agency permission.
            </div>
          )}

          <div className="case-copy">
            <h2>The challenge</h2>
            <div><p>{s.challenge}</p></div>
          </div>

          <div className="case-copy">
            <h2>The insight</h2>
            <div><p>{s.insight}</p></div>
          </div>

          <div className="case-copy">
            <h2>The creative direction</h2>
            <div><p>{s.idea}</p></div>
          </div>

          <div className="case-copy">
            <h2>Scope &amp; outputs</h2>
            <div>
              <ul>
                {s.execution.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="case-copy">
            <h2>My role</h2>
            <div><p>{s.role}</p></div>
          </div>

          <div className="case-copy">
            <h2>Source &amp; status</h2>
            <div><p>{s.source}</p></div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {s.gallery.length > 0 && (
        <section className="section" style={{ background: 'var(--bg2)' }}>
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">VISUAL ARCHIVE / SOURCE MATERIAL</div>
                <h2>Behind the<br /><span className="accent">concept.</span></h2>
              </div>
              <p>
                These frames originate from presentations or original campaign materials. Tap to
                enlarge; captions identify the source status.
              </p>
            </div>
            <div className="gallery">
              {s.gallery.map((item, i) => (
                <GalleryFigure key={i} src={item.src} caption={item.caption} />
              ))}
            </div>
            <div className="links-bar">
              <Link href="/work" className="btn ghost">BACK TO ALL PROJECTS ↗</Link>
              <Link href="/contact" className="btn">DISCUSS A PROJECT ↗</Link>
            </div>
          </div>
        </section>
      )}

      {/* Source texts */}
      {s.sourceTexts && s.sourceTexts.length > 0 && (
        <section className="source-text-section section">
          <div className="container">
            <div className="eyebrow">SOURCE TEXT / SEPARATE FROM VISUAL ASSETS</div>
            <h2>Selected creative thinking</h2>
            <p>
              Selected native text from the source creative materials. The site uses its own HTML
              layout; these words are not taken from slide screenshots.
            </p>
            <div className="source-text-list">
              {s.sourceTexts.map((t, i) => (
                <div key={i} className="source-text-item">{t}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* External link */}
      {s.link && (
        <section className="section">
          <div className="container">
            <div className="links-bar">
              <a
                href={s.link}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW ORIGINAL SOURCE ↗
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
