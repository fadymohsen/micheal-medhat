// ─── Case Studies ────────────────────────────────────────────────────────────

export interface GalleryItem {
  src: string;
  caption: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  brand: string;
  sector: string;
  year: string;
  status: string;
  hero: string;
  gallery: GalleryItem[];
  challenge: string;
  insight: string;
  idea: string;
  execution: string[];
  role: string;
  source: string;
  subtitle: string;
  public: boolean;
  link: string;
  sourceTexts?: string[];
}

// ─── Archive / Full Inventory ─────────────────────────────────────────────────

export interface ArchiveItem {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  source: string;
  status: string;
  summary: string;
  image: string;
  url: string;
  page?: number;
  credit: string;
  note: string;
  featured: boolean;
  public_ok: boolean;
  image_ok: boolean;
}

// ─── Brands ──────────────────────────────────────────────────────────────────

// brands.json is [[groupName, [[brandName, domain], ...]]]
export type BrandEntry = [string, string];        // [name, domain]
export type BrandGroup = [string, BrandEntry[]];  // [groupName, brands]

// ─── Career Experience ────────────────────────────────────────────────────────

export interface CareerRole {
  period: string;
  company: string;
  title: string;
  location: string;
  sort: number;
  current: boolean;
  intro: string;
  bullets: string[];
  lens: string;
  links: [string, string][];  // [[label, href]]
}
