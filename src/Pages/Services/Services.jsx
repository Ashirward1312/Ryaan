import React, { useEffect, useMemo, useRef } from "react";

/* Services Page (Dark / Black Theme + Red Accent)
   ✅ Same poster content (no images)
   ✅ Premium layout + clean spacing
   ✅ Scroll reveal + stagger animations (no library)
   ✅ Default Export
*/

const THEME_RED = "#c0392b";

/* ─────────────────────────────────────────────
   Reveal on scroll (IntersectionObserver)
───────────────────────────────────────────── */
function useReveal(options = { threshold: 0.12 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        io.disconnect();
      }
    }, options);

    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return ref;
}

const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    :root{
      --red: ${THEME_RED};
      --bg: #09090b;
      --panel: rgba(255,255,255,0.05);
      --panel2: rgba(255,255,255,0.07);
      --line: rgba(255,255,255,0.10);
      --text: rgba(255,255,255,0.92);
      --muted: rgba(255,255,255,0.62);
      --muted2: rgba(255,255,255,0.44);
      --radius: 18px;
      --shadow: 0 26px 70px rgba(0,0,0,0.55);
    }

    *{ box-sizing:border-box; }
    a{ color: inherit; text-decoration: none; }

    .svd-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height:100vh;
      position: relative;
      overflow: hidden;
    }

    /* grid + glow */
    .svd-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 56px 56px;
      pointer-events:none;
      opacity: 0.40;
    }
    .svd-page::after{
      content:"";
      position:absolute;
      left:-140px; right:-140px; top:-240px;
      height: 620px;
      background:
        radial-gradient(760px 320px at 18% 38%, rgba(192,57,43,0.26), transparent 60%),
        radial-gradient(860px 340px at 82% 28%, rgba(192,57,43,0.14), transparent 62%);
      pointer-events:none;
      opacity: 0.95;
    }

    .svd-shell{
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* TOP BAR */
    .svd-topbar{
      position: sticky;
      top: 0;
      z-index: 5;
      border-bottom: 1px solid var(--line);
      background: rgba(9,9,11,0.72);
      backdrop-filter: blur(10px);
    }
    .svd-topbarInner{
      padding: 12px 0;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 13px;
      color: rgba(255,255,255,0.82);
    }
    .svd-topLabel{
      display:flex;
      gap: 10px;
      align-items:center;
      flex-wrap: wrap;
    }
    .svd-topLabel strong{
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.90);
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(192,57,43,0.14);
      border: 1px solid rgba(192,57,43,0.22);
      white-space: nowrap;
    }
    .svd-links{
      display:flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items:center;
    }
    .svd-link{
      padding: 8px 12px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      border-radius: 999px;
      box-shadow: 0 16px 40px rgba(0,0,0,0.35);
      font-weight: 700;
      font-size: 12px;
      white-space: nowrap;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }
    .svd-link:hover{
      transform: translateY(-1px);
      border-color: rgba(255,255,255,0.22);
      background: rgba(255,255,255,0.06);
    }

    /* HERO */
    .svd-hero{
      padding: 76px 0 42px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 100%);
    }
    .svd-heroInner{
      text-align: center;
      max-width: 980px;
      margin: 0 auto;
    }

    .svd-eyebrow{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap: 10px;
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 800;
      color: rgba(192,57,43,0.95);
      margin: 0 0 14px;
    }
    .svd-eyebrow::before{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      border-radius: 999px;
      opacity: 0.85;
    }

    .svd-title{
      font-family:"Bebas Neue", sans-serif;
      font-size: clamp(48px, 6.2vw, 86px);
      letter-spacing: 0.06em;
      line-height: 0.95;
      margin: 0 0 10px;
      color: rgba(255,255,255,0.96);
    }
    .svd-title span{ color: var(--red); }

    .svd-lead{
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.9;
      font-size: 16px;
      max-width: 84ch;
    }

    .svd-chips{
      margin-top: 18px;
      display:flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    .svd-chip{
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-weight: 900;
      padding: 8px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.86);
      white-space: nowrap;
    }

    /* SECTION */
    .svd-section{
      padding: 56px 0;
    }
    .svd-head{
      text-align:center;
      margin-bottom: 18px;
    }
    .svd-h2{
      font-family:"Bebas Neue", sans-serif;
      font-size: clamp(38px, 5vw, 56px);
      letter-spacing: 0.05em;
      line-height: 1;
      margin: 0 0 10px;
      color: rgba(255,255,255,0.96);
    }
    .svd-h2 span{ color: var(--red); }
    .svd-p{
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.9;
      font-size: 16px;
      max-width: 78ch;
    }

    /* GRID */
    .svd-grid{
      margin-top: 22px;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .svd-card{
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: calc(var(--radius) + 6px);
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%);
      box-shadow: var(--shadow);
      padding: 16px;
      position: relative;
      overflow: hidden;
      min-height: 178px;
      display:flex;
      flex-direction: column;
      transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }

    .svd-card::before{
      content:"";
      position:absolute;
      inset:-2px;
      background: radial-gradient(680px 200px at 20% 0%, rgba(192,57,43,0.18), transparent 60%);
      pointer-events:none;
      opacity: 0.95;
    }

    .svd-card:hover{
      transform: translateY(-2px);
      border-color: rgba(192,57,43,0.26);
      box-shadow: 0 30px 78px rgba(0,0,0,0.62);
    }

    .svd-cardTop{
      position: relative;
      z-index: 1;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 10px;
    }

    .svd-pill{
      font-size: 10px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(255,255,255,0.92);
      background: rgba(192,57,43,0.14);
      border: 1px solid rgba(192,57,43,0.26);
      padding: 5px 10px;
      border-radius: 999px;
      white-space: nowrap;
    }

    .svd-ico{
      width: 38px;
      height: 38px;
      display:grid;
      place-items:center;
      border-radius: 14px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.92);
      flex-shrink: 0;
    }

    .svd-cardTitle{
      position: relative;
      z-index: 1;
      margin: 0 0 8px;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-size: 12px;
      color: rgba(255,255,255,0.92);
    }

    .svd-cardText{
      position: relative;
      z-index: 1;
      margin: 0;
      color: rgba(255,255,255,0.62);
      line-height: 1.75;
      font-size: 13px;
    }

    .svd-tags{
      position: relative;
      z-index: 1;
      margin-top: auto;
      padding-top: 12px;
      border-top: 1px dashed rgba(255,255,255,0.14);
      display:flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .svd-tag{
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 800;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.80);
      white-space: nowrap;
    }

    /* EXPERTISE LIST */
    .svd-listWrap{
      margin-top: 22px;
      border: 1px solid rgba(255,255,255,0.12);
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%);
      border-radius: calc(var(--radius) + 6px);
      box-shadow: var(--shadow);
      overflow:hidden;
    }

    .svd-listHeader{
      padding: 16px;
      border-bottom: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.03);
    }
    .svd-listHeader p{
      margin: 0;
      color: rgba(255,255,255,0.64);
      line-height: 1.8;
      font-size: 14px;
    }

    .svd-list{
      list-style:none;
      margin:0;
      padding: 14px;
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .svd-li{
      display:flex;
      gap: 10px;
      align-items:flex-start;
      padding: 12px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
    }

    .svd-check{
      width: 22px;
      height: 22px;
      border-radius: 8px;
      display:grid;
      place-items:center;
      background: rgba(192,57,43,0.14);
      border: 1px solid rgba(192,57,43,0.26);
      color: rgba(255,255,255,0.92);
      flex-shrink: 0;
      margin-top: 1px;
    }

    .svd-li h4{
      margin: 0 0 4px;
      font-size: 12px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(255,255,255,0.88);
    }

    .svd-li p{
      margin: 0;
      color: rgba(255,255,255,0.60);
      line-height: 1.7;
      font-size: 13px;
    }

    /* CTA BAND */
    .svd-cta{
      padding: 56px 0;
      background: linear-gradient(135deg, var(--red) 0%, #e74c3c 45%, var(--red) 100%);
      color:#fff;
      border-top: 1px solid rgba(255,255,255,0.22);
      position: relative;
      overflow: hidden;
    }
    .svd-cta::before{
      content:"";
      position:absolute; inset:0;
      background:
        radial-gradient(760px 260px at 16% 24%, rgba(255,255,255,0.16), transparent 60%),
        radial-gradient(860px 300px at 86% 34%, rgba(0,0,0,0.10), transparent 60%);
      pointer-events:none;
      opacity: 0.95;
    }

    .svd-ctaBox{
      position: relative;
      z-index: 1;
      border-radius: calc(var(--radius) + 10px);
      border: 1px solid rgba(255,255,255,0.22);
      background: rgba(255,255,255,0.10);
      backdrop-filter: blur(8px);
      padding: 18px;
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .svd-ctaTitle{
      margin: 0;
      font-family:"Bebas Neue", sans-serif;
      letter-spacing: 0.06em;
      font-size: 34px;
      line-height: 1;
    }

    .svd-ctaText{
      margin: 6px 0 0;
      font-size: 13px;
      line-height: 1.7;
      opacity: 0.92;
      max-width: 72ch;
    }

    .svd-btnRow{ display:flex; gap: 10px; flex-wrap: wrap; }

    .svd-btn{
      appearance:none;
      border:none;
      border-radius: 12px;
      padding: 12px 14px;
      font-weight: 900;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      font-size: 11px;
      cursor:pointer;
      transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
      white-space: nowrap;
    }
    .svd-btnLight{
      background:#fff;
      color: #111114;
      box-shadow: 0 16px 36px rgba(0,0,0,0.20);
    }
    .svd-btnLight:hover{ transform: translateY(-1px); }
    .svd-btnGhost{
      background: rgba(255,255,255,0.10);
      border: 1px solid rgba(255,255,255,0.28);
      color:#fff;
    }
    .svd-btnGhost:hover{ transform: translateY(-1px); }

    /* Animations */
    .reveal{
      opacity: 0;
      transform: translateY(14px);
      transition: opacity 650ms ease, transform 650ms ease;
    }
    .reveal.is-visible{
      opacity: 1;
      transform: translateY(0);
    }

    .stagger > *{
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 650ms ease, transform 650ms ease;
    }
    .stagger.is-visible > *{
      opacity: 1;
      transform: translateY(0);
    }
    .stagger.is-visible > *:nth-child(1){ transition-delay: 0ms; }
    .stagger.is-visible > *:nth-child(2){ transition-delay: 70ms; }
    .stagger.is-visible > *:nth-child(3){ transition-delay: 140ms; }
    .stagger.is-visible > *:nth-child(4){ transition-delay: 210ms; }
    .stagger.is-visible > *:nth-child(5){ transition-delay: 280ms; }
    .stagger.is-visible > *:nth-child(6){ transition-delay: 350ms; }
    .stagger.is-visible > *:nth-child(7){ transition-delay: 420ms; }
    .stagger.is-visible > *:nth-child(8){ transition-delay: 490ms; }

    @media (prefers-reduced-motion: reduce){
      .reveal, .stagger > *{
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
      .svd-card{ transition:none !important; }
    }

    @media (max-width: 980px){
      .svd-grid{ grid-template-columns: 1fr; }
      .svd-list{ grid-template-columns: 1fr; }
      .svd-ctaBox{ justify-content:center; text-align:center; }
      .svd-btnRow{ width:100%; justify-content:center; }
    }
  `}</style>
);

/* Icons */
const IconPrint = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 8V4h10v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M7 17h10v3H7v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 10H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 10h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconSign = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M5 5h13l-2 4 2 4H5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconEvent = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 20V10l8-6 8 6v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceCard = ({ s }) => (
  <article className="svd-card">
    <div className="svd-cardTop">
      <span className="svd-pill">{s.pill}</span>
      <span className="svd-ico" aria-hidden="true">
        {s.icon}
      </span>
    </div>

    <h3 className="svd-cardTitle">{s.title}</h3>
    <p className="svd-cardText">{s.desc}</p>

    <div className="svd-tags" aria-label="Service tags">
      {s.tags.map((t) => (
        <span className="svd-tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  </article>
);

const ServicesDarkPremium = ({
  brandName = "RYAAN SIGNAGE",
  email = "ryaansignage@gmail.com",
  phones = ["7000315002", "9098307070"],
  ctaPrimary = "Request a Quote",
  ctaSecondary = "Call Now",
}) => {
  const gridRef = useReveal();
  const expertiseRef = useReveal();
  const headRef = useReveal();

  // ✅ Poster services (professional naming)
  const services = useMemo(
    () => [
      {
        pill: "Printing",
        title: "Flex Printing",
        desc: "High-visibility flex prints with clean finishing and accurate output for indoor and outdoor use.",
        tags: ["Indoor", "Outdoor", "Large Format"],
        icon: <IconPrint />,
      },
      {
        pill: "Printing",
        title: "Eco Solvent Printing",
        desc: "Premium eco-solvent prints with richer color depth and improved durability for longer campaigns.",
        tags: ["Eco Solvent", "Premium Output"],
        icon: <IconPrint />,
      },
      {
        pill: "Printing",
        title: "Vinyl Printing",
        desc: "Sharp vinyl prints for branding, stickers, and surface applications with multiple finish options.",
        tags: ["Vinyl", "Branding", "Stickers"],
        icon: <IconPrint />,
      },
      {
        pill: "Safety",
        title: "Retro Reflective",
        desc: "Reflective media for night visibility—ideal for signboards, safety branding, and road-facing placements.",
        tags: ["Reflective", "Night Visibility"],
        icon: <IconShield />,
      },
      {
        pill: "Signage",
        title: "Glow Sign Boards",
        desc: "Illuminated signboards designed for premium storefront visibility and consistent brand presentation.",
        tags: ["Glow Sign", "Storefront", "Visibility"],
        icon: <IconSign />,
      },
      {
        pill: "Printing",
        title: "Digital Wall Printing",
        desc: "Wall branding and large-format visuals with production-ready finishing and clean layout execution.",
        tags: ["Wall Branding", "Digital Prints"],
        icon: <IconPrint />,
      },
      {
        pill: "Printing",
        title: "One Way Vision",
        desc: "Perforated vision film for glass/windows—visibility from inside, branding on the outside.",
        tags: ["Glass", "Windows", "Privacy"],
        icon: <IconPrint />,
      },
      {
        pill: "Signage",
        title: "Neon Boards",
        desc: "Modern neon-style boards and premium signage elements for standout brand presence.",
        tags: ["Neon", "Premium Signage"],
        icon: <IconSign />,
      },
    ],
    []
  );

  // ✅ Poster expertise list (professional naming)
  const expertise = useMemo(
    () => [
      { title: "Octanorm Stalls", desc: "Professional exhibition stall setups with clean branding and practical layouts." },
      { title: "Designer Stalls", desc: "Custom stall designs that look premium and improve walk-in engagement." },
      { title: "Stages", desc: "Stage branding, backdrops, and setup support for events and promotions." },
      { title: "German Tents", desc: "Tent setup and branding for large events, exhibitions, and outdoor activations." },
      { title: "Pagoda", desc: "Pagoda-style setup solutions for kiosks, entry points, and display zones." },
      { title: "Mela Organizer Support", desc: "Execution support for fairs with signage, branding, and coordination." },
      { title: "Corporate Events", desc: "End-to-end event branding—stage, stalls, printing, and installation." },
      { title: "Exhibitions & More", desc: "Complete indoor/outdoor branding, exhibition execution, and printing services." },
    ],
    []
  );

  const chips = useMemo(
    () => ["Indoor Branding", "Outdoor Branding", "Exhibition Setup", "Printing & Production"],
    []
  );

  return (
    <div className="svd-page" id="services">
      <BaseStyles />

      {/* Top bar */}
      <div className="svd-topbar">
        <div className="svd-shell">
          <div className="svd-topbarInner">
            <div className="svd-topLabel">
              <strong>Contact</strong>
              <span style={{ color: "rgba(255,255,255,0.78)" }}>
                Email:&nbsp;
                <a className="svd-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </span>
            </div>

            <div className="svd-links" aria-label="Phone numbers">
              {phones.map((p) => (
                <a key={p} className="svd-link" href={`tel:${p}`}>
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="svd-hero">
        <div className="svd-shell">
          <div className="svd-heroInner reveal is-visible">
            <p className="svd-eyebrow">Services</p>
            <h1 className="svd-title">
              {brandName} <span>Services</span>
            </h1>
            <p className="svd-lead">
              Indoor / Outdoor <b>Exhibition Branding & Printing</b> — designed for visibility, produced with durable materials,
              and executed with premium finishing.
            </p>

            <div className="svd-chips" aria-label="Key categories">
              {chips.map((c) => (
                <span className="svd-chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="svd-section">
        <div className="svd-shell">
          <div className="svd-head reveal" ref={headRef}>
            <h2 className="svd-h2">
              Printing & <span>Signage</span>
            </h2>
            <p className="svd-p">
              Services listed below are exactly from your poster—presented in a clean, modern, premium website layout.
            </p>
          </div>

          <div className="svd-grid stagger" ref={gridRef}>
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="svd-section">
        <div className="svd-shell">
          <div className="svd-head">
            <h2 className="svd-h2">
              Our <span>Expertise</span>
            </h2>
            <p className="svd-p">
              Exhibition and event execution capabilities—built for smooth delivery and consistent brand presentation.
            </p>
          </div>

          <div className="svd-listWrap reveal" ref={expertiseRef}>
            <div className="svd-listHeader">
              <p>
                We support exhibitions, corporate events, and activations with setup, printing, and on-site installation—end to end.
              </p>
            </div>

            <ul className="svd-list">
              {expertise.map((x) => (
                <li className="svd-li" key={x.title}>
                  <span className="svd-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <div>
                    <h4>{x.title}</h4>
                    <p>{x.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svd-cta" aria-label="Call to action">
        <div className="svd-shell">
          <div className="svd-ctaBox">
            <div>
              <h3 className="svd-ctaTitle">Need exhibition branding or printing?</h3>
              <p className="svd-ctaText">
                Share your requirement and location. We’ll suggest the best material and setup for maximum visibility and premium finishing.
              </p>
            </div>

            <div className="svd-btnRow">
              <button className="svd-btn svd-btnLight" type="button">
                {ctaPrimary}
              </button>
              <a className="svd-btn svd-btnGhost" href={`tel:${phones?.[0] || ""}`}>
                {ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDarkPremium;