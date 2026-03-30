import React from "react";

/* How We Work (Light Theme + Red Accent) — Image Placeholder Included — Default Export */

const THEME_RED = "#c0392b";

const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    :root{
      --red: ${THEME_RED};
      --ink: #111114;
      --muted: rgba(17,17,20,0.62);
      --line: rgba(17,17,20,0.10);
      --soft: #faf9f8;
      --soft2: #f4f2f0;
      --radius: 18px;
      --shadow: 0 18px 50px rgba(0,0,0,0.08);
    }

    *{ box-sizing: border-box; }

    .lw-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: #fff;
      color: var(--ink);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    /* subtle grid + warm accent */
    .lw-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      opacity: 0.60;
      pointer-events:none;
    }
    .lw-page::after{
      content:"";
      position:absolute;
      left:-160px; right:-160px; top:-260px;
      height: 600px;
      background:
        radial-gradient(760px 300px at 20% 40%, rgba(192,57,43,0.14), transparent 62%),
        radial-gradient(820px 320px at 80% 30%, rgba(192,57,43,0.10), transparent 64%);
      pointer-events:none;
      opacity: 0.95;
    }

    .lw-shell{
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* HERO (center) */
    .lw-hero{
      padding: 78px 0 34px;
      border-bottom: 1px solid var(--line);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,249,248,0.80) 100%);
    }

    .lw-heroInner{
      text-align: center;
      display:flex;
      flex-direction: column;
      align-items:center;
    }

    .lw-eyebrow{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--red);
      margin: 0 0 14px;
    }
    .lw-eyebrow::before{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      border-radius: 999px;
      opacity: 0.80;
    }

    .lw-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(48px, 6vw, 84px);
      letter-spacing: 0.06em;
      line-height: 0.95;
      margin: 0 0 10px;
      color: var(--ink);
    }
    .lw-title span{ color: var(--red); }

    .lw-lead{
      margin: 0;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.9;
      max-width: 80ch;
    }

    /* CONTENT */
    .lw-section{
      padding: 56px 0 72px;
    }

    .lw-layout{
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 22px;
      align-items: start;
    }

    /* Image placeholder */
    .lw-media{
      border-radius: calc(var(--radius) + 6px);
      border: 1px solid var(--line);
      background: linear-gradient(180deg, #fff 0%, var(--soft2) 100%);
      box-shadow: var(--shadow);
      overflow: hidden;
      position: relative;
      min-height: 420px;
      display:flex;
      align-items: stretch;
      justify-content: stretch;
    }

    .lw-media::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(700px 240px at 25% 10%, rgba(192,57,43,0.12), transparent 60%);
      pointer-events:none;
    }

    .lw-mediaInner{
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 18px;
    }

    .lw-placeholder{
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      border: 1px dashed rgba(17,17,20,0.22);
      background:
        linear-gradient(135deg, rgba(192,57,43,0.06), rgba(17,17,20,0.03)),
        repeating-linear-gradient(
          45deg,
          rgba(17,17,20,0.05) 0px,
          rgba(17,17,20,0.05) 10px,
          rgba(255,255,255,0.0) 10px,
          rgba(255,255,255,0.0) 20px
        );
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      padding: 18px;
      color: rgba(17,17,20,0.65);
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .lw-media img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display:block;
    }

    /* Text column */
    .lw-copy{
      border-radius: calc(var(--radius) + 6px);
      border: 1px solid var(--line);
      background: #fff;
      box-shadow: var(--shadow);
      padding: 20px;
      position: relative;
      overflow: hidden;
    }

    .lw-copy::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(720px 240px at 15% 0%, rgba(192,57,43,0.10), transparent 62%);
      pointer-events:none;
    }

    .lw-copyInner{ position: relative; z-index: 1; }

    .lw-h3{
      margin: 0 0 10px;
      font-size: 14px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 900;
      color: var(--ink);
    }

    .lw-p{
      margin: 0 0 14px;
      color: var(--muted);
      line-height: 1.9;
      font-size: 15px;
    }

    .lw-divider{
      height: 1px;
      background: var(--line);
      margin: 14px 0;
    }

    .lw-list{
      margin: 12px 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 10px;
    }

    .lw-li{
      display:flex;
      gap: 10px;
      align-items:flex-start;
      padding: 10px 12px;
      border-radius: 14px;
      background: linear-gradient(180deg, var(--soft) 0%, #fff 100%);
      border: 1px solid var(--line);
    }

    .lw-check{
      width: 22px;
      height: 22px;
      border-radius: 8px;
      display:grid;
      place-items:center;
      background: rgba(192,57,43,0.10);
      border: 1px solid rgba(192,57,43,0.22);
      flex-shrink: 0;
      color: var(--red);
    }

    .lw-li p{
      margin: 0;
      color: rgba(17,17,20,0.70);
      line-height: 1.65;
      font-size: 13px;
    }

    /* CTA row */
    .lw-ctaRow{
      margin-top: 16px;
      display:flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items:center;
      justify-content: flex-start;
    }

    .lw-btn{
      appearance: none;
      border: none;
      border-radius: 12px;
      padding: 12px 14px;
      font-weight: 900;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      font-size: 11px;
      cursor: pointer;
      transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
      white-space: nowrap;
    }
    .lw-btnPrimary{
      background: var(--red);
      color: #fff;
      box-shadow: 0 16px 34px rgba(192,57,43,0.22);
    }
    .lw-btnPrimary:hover{ transform: translateY(-1px); box-shadow: 0 22px 44px rgba(192,57,43,0.26); }
    .lw-btnGhost{
      background: #fff;
      color: var(--ink);
      border: 1px solid var(--line);
    }
    .lw-btnGhost:hover{ transform: translateY(-1px); box-shadow: 0 14px 28px rgba(0,0,0,0.08); }

    @media (max-width: 980px){
      .lw-layout{ grid-template-columns: 1fr; }
      .lw-media{ min-height: 320px; }
      .lw-ctaRow{ justify-content: center; }
      .lw-copy{ text-align: left; }
    }
  `}</style>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 7L10 17l-5-5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HowWeWorkLightPage = ({
  brandName = "RYAAN SIGNAGE",
  eyebrow = "Our Work",
  titleTop = "How We Work",
  titleAccent = ".",
  lead = "A streamlined process designed for clarity, speed, and premium execution—so your branding looks consistent everywhere.",
  imageSrc, // optional
  ctaPrimary = "Get a Quote",
  ctaSecondary = "Schedule a Call",
}) => {
  return (
    <div className="lw-page" id="how-we-work">
      <BaseStyles />

      <header className="lw-hero">
        <div className="lw-shell">
          <div className="lw-heroInner">
            <p className="lw-eyebrow">{eyebrow}</p>
            <h1 className="lw-title">
              {titleTop}
              <span style={{ color: THEME_RED }}>{titleAccent}</span>
            </h1>
            <p className="lw-lead">{lead}</p>
          </div>
        </div>
      </header>

      <main className="lw-section">
        <div className="lw-shell">
          <div className="lw-layout">
            {/* IMAGE AREA (placeholder) */}
            <section className="lw-media" aria-label="Image placeholder">
              <div className="lw-mediaInner">
                {imageSrc ? (
                  <img src={imageSrc} alt={`${brandName} work process`} />
                ) : (
                  <div className="lw-placeholder">
                    Image Placeholder
                    <br />
                    (Add your photo / mockup here)
                  </div>
                )}
              </div>
            </section>

            {/* TEXT AREA */}
            <section className="lw-copy" aria-label="How we work content">
              <div className="lw-copyInner">
                <h3 className="lw-h3">Process Overview</h3>
                <p className="lw-p">
                  Our team starts with a clear briefing and site evaluation to finalize the best media, size, and placement.
                  Once approvals are confirmed, we share a production plan and timeline—so execution remains smooth and predictable.
                </p>
                <p className="lw-p">
                  After printing and fabrication, our installation team completes the setup with proper alignment and safety standards.
                  We then share final site photographs and provide monitoring support for ongoing campaigns.
                </p>

                <div className="lw-divider" />

                <h3 className="lw-h3">Quality Assurance</h3>
                <p className="lw-p">
                  We focus on premium finishing and consistent brand output—whether it’s a single unit or a multi-location rollout.
                  Every job is checked for color accuracy, material durability, and installation quality.
                </p>

                <ul className="lw-list">
                  {[
                    "Pre-production checks: artwork, color, and size confirmation before printing.",
                    "Material selection based on weather, visibility, and campaign duration.",
                    "Professional installation: level alignment, safe mounting, and clean finishing.",
                    "Post-install reporting: on-site photos and support for campaign monitoring.",
                  ].map((t) => (
                    <li className="lw-li" key={t}>
                      <span className="lw-check" aria-hidden="true">
                        <CheckIcon />
                      </span>
                      <p>{t}</p>
                    </li>
                  ))}
                </ul>

                <div className="lw-ctaRow">
                  <button className="lw-btn lw-btnPrimary" type="button">
                    {ctaPrimary}
                  </button>
                  <button className="lw-btn lw-btnGhost" type="button">
                    {ctaSecondary}
                  </button>
                </div>

                <p className="lw-p" style={{ marginTop: 12, marginBottom: 0, fontSize: 13 }}>
                  <strong style={{ color: THEME_RED, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                    {brandName}
                  </strong>{" "}
                  — consistent branding, delivered professionally.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowWeWorkLightPage;