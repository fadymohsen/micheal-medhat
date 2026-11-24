import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights — Perspectives on Strategy & Creative Direction',
  description:
    'Short perspectives on strategy, healthcare communication, the craft of creative direction, and regional storytelling.',
};

const INSIGHTS = [
  {
    num: '01',
    title: 'Design the journey, not just the booth',
    body: 'How event communication changes when every station moves the audience along one connected narrative.',
    caption: 'BAXFENDY and event storytelling are internal proposal examples, not published results.',
  },
  {
    num: '02',
    title: 'Why creative leadership starts before the visual',
    body: 'The most effective conceptual work begins with a framing of the challenge, audience and intended action.',
    caption: 'Based on personal creative methodology, not a third-party claim.',
  },
  {
    num: '03',
    title: 'Regional relevance is a system, not an ornament',
    body: 'Omani heritage, Saudi tourism and GCC healthcare illustrate why local cultural insight belongs inside the idea.',
    caption: 'Examples describe the creative proposals documented in the portfolio.',
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a><span>/</span><span>INSIGHTS</span>
          </div>
          <div className="eyebrow">INSIGHTS</div>
          <h1>Thinking out<br /><span className="accent">loud.</span></h1>
          <p className="lead">
            Short perspectives on strategy, healthcare communication, the craft of creative
            direction, and regional storytelling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          {INSIGHTS.map(({ num, title, body, caption }) => (
            <article key={num} className="panel">
              <div className="eyebrow">PERSPECTIVE {num}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <p className="brands-caption">{caption}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
