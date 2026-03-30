import React, { useMemo } from "react";

/* Testimonials Marquee (Dark Theme + Red Accent)
   - 6 demo items (or pass via props)
   - Auto-scroll + pauses on hover/focus
   - Center-aligned hero content
   - Default Export
*/

const THEME_RED = "#c0392b";

const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    .tm-page{
      --red: ${THEME_RED};
      --bg: #09090b;
      --line: rgba(255,255,255,0.10);
      --text: rgba(255,255,255,0.92);
      --muted: rgba(255,255,255,0.58);
      --muted2: rgba(255,255,255,0.42);
      --radius: 18px;
      --shadow: 0 24px 60px rgba(0,0,0,0.45);
      --gap: 14px;
      --speed: 26s; /* default */
    }

    *{ box-sizing: border-box; }

    .tm-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    /* subtle grid + glow */
    .tm-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 56px 56px;
      opacity: 0.40;
      pointer-events:none;
    }
    .tm-page::after{
      content:"";
      position:absolute;
      left:-120px; right:-120px; top:-220px;
      height: 560px;
      background:
        radial-gradient(720px 300px at 18% 35%, rgba(192,57,43,0.22), transparent 60%),
        radial-gradient(760px 300px at 78% 18%, rgba(192,57,43,0.14), transparent 62%);
      pointer-events:none;
      opacity: 0.95;
    }

    .tm-shell{
      width: min(1100px, calc(100% - 40px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* HERO (center aligned) */
    .tm-hero{
      padding: 78px 0 40px;
      border-bottom: 1px solid var(--line);
    }

    .tm-heroInner{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0;
    }

    .tm-eyebrow{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 700;
      color: rgba(192,57,43,0.95);
      margin: 0 0 14px;
    }
    .tm-eyebrow::before{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      border-radius: 999px;
      opacity: 0.85;
    }

    .tm-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(44px, 6vw, 74px);
      letter-spacing: 0.06em;
      line-height: 0.95;
      margin: 0 0 12px;
      color: rgba(255,255,255,0.96);
    }
    .tm-title span{ color: var(--red); }

    .tm-lead{
      margin: 0;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.85;
      max-width: 78ch;
    }

    /* SECTION */
    .tm-section{
      padding: 44px 0 72px;
    }

    .tm-sectionInner{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    /* Marquee frame centered + full width in container */
    .tm-marqueeFrame{
      width: 100%;
      border-radius: calc(var(--radius) + 4px);
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.03);
      box-shadow: var(--shadow);
      padding: 16px;
      position: relative;
      overflow: hidden;
    }

    .tm-marqueeFrame::before,
    .tm-marqueeFrame::after{
      content:"";
      position:absolute;
      top:0; bottom:0;
      width: 90px;
      pointer-events:none;
      z-index: 2;
    }
    .tm-marqueeFrame::before{
      left:0;
      background: linear-gradient(90deg, rgba(9,9,11,1), rgba(9,9,11,0));
    }
    .tm-marqueeFrame::after{
      right:0;
      background: linear-gradient(270deg, rgba(9,9,11,1), rgba(9,9,11,0));
    }

    .tm-marquee{
      overflow:hidden;
      position: relative;
      z-index: 1;
    }

    .tm-track{
      display:flex;
      gap: var(--gap);
      width: max-content;
      animation: tm-scroll var(--speed) linear infinite;
      will-change: transform;
      padding: 6px 0;
    }

    /* pause on hover or keyboard focus */
    .tm-marqueeFrame:hover .tm-track,
    .tm-marqueeFrame:focus-within .tm-track{
      animation-play-state: paused;
    }

    @keyframes tm-scroll{
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }

    @media (prefers-reduced-motion: reduce){
      .tm-track{ animation: none; }
    }

    /* Cards */
    .tm-card{
      border-radius: var(--radius);
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%);
      padding: 16px;
      box-shadow: 0 20px 56px rgba(0,0,0,0.40);
      position: relative;
      overflow: hidden;
      min-height: 170px;
      width: 340px;
      flex: 0 0 auto;
      display:flex;
      flex-direction: column;
      text-align: left; /* cards read better left-aligned */
    }
    .tm-card::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(560px 180px at 18% 0%, rgba(192,57,43,0.16), transparent 58%);
      pointer-events:none;
    }

    .tm-quote{
      width: 38px;
      height: 38px;
      display:grid;
      place-items:center;
      border-radius: 14px;
      background: rgba(192,57,43,0.12);
      border: 1px solid rgba(192,57,43,0.28);
      position: relative;
      z-index: 1;
      margin-bottom: 10px;
      flex-shrink: 0;
    }

    .tm-text{
      position: relative;
      z-index: 1;
      margin: 0 0 12px;
      color: rgba(255,255,255,0.92);
      line-height: 1.75;
      font-weight: 650;
      font-size: 14px;
    }

    .tm-meta{
      position: relative;
      z-index: 1;
      margin-top: auto;
      padding-top: 12px;
      border-top: 1px dashed rgba(255,255,255,0.14);
      display:flex;
      align-items:flex-end;
      justify-content: space-between;
      gap: 10px;
    }

    .tm-who{ min-width: 0; }
    .tm-name{
      margin:0;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0.04em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgba(255,255,255,0.92);
    }
    .tm-role{
      margin: 6px 0 0;
      font-size: 12px;
      color: rgba(255,255,255,0.48);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tm-tag{
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(255,255,255,0.92);
      background: rgba(192,57,43,0.12);
      border: 1px solid rgba(192,57,43,0.22);
      padding: 5px 10px;
      border-radius: 999px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .tm-footNote{
      margin: 8px 0 0;
      color: var(--muted2);
      font-size: 12px;
      line-height: 1.7;
      text-align: center;
      max-width: 80ch;
    }

    @media (max-width: 900px){
      .tm-card{ width: 86vw; max-width: 420px; }
      .tm-marqueeFrame::before,
      .tm-marqueeFrame::after{ width: 56px; }
      .tm-lead{ max-width: 58ch; }
    }
  `}</style>
);

const IconQuote = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7.2 17.6H3.8c-.9 0-1.6-.7-1.6-1.6v-3.4C2.2 9.5 4.7 7 7.8 7h.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1H7.8c-1.9 0-3.4 1.5-3.4 3.4v.2h2.8c.9 0 1.6.7 1.6 1.6V16c0 .9-.7 1.6-1.6 1.6Zm13 0h-3.4c-.9 0-1.6-.7-1.6-1.6v-3.4c0-3.1 2.5-5.6 5.6-5.6h.8c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1h-.8c-1.9 0-3.4 1.5-3.4 3.4v.2h2.8c.9 0 1.6.7 1.6 1.6V16c0 .9-.7 1.6-1.6 1.6Z"
      fill="white"
      opacity="0.92"
    />
  </svg>
);

const TestimonialCard = ({ t }) => (
  <article className="tm-card">
    <div className="tm-quote" aria-hidden="true">
      <IconQuote />
    </div>

    <p className="tm-text">“{t.text}”</p>

    <div className="tm-meta">
      <div className="tm-who">
        <p className="tm-name">{t.name}</p>
        <p className="tm-role">{t.role}</p>
      </div>
      <span className="tm-tag">{t.tag}</span>
    </div>
  </article>
);

const TestimonialsMarqueeDark = ({ brandName = "RYAAN SIGNAGE", speed = "26s", items }) => {
  const testimonials = useMemo(
    () =>
      items ?? [
        {
          text: "Prime locations and flawless execution—our footfall increased noticeably within two weeks.",
          name: "Aakash Mehta",
          role: "Marketing Head • Nova Mart, Ahmedabad",
          tag: "Hoarding",
        },
        {
          text: "Excellent visibility, day and night—exactly as promised.",
          name: "Priya Sharma",
          role: "Founder • FitFuel Café, Jaipur",
          tag: "Unipole",
        },
        {
          text: "From planning to permissions, everything was handled smoothly. Truly hassle-free outdoor advertising.",
          name: "Neeraj Kapoor",
          role: "Admin Manager • Skyline Residency, Pune",
          tag: "Permissions",
        },
        {
          text: "Our LED screen campaign ran perfectly. Strong reach and great audience engagement.",
          name: "Sana Khan",
          role: "Digital Lead • Glow Cosmetics, Mumbai",
          tag: "LED",
        },
        {
          text: "Quick turnaround and clean installations. Very professional execution.",
          name: "Rohit Verma",
          role: "Operations Head • Metro Tools, Delhi",
          tag: "Execution",
        },
        {
          text: "Transparent pricing, practical recommendations, and reliable campaign monitoring.",
          name: "Ananya Iyer",
          role: "Director • GreenLeaf Schools, Bengaluru",
          tag: "Transparent",
        },
      ],
    [items]
  );

  // Duplicate for seamless loop (-50%)
  const loopItems = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  return (
    <div className="tm-page" id="testimonials">
      <BaseStyles />

      <header className="tm-hero">
        <div className="tm-shell">
          <div className="tm-heroInner">
            <p className="tm-eyebrow">Testimonials</p>
            <h1 className="tm-title">
              Brands trust <span>{brandName}</span>
            </h1>
            
          </div>
        </div>
      </header>

      <main className="tm-section">
        <div className="tm-shell">
          <div className="tm-sectionInner">
            <div className="tm-marqueeFrame" style={{ "--speed": speed }}>
              <div className="tm-marquee" aria-label="Testimonials marquee">
                <div className="tm-track">
                  {loopItems.map((t, idx) => (
                    <TestimonialCard t={t} key={`${t.tag}-${idx}`} />
                  ))}
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  );
};

export default TestimonialsMarqueeDark;