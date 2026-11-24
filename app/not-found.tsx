import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="eyebrow">404 / PAGE NOT FOUND</div>
        <h1>Not<br /><span className="accent">found.</span></h1>
        <p className="lead">This page doesn&apos;t exist or has moved.</p>
        <div className="button-row">
          <Link href="/" className="btn">GO HOME ↗</Link>
          <Link href="/work" className="btn ghost">EXPLORE WORK ↗</Link>
        </div>
      </div>
    </section>
  );
}
