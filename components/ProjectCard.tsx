'use client';

import Link from 'next/link';
import { assetSrc } from '@/lib/data';

interface ProjectCardProps {
  href: string;
  title: string;
  brand: string;
  year: string;
  status: string;
  sector: string;
  subtitle: string;
  hero: string;
  heroAlt?: string;
  featured?: boolean; // first card in feature-grid gets span-2
}

export default function ProjectCard({
  href,
  title,
  brand,
  year,
  status,
  sector,
  subtitle,
  hero,
  heroAlt,
  featured = false,
}: ProjectCardProps) {
  const searchText = `${title} ${brand} ${sector} ${status}`;

  return (
    <article
      className="card"
      data-project-card=""
      data-search={searchText}
      data-sector={sector}
    >
      <Link
        href={href}
        className="card-media"
        aria-label={`View ${title} case study`}
      >
        <img
          src={assetSrc(hero)}
          alt={heroAlt ?? `${title} — ${brand} creative artwork`}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/creative.webp';
          }}
        />
        <span className="card-badge">{status}</span>
      </Link>
      <div className="card-body">
        <div className="card-meta">
          {brand} · {year}
        </div>
        <h3>
          <Link href={href}>{title}</Link>
        </h3>
        <p>{subtitle}</p>
        <Link href={href} className="readmore">
          VIEW PROJECT ↗
        </Link>
      </div>
    </article>
  );
}
