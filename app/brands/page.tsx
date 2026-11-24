import type { Metadata } from 'next';
import { brandGroups } from '@/lib/data';
import BrandLogo from '@/components/BrandLogo';

export const metadata: Metadata = {
  title: 'Brands & Markets — Global Client Experience',
  description:
    'Client and brand experience developed across agencies, teams and markets — categorized by industry.',
};

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>BRANDS &amp; MARKETS</span>
          </div>
          <div className="eyebrow">BRANDS &amp; MARKETS</div>
          <h1>Experience with<br /><span className="accent">global brands.</span></h1>
          <p className="lead">
            Client and brand experience developed across agencies, teams and markets — categorized
            by industry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container brand-groups">
          {brandGroups.map(([groupName, brands]) => (
            <div key={groupName} className="brand-group">
              <div className="brand-group-label">{groupName}</div>
              <div className="brand-grid">
                {brands.map(([name, domain]) => (
                  <BrandLogo key={name} name={name} domain={domain} />
                ))}
              </div>
            </div>
          ))}
          <p className="brands-caption">
            Brand icons load from internet sources associated with company domains; exact full
            wordmark SVGs should be approved for publication. Listing brands does not imply
            endorsement, ongoing contracts or work delivered alone.
          </p>
        </div>
      </section>
    </>
  );
}
