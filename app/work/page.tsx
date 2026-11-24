import type { Metadata } from 'next';
import { featuredCaseStudies, fullInventory } from '@/lib/data';
import FilterableProjects from '@/components/FilterableProjects';

export const metadata: Metadata = {
  title: 'Work — Selected Case Studies & Portfolio Archive',
  description:
    'All 16 detailed case studies and 84 portfolio archive entries. Healthcare, automotive, FMCG, tourism and consumer brand work from Egypt, Saudi Arabia and the UAE.',
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>WORK</span>
          </div>
          <div className="eyebrow">SELECTED WORK &amp; PORTFOLIO ARCHIVE</div>
          <h1>
            16 case studies.<br />
            <span className="accent">84 archive entries.</span>
          </h1>
          <p className="lead">
            Creative strategy, brand experiences and campaign work across healthcare, automotive,
            FMCG and regional industries. Each entry has its own page, visual evidence and credited
            status.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FilterableProjects
            caseStudies={featuredCaseStudies}
            archive={fullInventory}
          />
        </div>
      </section>
    </>
  );
}
