import React from "react";
import logo from "../img/2.png";

// ✅ Add one more image (replace path with your actual file)
import aboutImg1 from "../img/about.png";
import aboutImg2 from "../img/how.png";

/* About Page (Red/White Theme) — Modern + Clean — 2 Images + Logo — Default Export */

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
    img{ max-width:100%; display:block; }

    .ab-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: #fff;
      color: var(--ink);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    /* Subtle grid + soft red glow */
    .ab-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      pointer-events:none;
      opacity: 0.55;
    }
    .ab-page::after{
      content:"";
      position:absolute;
      left:-160px; right:-160px; top:-260px;
      height: 620px;
      background:
        radial-gradient(780px 320px at 18% 42%, rgba(192,57,43,0.14), transparent 62%),
        radial-gradient(860px 340px at 82% 28%, rgba(192,57,43,0.10), transparent 64%);
      pointer-events:none;
      opacity: 0.95;
    }

    .ab-shell{
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* HERO */
    .ab-hero{
      padding: 140px 0 44px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, #ffffff 0%, var(--soft) 100%);
    }

    .ab-heroInner{
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .ab-logo{
      height: 54px;
      width: auto;
      opacity: 0.92;
      filter: drop-shadow(0 10px 22px rgba(0,0,0,0.10));
      margin-bottom: 4px;
    }

    .ab-eyebrow{
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--red);
      margin: 0;
    }
    .ab-eyebrow::before{
      content:"";
      width: 28px; height: 2px;
      background: var(--red);
      border-radius: 999px;
      opacity: 0.75;
    }

    .ab-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(52px, 7vw, 88px);
      letter-spacing: 0.06em;
      line-height: 0.92;
      margin: 0;
      color: var(--ink);
    }
    .ab-title span{ color: var(--red); }

    .ab-lead{
      margin: 0;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.9;
      max-width: 84ch;
    }

    .ab-heroBadges{
      margin-top: 14px;
      display:flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .ab-badge{
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 900;
      color: var(--ink);
      background: #fff;
      border: 1px solid var(--line);
      padding: 8px 10px;
      border-radius: 999px;
      box-shadow: 0 12px 26px rgba(0,0,0,0.06);
      white-space: nowrap;
    }
    .ab-badge strong{ color: var(--red); }

    /* SECTION BASE */
    .ab-section{
      padding: 58px 0;
    }

    .ab-sectionHead{
      text-align: center;
      margin-bottom: 18px;
    }

    .ab-h2{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(40px, 4.8vw, 54px);
      letter-spacing: 0.05em;
      margin: 0 0 10px;
      line-height: 1;
    }
    .ab-h2 span{ color: var(--red); }

    .ab-p{
      margin: 0 auto;
      max-width: 78ch;
      color: var(--muted);
      line-height: 1.9;
      font-size: 16px;
    }

    /* SPLIT LAYOUT */
    .ab-split{
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 22px;
      align-items: center;
      margin-top: 22px;
    }
    .ab-splitReverse{
      grid-template-columns: 0.95fr 1.05fr;
    }

    .ab-card{
      border-radius: calc(var(--radius) + 6px);
      border: 1px solid var(--line);
      background: #fff;
      box-shadow: var(--shadow);
      padding: 20px;
      position: relative;
      overflow: hidden;
    }
    .ab-card::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(720px 240px at 18% 0%, rgba(192,57,43,0.10), transparent 62%);
      pointer-events:none;
    }
    .ab-cardInner{ position: relative; z-index: 1; }

    .ab-kicker{
      margin: 0 0 10px;
      font-size: 11px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 900;
      color: var(--red);
    }

    .ab-richP{
      margin: 0 0 12px;
      color: rgba(17,17,20,0.70);
      line-height: 1.9;
      font-size: 15px;
    }

    .ab-media{
      border-radius: calc(var(--radius) + 6px);
      border: 1px solid var(--line);
      background: linear-gradient(180deg, #fff 0%, var(--soft2) 100%);
      box-shadow: var(--shadow);
      overflow: hidden;
      position: relative;
      min-height: 420px;
    }
    .ab-media::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(760px 260px at 25% 10%, rgba(192,57,43,0.12), transparent 60%);
      pointer-events:none;
    }
    .ab-media img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.01);
    }

    /* STATS */
    .ab-stats{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .ab-stat{
      border-radius: 16px;
      border: 1px solid var(--line);
      background: linear-gradient(180deg, var(--soft) 0%, #fff 100%);
      padding: 14px;
      text-align: left;
    }
    .ab-statNum{
      display:block;
      font-family: "Bebas Neue", sans-serif;
      font-size: 40px;
      letter-spacing: 0.05em;
      line-height: 1;
      color: var(--red);
      margin-bottom: 6px;
    }
    .ab-statLabel{
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(17,17,20,0.70);
    }

    /* VALUES GRID */
    .ab-values{
      margin-top: 18px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }
    .ab-vCard{
      border-radius: calc(var(--radius) + 2px);
      border: 1px solid var(--line);
      background: #fff;
      box-shadow: 0 16px 44px rgba(0,0,0,0.07);
      padding: 16px;
      position: relative;
      overflow: hidden;
      min-height: 140px;
    }
    .ab-vCard::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(620px 180px at 20% 0%, rgba(192,57,43,0.10), transparent 60%);
      pointer-events:none;
    }
    .ab-vTitle{
      position: relative;
      z-index: 1;
      margin: 0 0 8px;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 12px;
      color: var(--ink);
    }
    .ab-vText{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(17,17,20,0.65);
      line-height: 1.75;
      font-size: 13px;
    }

    /* CTA BAND */
    .ab-cta{
      padding: 56px 0;
      background: linear-gradient(135deg, var(--red) 0%, #e74c3c 45%, var(--red) 100%);
      color: #fff;
      position: relative;
      overflow: hidden;
      border-top: 1px solid rgba(255,255,255,0.22);
    }
    .ab-cta::before{
      content:"";
      position:absolute; inset:0;
      background:
        radial-gradient(760px 260px at 16% 24%, rgba(255,255,255,0.16), transparent 60%),
        radial-gradient(860px 300px at 86% 34%, rgba(0,0,0,0.10), transparent 60%);
      pointer-events:none;
      opacity: 0.95;
    }

    .ab-ctaInner{
      position: relative;
      z-index: 1;
      border-radius: calc(var(--radius) + 10px);
      border: 1px solid rgba(255,255,255,0.22);
      background: rgba(255,255,255,0.10);
      backdrop-filter: blur(8px);
      padding: 18px;
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .ab-ctaTitle{
      margin: 0;
      font-family: "Bebas Neue", sans-serif;
      letter-spacing: 0.06em;
      font-size: 34px;
      line-height: 1;
    }

    .ab-ctaText{
      margin: 6px 0 0;
      opacity: 0.92;
      line-height: 1.7;
      font-size: 13px;
      max-width: 70ch;
    }

    .ab-btnRow{
      display:flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .ab-btn{
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
    .ab-btnLight{
      background: #fff;
      color: var(--ink);
      box-shadow: 0 16px 36px rgba(0,0,0,0.18);
    }
    .ab-btnLight:hover{ transform: translateY(-1px); }
    .ab-btnGhost{
      background: rgba(255,255,255,0.10);
      border: 1px solid rgba(255,255,255,0.28);
      color: #fff;
    }
    .ab-btnGhost:hover{ transform: translateY(-1px); }

    /* RESPONSIVE */
    @media (max-width: 980px){
      .ab-split, .ab-splitReverse{ grid-template-columns: 1fr; }
      .ab-media{ min-height: 320px; }
      .ab-stats{ grid-template-columns: 1fr; }
      .ab-values{ grid-template-columns: 1fr; }
      .ab-ctaInner{ text-align: center; justify-content: center; }
      .ab-btnRow{ justify-content: center; width: 100%; }
    }
  `}</style>
);

const AboutRyaan = ({
  brandName = "RYAAN SIGNAGE",
  ctaPrimary = "Request a Quote",
  ctaSecondary = "Talk to Our Team",
}) => {
  return (
    <div className="ab-page" id="about">
      <BaseStyles />

      {/* HERO */}
      <header className="ab-hero">
        <div className="ab-shell">
          <div className="ab-heroInner">
            <img className="ab-logo" src={logo} alt={`${brandName} logo`} />
            <p className="ab-eyebrow">About Us</p>

            <h1 className="ab-title">
              Built for <span>premium</span> visibility
            </h1>

            <p className="ab-lead">
              {brandName} delivers end-to-end branding—signage, fabrication, printing, and on-site installation.
              Our focus is simple: clean design, strong materials, safe installation, and consistent quality at every location.
            </p>

            <div className="ab-heroBadges" aria-label="Highlights">
              <span className="ab-badge">
                <strong>Design</strong> + Production
              </span>
              <span className="ab-badge">
                <strong>Indoor</strong> / Outdoor
              </span>
              <span className="ab-badge">
                <strong>On-time</strong> Execution
              </span>
              <span className="ab-badge">
                <strong>Premium</strong> Finishing
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: STORY + IMAGE 1 */}
      <section className="ab-section">
        <div className="ab-shell">
          <div className="ab-sectionHead">
            <h2 className="ab-h2">
              Our <span>Journey</span>
            </h2>
            <p className="ab-p">
              From concept to installation, we’ve built a workflow that keeps things fast, transparent, and professional—without compromising on finishing quality.
            </p>
          </div>

          <div className="ab-split">
            <div className="ab-media" aria-label="Workshop / production image">
              <img src={aboutImg1} alt="Ryaan Signage production and planning" />
            </div>

            <div className="ab-card">
              <div className="ab-cardInner">
                <p className="ab-kicker">Who we are</p>
                <p className="ab-richP">
                  We work with businesses, institutions, and event teams to build high-impact signage and branding assets.
                  Every project is planned with the right materials, clean typography, and practical installation methods.
                </p>
                <p className="ab-richP" style={{ marginBottom: 0 }}>
                  Our team ensures the final output looks premium on-site—not just on the design screen.
                </p>

                <div className="ab-stats" aria-label="Company stats">
                  <div className="ab-stat">
                    <span className="ab-statNum">10+</span>
                    <span className="ab-statLabel">Years of Experience</span>
                  </div>
                  <div className="ab-stat">
                    <span className="ab-statNum">500+</span>
                    <span className="ab-statLabel">Projects Delivered</span>
                  </div>
                  <div className="ab-stat">
                    <span className="ab-statNum">24/7</span>
                    <span className="ab-statLabel">Support & Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES + IMAGE 2 */}
      <section className="ab-section" style={{ background: "var(--soft)" }}>
        <div className="ab-shell">
          <div className="ab-sectionHead">
            <h2 className="ab-h2">
              What makes us <span>different</span>
            </h2>
            <p className="ab-p">
              We combine modern design systems with disciplined execution—so your brand remains consistent across formats and locations.
            </p>
          </div>

          <div className="ab-split ab-splitReverse">
            <div className="ab-card">
              <div className="ab-cardInner">
                <p className="ab-kicker">Our standards</p>

                <div className="ab-values" aria-label="Core values">
                  <div className="ab-vCard">
                    <h3 className="ab-vTitle">Precision</h3>
                    <p className="ab-vText">
                      Clean alignments, sharp edges, accurate sizing, and correct placement for maximum readability.
                    </p>
                  </div>
                  <div className="ab-vCard">
                    <h3 className="ab-vTitle">Durability</h3>
                    <p className="ab-vText">
                      Materials selected for weather, handling, and campaign duration—built to last on-site.
                    </p>
                  </div>
                  <div className="ab-vCard">
                    <h3 className="ab-vTitle">Reliability</h3>
                    <p className="ab-vText">
                      Clear timelines, professional installation, and responsive support—start to finish.
                    </p>
                  </div>
                </div>

                <p className="ab-richP" style={{ marginTop: 14, marginBottom: 0 }}>
                  Whether it’s indoor signage, outdoor hoardings, event branding, or printing—we keep the output consistent and premium.
                </p>
              </div>
            </div>

            <div className="ab-media" aria-label="Installation / execution image">
              <img src={aboutImg2} alt="Ryaan Signage on-site installation and execution" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="ab-cta" aria-label="Call to action">
        <div className="ab-shell">
          <div className="ab-ctaInner">
            <div>
              <h3 className="ab-ctaTitle">Let’s build your next high-impact project</h3>
              <p className="ab-ctaText">
                Share your requirements—stall, stage, indoor/outdoor signage, printing, or full branding. We’ll suggest the right plan for maximum visibility.
              </p>
            </div>

            <div className="ab-btnRow">
              <button className="ab-btn ab-btnLight" type="button">
                {ctaPrimary}
              </button>
              <button className="ab-btn ab-btnGhost" type="button">
                {ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutRyaan;