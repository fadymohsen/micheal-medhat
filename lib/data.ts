import type { CaseStudy, ArchiveItem, BrandGroup, CareerRole } from './types';

import featuredRaw from '../data/featured-case-studies.json';
import inventoryRaw from '../data/full-project-inventory.json';
import brandsRaw from '../data/brands.json';
import careerRaw from '../data/career-experience.json';

// Cast — JSON imports are `any` without explicit typing
export const featuredCaseStudies = featuredRaw as CaseStudy[];
export const fullInventory = inventoryRaw as ArchiveItem[];
export const brandGroups = brandsRaw as BrandGroup[];
export const careerRoles = careerRaw as CareerRole[];

// ─── Case studies helpers ────────────────────────────────────────────────────

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return featuredCaseStudies.find((s) => s.slug === slug);
}

export function getCaseStudySlugs(): { slug: string }[] {
  return featuredCaseStudies.map((s) => ({ slug: s.slug }));
}

// ─── Archive helpers ─────────────────────────────────────────────────────────

export function getArchiveItem(id: string): ArchiveItem | undefined {
  return fullInventory.find((a) => a.id === id);
}

export function getArchiveSlugs(): { slug: string }[] {
  return fullInventory.map((a) => ({ slug: a.id }));
}

// ─── Asset path normalisation ────────────────────────────────────────────────
// Data files store paths as "assets/foo.webp" (no leading slash).
// In Next.js, public/ is the root, so we prepend "/".

export function assetSrc(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('/')) return path;
  return `/${path}`;
}

// ─── Case-study link normalisation ──────────────────────────────────────────
// career-experience.json stores internal links as "../case-studies/foo/index.html"
// Convert to Next.js routes.

export function normaliseLink(href: string): string {
  if (!href) return '#';
  if (href.startsWith('http') || href.startsWith('mailto:')) return href;
  // Strip ../  and trailing /index.html
  return '/' + href.replace(/^\.\.\//, '').replace(/\/index\.html$/, '');
}
