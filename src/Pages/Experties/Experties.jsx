import { useEffect, useMemo, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const expertise = [
  "Octonorm Stall",
  "Designer Stall",
  "Stage",
  "German Tent",
  "Pagoda",
  "Mela Organiser",
  "Corporate Events",
  "Exhibition & More",
  "Indoor / Outdoor Branding & Printing",
];

/* card icons — minimal SVG paths per service */
const icons = {
  "Octonorm Stall": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 10h18M8 7V4a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "Designer Stall": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 3v16M3 9h4M3 15h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Stage: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16h18M5 16V9M17 16V9M2 9h18M8 9V6M14 9V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="11" cy="4" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  "German Tent": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3L2 13h18L11 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5 13v6h12v-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 19v-4h6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  Pagoda: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2L4 8h14L11 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M11 8L5 13h12L11 8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M5 13v7h12v-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "Mela Organiser": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  "Corporate Events": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="16" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 9h16M8 5V3M14 5V3M7 13h8M7 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "Exhibition & More": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="12" y="4" width="8" height="14" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 4h8M12 8H2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  "Indoor / Outdoor Branding & Printing": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="18" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 18h8M11 15v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M6 8h10M6 11h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
};

const CARD_W = 200;
const CARD_H = 120;
const SPIN_DURATION = 22000;

/* ─────────────────────────────────────────────
   Expertise Card — Premium Dark
───────────────────────────────────────────── */
const ExpertiseCard = ({ title, index }) => (
  <div className="ex-card" data-index={index}>
    <div className="ex-card__accent" />
    <div className="ex-card__shimmer" />

    <div className="ex-card__body">
      <span className="ex-card__icon">{icons[title]}</span>
      <span className="ex-card__title">{title}</span>
    </div>

    <span className="ex-card__num">0{index + 1}</span>
  </div>
);

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const ExpertiseOrbitCarousel = ({
  logoSrc = "",
  brandName = "RYAAN",
  subName = "SIGNES",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const carouselRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const angleRef = useRef(0);

  const n = expertise.length;
  const degsPerMs = 360 / SPIN_DURATION;

  const RADIUS = useMemo(() => {
    const base = (CARD_W / 2) / Math.tan(Math.PI / n);
    return Math.round(base + 100);
  }, [n]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  // rotation loop (hover pe stop nahi hota)
  useEffect(() => {
    if (isMobile) return;

    const animate = (ts) => {
      if (lastTimeRef.current != null) {
        const delta = ts - lastTimeRef.current;
        angleRef.current = (angleRef.current + degsPerMs * delta) % 360;
        if (carouselRef.current) {
          carouselRef.current.style.setProperty("--spin", `${angleRef.current}deg`);
        }
      }
      lastTimeRef.current = ts;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [degsPerMs, isMobile]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        /* ── Section shell ── */
        .ex-section {
          font-family: 'Outfit', sans-serif;
          background: #09090b;
          border-radius: 20px;
          padding: 140px 0 64px;
          overflow: hidden;
          position: relative;
          isolation: isolate;
        }

        /* Noise texture */
        .ex-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          opacity: 0.6;
          pointer-events: none;
          z-index: 0;
        }

        /* Radial ambient glow — top center */
        .ex-section::after {
          content: '';
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(192,57,43,0.14) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        /* Fine grid lines */
        .ex-grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 52px 52px;
          z-index: 0;
          pointer-events: none;
        }

        /* ── Header ── */
        .ex-head {
          position: relative;
          text-align: center;
          margin-bottom: 16px;
          padding: 0 24px;
          z-index: 2;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .ex-head.visible { opacity: 1; transform: translateY(0); }

        .ex-eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: #c0392b;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 14px;
        }
        .ex-eyebrow::before, .ex-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c0392b);
        }
        .ex-eyebrow::after {
          background: linear-gradient(90deg, #c0392b, transparent);
        }

        .ex-title {
          margin: 0 0 6px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(40px, 6vw, 62px);
          letter-spacing: 0.06em;
          color: #f5f5f3;
          line-height: 1;
        }
        .ex-title em {
          font-style: normal;
          color: #c0392b;
        }

        .ex-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-style: italic;
          color: rgba(255,255,255,0.32);
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* ── 3D Scene ── */
        .ex-scene {
          position: relative;
          width: 100%;
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          margin-top: 28px;
          z-index: 2;
        }

        /* ── Ground glow ellipse ── */
        .ex-ground {
          position: absolute;
          left: 50%;
          bottom: 30px;
          transform: translateX(-50%);
          width: 560px;
          height: 60px;
          background: radial-gradient(ellipse, rgba(192,57,43,0.22) 0%, transparent 68%);
          pointer-events: none;
          z-index: 1;
          filter: blur(1px);
        }

        /* ── Centre Hub ── */
        .ex-hub {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          pointer-events: none;
        }

        .ex-hub__ring {
          width: 156px;
          height: 156px;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
        }

        .ex-hub__ring::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(
            from 0deg,
            #c0392b 0deg,
            #e74c3c 60deg,
            rgba(192,57,43,0.3) 120deg,
            rgba(255,255,255,0.05) 180deg,
            rgba(192,57,43,0.3) 240deg,
            #e74c3c 300deg,
            #c0392b 360deg
          );
          animation: hub-spin 8s linear infinite;
          z-index: -1;
        }

        .ex-hub__ring::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: #09090b;
          z-index: -1;
        }

        @keyframes hub-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .ex-hub__disc {
          width: 136px;
          height: 136px;
          border-radius: 50%;
          background: linear-gradient(145deg, #1a1a1d 0%, #111113 50%, #0d0d0f 100%);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 0 1px rgba(192,57,43,0.15),
            0 24px 60px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.06);
          overflow: hidden;
        }

        .ex-hub__img {
          width: 80px;
          height: 80px;
          object-fit: contain;
        }

        .ex-hub__name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.10em;
          color: #f5f5f3;
          line-height: 1;
        }

        .ex-hub__sub {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.38em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-top: 5px;
        }

        /* ── 3D Carousel ring ── */
        .ex-carousel {
          --spin: 0deg;
          transform-style: preserve-3d;
          width: ${CARD_W}px;
          height: ${CARD_H}px;
          position: relative;
          transform: rotateY(var(--spin));
          will-change: transform;
          z-index: 2;
        }

        .ex-slot {
          --a: 0deg; /* ✅ slot angle variable (default) */
          position: absolute;
          top: 0; left: 0;
          width: ${CARD_W}px;
          height: ${CARD_H}px;
          transform-style: preserve-3d;
        }

        /* ✅ IMPORTANT: card always faces camera + backface hidden (no mirror) */
        .ex-slot > .ex-card {
          transform: rotateY(calc(-1 * (var(--spin) + var(--a))));
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* ── Individual Card ── */
        .ex-card {
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: linear-gradient(135deg, #18181b 0%, #101012 55%, #141416 100%);
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
          box-sizing: border-box;
          cursor: default;
          box-shadow:
            0 20px 50px rgba(0,0,0,0.40),
            0 4px 16px rgba(0,0,0,0.25);
          transition:
            border-color 260ms ease,
            box-shadow 260ms ease,
            transform 260ms ease;

          /* ✅ extra safety: hide backside */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .ex-card__accent {
          position: absolute;
          top: 0; left: 20px; right: 20px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c0392b 30%, #e74c3c 50%, #c0392b 70%, transparent);
          border-radius: 0 0 2px 2px;
        }

        .ex-card__shimmer {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 180px 80px at 20% 20%, rgba(192,57,43,0.18), transparent 60%),
            radial-gradient(ellipse 120px 60px at 85% 85%, rgba(255,255,255,0.04), transparent 55%);
          pointer-events: none;
        }

        .ex-card__body {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ex-card__icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(192,57,43,0.12);
          border: 1px solid rgba(192,57,43,0.22);
          color: #e05245;
        }

        .ex-card__title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.90);
          line-height: 1.3;
        }

        .ex-card__num {
          position: absolute;
          bottom: 12px;
          right: 16px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.06);
          pointer-events: none;
        }

        /* ✅ Hover me bhi same base rotation use karo */
        .ex-card:hover {
          border-color: rgba(192,57,43,0.45);
          box-shadow:
            0 28px 70px rgba(0,0,0,0.48),
            0 0 0 1px rgba(192,57,43,0.20),
            inset 0 0 20px rgba(192,57,43,0.05);
          transform: rotateY(calc(-1 * (var(--spin) + var(--a))))
            translateY(-8px) scale(1.03) !important;
        }

        /* ── Bottom stat strip ── */
        .ex-stats {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 36px;
          opacity: 0;
          transition: opacity 0.8s ease 0.5s;
        }
        .ex-stats.visible { opacity: 1; }

        .ex-stat {
          flex: 1;
          max-width: 200px;
          text-align: center;
          position: relative;
          padding: 0 24px;
        }
        .ex-stat + .ex-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.08);
        }

        .ex-stat__num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          letter-spacing: 0.06em;
          color: #f5f5f3;
          line-height: 1;
        }
        .ex-stat__num span { color: #c0392b; }

        .ex-stat__label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.30);
          margin-top: 5px;
        }

        /* ── Mobile ── */
        .ex-mobile {
          display: none;
          z-index: 2;
          position: relative;
          width: 100%;
          padding: 0 0 8px;
        }

        .ex-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 12px 24px 16px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .ex-strip::-webkit-scrollbar { display: none; }

        .ex-mcard {
          scroll-snap-align: center;
          flex: 0 0 auto;
          width: 210px;
          height: 120px;
        }

        .ex-hub-mobile {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(145deg, #1a1a1d, #111);
          border: 1px solid rgba(192,57,43,0.35);
          margin: 0 auto 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 4px rgba(192,57,43,0.10);
        }
        .ex-hub-mobile img {
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
        .ex-hub-mobile .m-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 0.10em;
          color: #f5f5f3;
          line-height: 1;
        }
        .ex-hub-mobile .m-sub {
          font-size: 8px;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-top: 3px;
        }

        @media (max-width: 639px) {
          .ex-scene { display: none; }
          .ex-mobile { display: block; }
          .ex-stats { flex-wrap: wrap; gap: 16px; }
          .ex-stat { max-width: 50%; }
          .ex-stat + .ex-stat::before { display: none; }
        }
      `}</style>

      <section className="ex-section" id="experties">
        <div className="ex-grid-lines" />

        {/* ── Header ── */}
        <div className={`ex-head ${mounted ? "visible" : ""}`}>
          <p className="ex-eyebrow">Our Expertise</p>
          <h2 className="ex-title">
            What We <em>Excel</em> At
          </h2>
          <p className="ex-subtitle">
            End-to-end branding &amp; event solutions — crafted with precision
          </p>
        </div>

        {/* ── Desktop 3D Carousel ── */}
        <div className="ex-scene">
          <div className="ex-ground" />

          {/* Hub */}
          <div className="ex-hub">
            <div className="ex-hub__ring">
              <div className="ex-hub__disc">
                {logoSrc ? (
                  <img className="ex-hub__img" src={logoSrc} alt={brandName} />
                ) : (
                  <>
                    <div className="ex-hub__name">{brandName}</div>
                    <div className="ex-hub__sub">{subName}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Rotating ring */}
          <div className="ex-carousel" ref={carouselRef}>
            {expertise.map((title, i) => {
              const angle = (360 / n) * i;
              return (
                <div
                  key={title}
                  className="ex-slot"
                  style={{
                    "--a": `${angle}deg`, // ✅ important for no-mirror front-only
                    transform: `rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  }}
                >
                  <ExpertiseCard title={title} index={i} />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile strip ── */}
        <div className="ex-mobile">
          <div className="ex-hub-mobile">
            {logoSrc ? (
              <img src={logoSrc} alt={brandName} />
            ) : (
              <>
                <div className="m-name">{brandName}</div>
                <div className="m-sub">{subName}</div>
              </>
            )}
          </div>
          <div className="ex-strip">
            {expertise.map((title, i) => (
              <div key={title} className="ex-mcard">
                <ExpertiseCard title={title} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className={`ex-stats ${mounted ? "visible" : ""}`}>
          {[
            { num: "500", unit: "+", label: "Projects Delivered" },
            { num: "10", unit: "+", label: "Years Experience" },
            { num: "9", unit: "", label: "Core Specialisations" },
            { num: "98", unit: "%", label: "Client Satisfaction" },
          ].map((s) => (
            <div className="ex-stat" key={s.label}>
              <div className="ex-stat__num">
                {s.num}
                <span>{s.unit}</span>
              </div>
              <div className="ex-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExpertiseOrbitCarousel;