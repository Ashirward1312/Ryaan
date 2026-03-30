import React from "react";

/* Red/White Theme Page
   - MissionPage (default export only)
*/

const THEME_RED = "#c0392b";

const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    .rw-page{
      --red: ${THEME_RED};
      --ink: #111114;
      --muted: rgba(17,17,20,0.62);
      --line: rgba(17,17,20,0.10);
      --soft: #faf9f8;
      --soft2: #f4f2f0;
      --radius: 18px;
    }

    *{ box-sizing: border-box; }
    .rw-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      color: var(--ink);
      background: #fff;
    }

    .rw-shell{
      width: min(1100px, calc(100% - 40px));
      margin: 0 auto;
    }

    /* subtle grid */
    .rw-bg{
      position: relative;
      overflow: hidden;
    }
    .rw-bg::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      pointer-events:none;
      opacity: 0.6;
    }

    /* HERO */
    .rw-hero{
      position: relative;
      padding: 74px 0 46px;
      background:
        radial-gradient(1000px 420px at 20% 10%, rgba(192,57,43,0.18), transparent 60%),
        radial-gradient(900px 360px at 80% 15%, rgba(192,57,43,0.10), transparent 62%),
        linear-gradient(180deg, #ffffff 0%, var(--soft) 100%);
      border-bottom: 1px solid var(--line);
    }

    .rw-eyebrow{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--red);
      margin: 0 0 14px;
    }
    .rw-eyebrow::before{
      content:"";
      width: 28px; height: 2px;
      background: var(--red);
      opacity: 0.7;
      border-radius: 999px;
    }

    .rw-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(48px, 6.5vw, 78px);
      letter-spacing: 0.06em;
      line-height: 0.95;
      margin: 0 0 12px;
      color: var(--ink);
    }
    .rw-title span{ color: var(--red); }

    .rw-lead{
      margin: 0;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.8;
      max-width: 64ch;
    }

    .rw-heroRow{
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 22px;
      align-items: start;
      position: relative;
      z-index: 1;
    }

    .rw-heroCard{
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 18px;
      box-shadow: 0 16px 40px rgba(0,0,0,0.06);
      overflow: hidden;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .rw-heroCard::before{
      content:"";
      position:absolute;
      inset: -2px;
      background: radial-gradient(700px 170px at 30% 20%, rgba(192,57,43,0.16), transparent 60%);
      pointer-events:none;
    }

    .rw-mini{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(17,17,20,0.74);
      line-height: 1.7;
      font-size: 13px;
    }

    .rw-ctaRow{
      display:flex;
      justify-content: center;
      gap: 10px;
      margin-top: 14px;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
    }
    .rw-btn{
      appearance: none;
      border: none;
      border-radius: 12px;
      padding: 12px 14px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 11px;
      cursor: pointer;
      transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
    }
    .rw-btnPrimary{
      background: var(--red);
      color: #fff;
      box-shadow: 0 14px 30px rgba(192,57,43,0.22);
    }
    .rw-btnPrimary:hover{ transform: translateY(-1px); box-shadow: 0 20px 40px rgba(192,57,43,0.28); }
    .rw-btnGhost{
      background: #fff;
      color: var(--ink);
      border: 1px solid var(--line);
    }
    .rw-btnGhost:hover{ transform: translateY(-1px); box-shadow: 0 14px 28px rgba(0,0,0,0.08); }

    /* SECTION */
    .rw-section{
      padding: 52px 0;
    }

    .rw-h2{
      font-family: "Bebas Neue", sans-serif;
      font-size: 48px;
      letter-spacing: 0.05em;
      margin: 0 0 14px;
      line-height: 1;
      text-align: center;
    }
    .rw-h2 span{ color: var(--red); }

    .rw-p{
      margin: 0 auto 18px;
      color: var(--muted);
      line-height: 1.85;
      font-size: 16px;
      max-width: 75ch;
      text-align: center;
    }

    .rw-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-top: 18px;
    }

    .rw-card{
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: #fff;
      padding: 16px;
      box-shadow: 0 16px 44px rgba(0,0,0,0.06);
      position: relative;
      overflow: hidden;
      min-height: 120px;
    }
    .rw-card::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(520px 160px at 20% 0%, rgba(192,57,43,0.12), transparent 55%);
      pointer-events:none;
    }
    .rw-cardTop{
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 10px;
      position: relative;
      z-index: 1;
      margin-bottom: 10px;
    }
    .rw-pill{
      font-size: 10px;
      letter-spacing: 0.20em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--red);
      background: rgba(192,57,43,0.08);
      border: 1px solid rgba(192,57,43,0.18);
      padding: 4px 10px;
      border-radius: 999px;
      white-space: nowrap;
    }
    .rw-ico{
      width: 34px;
      height: 34px;
      display:grid;
      place-items:center;
      border-radius: 12px;
      background: rgba(17,17,20,0.04);
      border: 1px solid rgba(17,17,20,0.08);
      color: var(--red);
      flex-shrink: 0;
    }
    .rw-cardTitle{
      position: relative;
      z-index: 1;
      margin: 0 0 6px;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 12px;
      color: var(--ink);
    }
    .rw-cardText{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(17,17,20,0.62);
      line-height: 1.75;
      font-size: 13px;
    }

    /* RED BAND (invert) */
    .rw-band{
      background: linear-gradient(135deg, var(--red) 0%, #e74c3c 45%, var(--red) 100%);
      color: #fff;
      border-top: 1px solid rgba(255,255,255,0.22);
      border-bottom: 1px solid rgba(255,255,255,0.22);
      position: relative;
      overflow: hidden;
    }
    .rw-band::before{
      content:"";
      position:absolute; inset:0;
      background:
        radial-gradient(700px 240px at 15% 15%, rgba(255,255,255,0.18), transparent 60%),
        radial-gradient(800px 260px at 85% 30%, rgba(0,0,0,0.10), transparent 60%);
      opacity: 0.9;
      pointer-events:none;
    }
    .rw-band .rw-h2,
    .rw-band .rw-p{ color: #fff; position: relative; z-index: 1; }
    .rw-band .rw-p{ opacity: 0.88; }

    .rw-list{
      margin: 16px 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      position: relative;
      z-index: 1;
    }
    .rw-li{
      display:flex;
      gap: 10px;
      align-items:flex-start;
      padding: 10px 12px;
      border-radius: 14px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.22);
      backdrop-filter: blur(6px);
    }
    .rw-check{
      width: 22px;
      height: 22px;
      border-radius: 8px;
      display:grid;
      place-items:center;
      background: rgba(255,255,255,0.18);
      border: 1px solid rgba(255,255,255,0.28);
      flex-shrink: 0;
    }
    .rw-li p{
      margin: 0;
      line-height: 1.55;
      font-size: 13px;
      opacity: 0.92;
    }

    /* Footer CTA */
    .rw-footerCta{
      margin-top: 30px;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: linear-gradient(180deg, #fff 0%, var(--soft2) 100%);
      padding: 18px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }
    .rw-footerCta h3{
      margin: 0;
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 0.06em;
      font-size: 32px;
      line-height: 1;
    }
    .rw-footerCta h3 span{ color: var(--red); }
    .rw-footerCta p{
      margin: 6px 0 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.7;
      max-width: 62ch;
    }

    @media (max-width: 900px){
      .rw-heroRow{ grid-template-columns: 1fr; }
      .rw-grid{ grid-template-columns: 1fr; }
      .rw-list{ grid-template-columns: 1fr; }
    }
  `}</style>
);

const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 2v4M12 18v4M2 12h4M18 12h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
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

/* ─────────────────────────────────────────────
   MISSION PAGE (default export)
───────────────────────────────────────────── */
const MissionPage = ({
  brandName = "RYAAN SIGNAGE",
  ctaPrimary = "Start Your Campaign",
  ctaSecondary = "Get Free Consultation",
}) => {
  return (
    <div className="rw-page rw-bg" id="mission">
      <BaseStyles />

      <header className="rw-hero">
        <div className="rw-shell">
          <div className="rw-heroRow">
            <div>
              <p className="rw-eyebrow">Our Mission</p>
              <h1 className="rw-title">
                Build <span>brands</span> that people remember
              </h1>
              <p className="rw-lead">
                Our mission is to deliver high-impact branding, signage, and event solutions with clear strategy,
                premium execution, and on-time delivery—so your business stands out everywhere.
              </p>
            </div>

            <aside className="rw-heroCard" aria-label="Mission highlights">
              <p className="rw-mini">
                Quality-first production, clean design, reliable installation, and measurable visibility across
                indoor/outdoor touchpoints.
              </p>

              <div className="rw-ctaRow">
                <button className="rw-btn rw-btnPrimary" type="button">
                  {ctaPrimary}
                </button>
                <button className="rw-btn rw-btnGhost" type="button">
                  {ctaSecondary}
                </button>
              </div>

              <p className="rw-mini" style={{ marginTop: 12 }}>
                <strong
                  style={{
                    color: THEME_RED,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: 11,
                  }}
                >
                  {brandName}
                </strong>{" "}
                — precision, speed, and consistency.
              </p>
            </aside>
          </div>
        </div>
      </header>

      <main>
        <section className="rw-section">
          <div className="rw-shell">
            <h2 className="rw-h2">
              What we <span>promise</span>
            </h2>
            <p className="rw-p">
              We keep the process simple and professional: clear planning, transparent communication, and premium finishing.
              The result is branding that looks expensive and performs better.
            </p>

            <div className="rw-grid">
              <div className="rw-card">
                <div className="rw-cardTop">
                  <span className="rw-pill">Clarity</span>
                  <span className="rw-ico">
                    <IconTarget />
                  </span>
                </div>
                <h3 className="rw-cardTitle">Strategy before execution</h3>
                <p className="rw-cardText">
                  We align design, placement, and materials to match your audience and location.
                </p>
              </div>

              <div className="rw-card">
                <div className="rw-cardTop">
                  <span className="rw-pill">Speed</span>
                  <span className="rw-ico">
                    <IconBolt />
                  </span>
                </div>
                <h3 className="rw-cardTitle">On-time delivery</h3>
                <p className="rw-cardText">
                  Fast production + disciplined installation timelines for events and campaigns.
                </p>
              </div>

              <div className="rw-card">
                <div className="rw-cardTop">
                  <span className="rw-pill">Trust</span>
                  <span className="rw-ico">
                    <IconShield />
                  </span>
                </div>
                <h3 className="rw-cardTitle">Premium finish & reliability</h3>
                <p className="rw-cardText">
                  Clean edges, strong structures, consistent colors, and dependable support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rw-section rw-band">
          <div className="rw-shell">
            <h2 className="rw-h2">
              Mission <span style={{ color: "#fff" }}>pillars</span>
            </h2>
            <p className="rw-p">
              These pillars guide every project—from a single standee to full exhibition setups.
            </p>

            <ul className="rw-list">
              {[
                "Design that communicates instantly (clean, bold, readable).",
                "Materials that last (weather, handling, and high footfall).",
                "Installation that is safe, aligned, and stable.",
                "Brand consistency across every format & location.",
              ].map((t) => (
                <li className="rw-li" key={t}>
                  <span className="rw-check" aria-hidden="true">
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

        <section className="rw-section">
          <div className="rw-shell">
            <div className="rw-footerCta">
              <div>
                <h3>
                  Ready to make your brand <span>stand out</span>?
                </h3>
                <p>
                  Tell us your requirement (stall, stage, branding, printing, indoor/outdoor). We’ll suggest the best execution plan.
                </p>
              </div>
              <button className="rw-btn rw-btnPrimary" type="button">
                Book a Meeting
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionPage;