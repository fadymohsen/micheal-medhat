import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact — Let's Discuss What's Next",
  description:
    'New brand challenges, integrated projects, strategic partnerships or regional leadership opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>CONTACT</span>
          </div>
          <div className="eyebrow">CONTACT</div>
          <h1>Let&apos;s discuss<br /><span className="accent">what&apos;s next.</span></h1>
          <p className="lead">
            New brand challenges, integrated projects, strategic partnerships or regional leadership
            opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div>
            <div className="eyebrow">DIRECT CONTACT</div>
            <h2>Start the<br /><span className="accent">conversation.</span></h2>
            <p className="lead">
              Share your brief, challenge or opportunity. The form sends via the API when available,
              or opens your email client as fallback.
            </p>
            <div className="links-bar">
              <a className="btn ghost" href="mailto:micamedhat@gmail.com">EMAIL ME ↗</a>
              <a
                className="btn ghost"
                href="https://www.linkedin.com/in/michaelmedhat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN ↗
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
