import React from "react";
import { Link } from "react-router-dom";

/* Vision Page (Dark Theme + Red Accent) — NO ROADMAP — Default Export */

const THEME_RED = "#c0392b";

const BaseStyles = () => (
  <style>{`

    .vd-page{
      --red: ${THEME_RED};
      --bg: #09090b;
      --panel: rgba(255,255,255,0.04);
      --panel2: rgba(255,255,255,0.06);
      --line: rgba(255,255,255,0.10);
      --text: rgba(255,255,255,0.92);
      --muted: rgba(255,255,255,0.60);
      --radius: 18px;
    }

    *{ box-sizing: border-box; }

    .vd-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    /* subtle grid + glow */
    .vd-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 56px 56px;
      opacity: 0.40;
      pointer-events:none;
    }
    .vd-page::after{
      content:"";
      position:absolute;
      left:-120px; right:-120px; top:-220px;
      height: 560px;
      background:
        radial-gradient(740px 300px at 22% 40%, rgba(192,57,43,0.22), transparent 60%),
        radial-gradient(760px 300px at 78% 28%, rgba(192,57,43,0.14), transparent 62%);
      pointer-events:none;
      opacity: 0.95;
    }

    .vd-shell{
      width: min(1100px, calc(100% - 40px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* HERO */
    .vd-hero{
      padding: 78px 0 40px;
      border-bottom: 1px solid var(--line);
    }

    .vd-heroRow{
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 22px;
      align-items: start;
    }

    .vd-eyebrow{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 700;
      color: rgba(192,57,43,0.95);
      margin: 0 0 14px;
    }
    .vd-eyebrow::before{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      border-radius: 999px;
      opacity: 0.85;
    }

    .vd-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(48px, 6.5vw, 78px);
      letter-spacing: 0.06em;
      line-height: 0.95;
      margin: 0 0 12px;
      color: rgba(255,255,255,0.96);
    }
    .vd-title span{ color: var(--red); }

    .vd-lead{
      margin: 0;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.85;
      max-width: 72ch;
    }

    .vd-heroCard{
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: var(--radius);
      padding: 18px;
      box-shadow: 0 24px 60px rgba(0,0,0,0.45);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: left;
    }
    .vd-heroCard::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(700px 220px at 30% 10%, rgba(192,57,43,0.20), transparent 62%);
      pointer-events:none;
    }

    .vd-mini{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(255,255,255,0.70);
      line-height: 1.75;
      font-size: 13px;
    }

    .vd-brandLine{
      position: relative;
      z-index: 1;
      margin: 0;
      font-size: 12px;
      line-height: 1.6;
      color: rgba(255,255,255,0.70);
    }

    .vd-ctaRow{
      display:flex;
      gap: 12px;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      margin-top: 2px;
    }

    .vd-btn{
      appearance: none;
      border: none;
      border-radius: 12px;
      padding: 12px 14px;
      font-weight: 800;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      font-size: 11px;
      cursor: pointer;
      display: inline-block;
      text-decoration: none;
      text-align: center;
      transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
      white-space: nowrap;
    }
    .vd-btnPrimary{
      background: var(--red);
      color: #fff;
      box-shadow: 0 16px 34px rgba(192,57,43,0.25);
    }
    .vd-btnPrimary:hover{ transform: translateY(-1px); box-shadow: 0 22px 44px rgba(192,57,43,0.30); }
    .vd-btnGhost{
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.92);
      border: 1px solid rgba(255,255,255,0.12);
    }
    .vd-btnGhost:hover{
      transform: translateY(-1px);
      border-color: rgba(255,255,255,0.22);
      box-shadow: 0 16px 34px rgba(0,0,0,0.35);
    }

    /* SECTION */
    .vd-section{
      padding: 56px 0;
    }

    .vd-h2{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(42px, 5vw, 54px);
      letter-spacing: 0.05em;
      margin: 0 0 14px;
      line-height: 1;
      color: rgba(255,255,255,0.96);
      text-align: center;
    }
    .vd-h2 span{ color: var(--red); }

    .vd-p{
      margin: 0 auto 22px;
      color: var(--muted);
      line-height: 1.9;
      font-size: 16px;
      max-width: 78ch;
      text-align: center;
    }

    .vd-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 18px;
    }

    .vd-card{
      border-radius: var(--radius);
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%);
      padding: 16px;
      box-shadow: 0 20px 56px rgba(0,0,0,0.40);
      position: relative;
      overflow: hidden;
      min-height: 150px;
      display: flex;
      flex-direction: column;
    }
    .vd-card::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(540px 160px at 20% 0%, rgba(192,57,43,0.16), transparent 58%);
      pointer-events:none;
    }

    .vd-cardTop{
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 10px;
      position: relative;
      z-index: 1;
      margin-bottom: 10px;
    }

    .vd-pill{
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 800;
      color: rgba(255,255,255,0.92);
      background: rgba(192,57,43,0.12);
      border: 1px solid rgba(192,57,43,0.22);
      padding: 5px 10px;
      border-radius: 999px;
      white-space: nowrap;
    }

    .vd-ico{
      width: 36px;
      height: 36px;
      display:grid;
      place-items:center;
      border-radius: 12px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.92);
      flex-shrink: 0;
    }

    .vd-cardTitle{
      position: relative;
      z-index: 1;
      margin: 0 0 6px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-size: 12px;
      color: rgba(255,255,255,0.92);
    }

    .vd-cardText{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(255,255,255,0.60);
      line-height: 1.75;
      font-size: 13px;
    }

    /* RED BAND */
    .vd-band{
      background: linear-gradient(135deg, var(--red) 0%, #e74c3c 45%, var(--red) 100%);
      border-top: 1px solid rgba(255,255,255,0.22);
      border-bottom: 1px solid rgba(255,255,255,0.22);
      position: relative;
      overflow: hidden;
    }
    .vd-band::before{
      content:"";
      position:absolute; inset:0;
      background:
        radial-gradient(700px 240px at 15% 15%, rgba(255,255,255,0.16), transparent 60%),
        radial-gradient(800px 260px at 85% 30%, rgba(0,0,0,0.12), transparent 60%);
      pointer-events:none;
      opacity: 0.95;
    }

    .vd-band .vd-h2,
    .vd-band .vd-p{
      position: relative;
      z-index: 1;
      color: #fff;
    }
    .vd-band .vd-p{ opacity: 0.92; }

    .vd-list{
      margin: 16px 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      position: relative;
      z-index: 1;
    }

    .vd-li{
      display:flex;
      gap: 10px;
      align-items:flex-start;
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.22);
      backdrop-filter: blur(6px);
    }

    .vd-check{
      width: 22px;
      height: 22px;
      border-radius: 8px;
      display:grid;
      place-items:center;
      background: rgba(255,255,255,0.18);
      border: 1px solid rgba(255,255,255,0.28);
      flex-shrink: 0;
    }

    .vd-li p{
      margin: 0;
      line-height: 1.55;
      font-size: 13px;
      opacity: 0.95;
      color: #fff;
    }

    /* Footer CTA */
    .vd-footerCta{
      margin-top: 28px;
      border-radius: var(--radius);
      border: 1px solid rgba(255,255,255,0.10);
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%);
      padding: 18px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 14px;
      flex-wrap: wrap;
      box-shadow: 0 22px 60px rgba(0,0,0,0.40);
    }

    .vd-footerCta h3{
      margin: 0;
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 0.06em;
      font-size: 32px;
      line-height: 1;
      color: rgba(255,255,255,0.95);
    }
    .vd-footerCta h3 span{ color: var(--red); }

    .vd-footerCta p{
      margin: 6px 0 0;
      color: rgba(255,255,255,0.62);
      font-size: 13px;
      line-height: 1.7;
      max-width: 62ch;
    }

    @media (max-width: 980px){
      .vd-heroRow{ grid-template-columns: 1fr; }
      .vd-grid{ grid-template-columns: 1fr; }
      .vd-list{ grid-template-columns: 1fr; }
    }
  `}</style>
);

