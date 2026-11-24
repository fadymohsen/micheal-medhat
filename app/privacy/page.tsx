import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy — Michael Medhat',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">PRIVACY</div>
          <h1>Your data,<br /><span className="accent">your choice.</span></h1>
          <p className="lead">This is a private working website preview.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2>Contact enquiries</h2>
          <p>
            When you submit the contact form through the website server, your name, email, company
            (optional), opportunity type and message are stored in a private file for responding to
            your request. The site may forward the enquiry to a configured private webhook. The
            supplied code does not include advertising trackers.
          </p>
          <p>
            When the API route is unavailable, the form opens your email app rather than sending
            data to a server.
          </p>
          <p>
            For access, correction or deletion requests, please contact{' '}
            <a href="mailto:micamedhat@gmail.com">micamedhat@gmail.com</a>. Third-party links and
            brand favicon requests have their own privacy practices. This notice requires legal
            review prior to public publication.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <Link href="/" className="btn ghost">BACK HOME ↗</Link>
        </div>
      </footer>
    </>
  );
}
