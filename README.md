# Michael Medhat — Portfolio Website

Personal portfolio for **Michael Medhat**, Regional Creative Strategy Consultant. Built with Next.js 15 App Router and TypeScript, converted from a hand-coded V7 static site.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Vanilla CSS (custom properties, no framework) |
| Data | Static JSON files |
| Deployment | Vercel / any Node host |

## Pages

- `/` — Home
- `/work` — All 16 case studies + 84 portfolio archive entries with live search & filter
- `/brands` — Global client brand experience
- `/expertise` — Capability areas
- `/experience` — Full career timeline (2010–2026)
- `/about` — Personal story & leadership evidence
- `/insights` — Short creative perspectives
- `/contact` — Enquiry form with API + mailto fallback
- `/privacy` — Privacy notice
- `/case-studies/[slug]` — 16 individual case study pages (statically generated)
- `/archive/[slug]` — 84 individual archive entry pages (statically generated)

## Getting started

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build — pre-renders all 100 portfolio pages
npm start          # serve production build
```

## Static assets

Images are **not** included in the repository. Copy the `assets/` folder from the original project into `public/`:

```bash
cp -r ../Michael_Medhat_Website_V7/assets  public/assets
```

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `PRIVATE_DATA_DIR` | Directory where contact-form leads are stored | `../michael-medhat-leads` |
| `CONTACT_WEBHOOK_URL` | Optional HTTPS webhook on form submission | — |

## Project structure

```
app/
  layout.tsx                 Root layout — theme, lightbox, header, footer
  page.tsx                   Home
  work/page.tsx              Filterable project listing
  case-studies/[slug]/       16 case study pages
  archive/[slug]/            84 archive pages
  api/contact/route.ts       Contact form API (rate-limited, honeypot, JSONL storage)
  api/health/route.ts        Health check
  globals.css                Full CSS — two dark palettes (navy / forest)
components/
  ThemeProvider.tsx          Client — navy/forest theme, localStorage persisted
  Header.tsx                 Client — sticky nav, mobile toggle, theme switcher
  Footer.tsx                 Server
  Lightbox.tsx               Client — full-screen image overlay + context
  ProjectCard.tsx            Client — reusable project card with image fallback
  BrandLogo.tsx              Client — Google favicon with text fallback
  GalleryFigure.tsx          Client — gallery image that opens the lightbox
  ContactForm.tsx            Client — form with fetch + mailto fallback
  FilterableProjects.tsx     Client — real-time text search + sector filter
lib/
  types.ts                   TypeScript interfaces for all data shapes
  data.ts                    JSON imports, helper functions, asset path normalisation
data/
  featured-case-studies.json    16 case studies (source of truth)
  full-project-inventory.json   84 archive entries (source of truth)
  brands.json                   Brand groups for Brands page
  career-experience.json        Career timeline roles
```

## Notes

- All pages carry `noindex, nofollow` — this is a **private portfolio review**. Remove before public launch.
- Proposal and confidential visual content (Nissan, Sanofi, BAXFENDY, Repatha) must not be published without client permission.
- Brand icons use the Google favicon service and require internet access to load; text fallbacks are shown offline.