/* Simple icons */
const IconEye = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M2.5 12s3.8-7 9.5-7 9.5 7 9.5 7-3.8 7-9.5 7-9.5-7-9.5-7z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFlag = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 4h11l-2 4 2 4H5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const VisionDarkPage = ({
  brandName = "RYAAN SIGNAGE",
  ctaPrimary = "View Our Work",
  ctaSecondary = "Speak with an Expert",
}) => {
  return (
    <div className="vd-page" id="vision">
      <BaseStyles />

      <header className="vd-hero">
        <div className="vd-shell">
          <div className="vd-heroRow">
            <div>
              <p className="vd-eyebrow">Our Vision</p>
              <h1 className="vd-title">
                Become the most <span>trusted</span> branding partner
              </h1>
              <p className="vd-lead">
                Our vision is to set a higher standard in signage and event branding—where design quality, execution speed,
                and reliability feel effortless for every client.
              </p>
            </div>

            <aside className="vd-heroCard" aria-label="Vision highlights">
              <p className="vd-mini">
                A future where every brand receives premium visibility—consistent, scalable, and professionally installed across cities.
              </p>

              <div className="vd-ctaRow">
                <Link to="/gallery" className="vd-btn vd-btnPrimary">
                  {ctaPrimary}
                </Link>
                <Link to="/contact" className="vd-btn vd-btnGhost">
                  {ctaSecondary}
                </Link>
              </div>

              <p className="vd-brandLine">
                <strong style={{ color: THEME_RED, letterSpacing: "0.10em", textTransform: "uppercase", fontSize: 11 }}>
                  {brandName}
                </strong>{" "}
                — future-ready branding systems.
              </p>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="vd-section">
          <div className="vd-shell">
            <h2 className="vd-h2">
              Where we’re <span>headed</span>
            </h2>
            <p className="vd-p">
              We’re building a stronger delivery engine—better processes, better materials, and better teams—so every project
              looks premium and installs perfectly.
            </p>

            <div className="vd-grid">
              <div className="vd-card">
                <div className="vd-cardTop">
                  <span className="vd-pill">Visibility</span>
                  <span className="vd-ico">
                    <IconEye />
                  </span>
                </div>
                <h3 className="vd-cardTitle">More impact per location</h3>
                <p className="vd-cardText">Smarter design and placement to maximize attention and brand recall.</p>
              </div>

              <div className="vd-card">
                <div className="vd-cardTop">
                  <span className="vd-pill">Systems</span>
                  <span className="vd-ico">
                    <IconShield />
                  </span>
                </div>
                <h3 className="vd-cardTitle">Standardized premium execution</h3>
                <p className="vd-cardText">Repeatable quality across stalls, stages, printing, and outdoor branding.</p>
              </div>

              <div className="vd-card">
                <div className="vd-cardTop">
                  <span className="vd-pill">Growth</span>
                  <span className="vd-ico">
                    <IconFlag />
                  </span>
                </div>
                <h3 className="vd-cardTitle">Scale across cities</h3>
                <p className="vd-cardText">Expand capacity while maintaining the same finishing standards.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="vd-section vd-band">
          <div className="vd-shell">
            <h2 className="vd-h2">
              Vision <span style={{ color: "#fff" }}>principles</span>
            </h2>
            <p className="vd-p">
              These principles ensure every project—small or large—feels premium, consistent, and professionally executed.
            </p>

            <ul className="vd-list">
              {[
                "Premium visibility: clean, bold, readable designs.",
                "Consistent execution: the same finishing across formats.",
                "Reliable timelines: planned delivery and disciplined installation.",
                "Long-term trust: durable materials, safe setup, and responsive support.",
              ].map((t) => (
                <li className="vd-li" key={t}>
                  <span className="vd-check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 7L10 17l-5-5"
                        stroke="#fff"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p>{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="vd-section">
          <div className="vd-shell">
            <div className="vd-footerCta">
              <div>
                <h3>
                  Let’s build your next <span>high-impact</span> project
                </h3>
                <p>
                  Share your requirement (stall, stage, indoor/outdoor branding, printing). We’ll recommend the best setup for maximum visibility.
                </p>
              </div>
                <Link to="/contact" className="vd-btn vd-btnPrimary">
                  Request a Quote
                </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisionDarkPage;