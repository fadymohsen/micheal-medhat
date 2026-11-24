'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CaseStudy, ArchiveItem } from '@/lib/types';
import { assetSrc } from '@/lib/data';
import ProjectCard from './ProjectCard';

const SECTORS = ['All', 'Automotive', 'Healthcare', 'FMCG', 'Consumer', 'Tourism'];

interface FilterableProjectsProps {
  caseStudies: CaseStudy[];
  archive: ArchiveItem[];
}

export default function FilterableProjects({ caseStudies, archive }: FilterableProjectsProps) {
  const [query, setQuery] = useState('');
  const [sector, setSector] = useState('All');

  const filteredStudies = useMemo(() => {
    const q = query.toLocaleLowerCase().trim();
    return caseStudies.filter((s) => {
      const matchSector = sector === 'All' || s.sector === sector;
      const matchText =
        !q ||
        [s.title, s.brand, s.sector, s.status, s.subtitle]
          .join(' ')
          .toLocaleLowerCase()
          .includes(q);
      return matchSector && matchText;
    });
  }, [caseStudies, query, sector]);

  const filteredArchive = useMemo(() => {
    const q = query.toLocaleLowerCase().trim();
    return archive.filter((a) => {
      const matchSector = sector === 'All' || a.category === sector;
      const matchText =
        !q ||
        [a.title, a.client, a.category, a.status, a.summary]
          .join(' ')
          .toLocaleLowerCase()
          .includes(q);
      return matchSector && matchText;
    });
  }, [archive, query, sector]);

  const total = filteredStudies.length + filteredArchive.length;

  return (
    <>
      {/* Filter bar */}
      <div className="filterbar">
        <input
          className="input"
          type="search"
          placeholder="Search projects…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search projects"
        />
        {SECTORS.map((s) => (
          <button
            key={s}
            type="button"
            className="filter-chip"
            aria-pressed={sector === s ? 'true' : 'false'}
            onClick={() => setSector(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="project-count">{total} projects shown</p>

      {/* Case studies */}
      {filteredStudies.length > 0 && (
        <>
          <div className="eyebrow" style={{ marginBottom: '18px' }}>CASE STUDIES ({filteredStudies.length})</div>
          <div className="feature-grid" style={{ marginBottom: '60px' }}>
            {filteredStudies.map((s, i) => (
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
                featured={i === 0}
              />
            ))}
          </div>
        </>
      )}

      {/* Archive */}
      {filteredArchive.length > 0 && (
        <>
          <div className="eyebrow" style={{ marginBottom: '18px' }}>
            PORTFOLIO ARCHIVE ({filteredArchive.length})
          </div>
          <div className="archive-grid">
            {filteredArchive.map((a) => (
              <article key={a.id} className="card archive-card">
                <Link
                  href={`/archive/${a.id}`}
                  className="card-media"
                  aria-label={`View ${a.title}`}
                >
                  <img
                    src={assetSrc(a.image)}
                    alt={a.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/creative.webp';
                    }}
                  />
                  <span className="card-badge">{a.status}</span>
                </Link>
                <div className="card-body">
                  <div className="card-meta">
                    {a.client} · {a.year}
                  </div>
                  <h3>
                    <Link href={`/archive/${a.id}`}>{a.title}</Link>
                  </h3>
                  <p>{a.summary}</p>
                  <Link href={`/archive/${a.id}`} className="readmore">
                    VIEW ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {total === 0 && (
        <div className="empty" style={{ display: 'block' }}>
          No projects match your search.
        </div>
      )}
    </>
  );
}
