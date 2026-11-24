import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArchiveItem, getArchiveSlugs, assetSrc } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArchiveSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${item.client}`,
    description: item.summary,
  };
}

export default async function ArchivePage({ params }: PageProps) {
  const { slug } = await params;
  const item = getArchiveItem(slug);
  if (!item) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span>
            <Link href="/work">Work</Link><span>/</span>
            <span>{item.title}</span>
          </div>
          <div className="eyebrow">PORTFOLIO ARCHIVE / {item.year}</div>
          <h1>{item.title}</h1>
          <p className="lead">{item.summary}</p>
          <div className="case-meta">
            <span>{item.client}</span>
            <span>{item.status}</span>
            <span>{item.category}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-hero">
          <div>
            <h2>Project<br /><span className="accent">record.</span></h2>
            <p className="lead">{item.summary}</p>
            <p><strong>Role / credit:</strong> {item.credit}</p>
            {item.note && (
              <p className="brands-caption">{item.note}</p>
            )}
            <div className="links-bar">
              {item.url && (
                <a
                  className="btn ghost"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW ORIGINAL SOURCE ↗
                </a>
              )}
              <Link href="/work" className="btn">BACK TO ALL WORK ↗</Link>
            </div>
          </div>

          {item.image && (
            <div className="case-photo">
              <img
                src={assetSrc(item.image)}
                alt={`${item.title} original work`}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
