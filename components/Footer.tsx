import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brandmark">
            MICHAEL<span>.</span>MEDHAT
          </Link>
          <div style={{ color: 'var(--muted)', fontSize: '.82rem', marginTop: '8px' }}>
            Creative leadership · Strategy · Experiences
          </div>
        </div>
        <div className="footer-links">
          <Link href="/experience">Experience ↗</Link>
          <a href="https://www.linkedin.com/in/michaelmedhat/" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://www.behance.net/michael_me4580" target="_blank" rel="noopener noreferrer">
            Behance ↗
          </a>
          <a
            href="https://www.adsoftheworld.com/campaigns?search=michael%20medhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ads of the World ↗
          </a>
          <a href="mailto:micamedhat@gmail.com">Email ↗</a>
          <Link href="/privacy">Privacy ↗</Link>
        </div>
      </div>
      <div className="container">
        <small>
          © 2026 Michael Medhat · Private working prototype · Brand marks belong to their
          respective owners. All project credits remain with original teams. No public approval or
          project outcomes are inferred.
        </small>
      </div>
    </footer>
  );
}
