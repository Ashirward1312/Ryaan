import { useEffect, useState, useRef } from "react";

const typingLines = [
  "Outdoor advertising helps your business get noticed by more people every day.",
  "It brings your brand directly in front of local customers who are ready to buy.",
  "It increases your chances of turning viewers into real customers.",
  "It builds strong trust by giving your business a real world presence.",
  "It helps your brand stand out and stay ahead of competitors.",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const currentLine = typingLines[lineIndex];
    let timeout;
    if (!isDeleting) {
      if (text.length < currentLine.length) {
        timeout = setTimeout(() => setText(currentLine.slice(0, text.length + 1)), 42);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1600);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentLine.slice(0, text.length - 1)), 20);
      } else {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % typingLines.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, lineIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #0a0a0b;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Noise grain overlay */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 1;
        }

        /* Red accent line - left */
        .accent-line {
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #e11d48, #e11d48 60%, transparent);
          z-index: 2;
        }

        /* Glows */
        .glow-top {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(225,29,72,0.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        .glow-bottom-left {
          position: absolute;
          bottom: -80px;
          left: -100px;
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(225,29,72,0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Grid lines background */
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* Content wrapper */
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
          width: 100%;
          padding: 140px 32px 80px;
          text-align: center;
        }

        /* Pill badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(225,29,72,0.35);
          background: rgba(225,29,72,0.08);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fb7185;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .badge.visible { opacity: 1; transform: translateY(0); }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #e11d48;
          border-radius: 50%;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        /* Brand name */
        .brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(72px, 14vw, 140px);
          line-height: 0.9;
          letter-spacing: 0.03em;
          color: #ffffff;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .brand-name.visible { opacity: 1; transform: translateY(0); }
        .brand-name .red { color: #e11d48; }

        /* Subheading */
        .subheading {
          font-size: clamp(16px, 2.5vw, 22px);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 12px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s;
        }
        .subheading.visible { opacity: 1; transform: translateY(0); }
        .subheading span {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 40px auto;
          max-width: 360px;
          opacity: 0;
          transition: opacity 0.6s ease 0.38s;
        }
        .divider.visible { opacity: 1; }
        .divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.1); }
        .divider-icon { color: #e11d48; font-size: 18px; }

        /* Description */
        .desc {
          font-size: clamp(15px, 1.8vw, 18px);
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
          max-width: 620px;
          margin: 0 auto 32px;
          font-weight: 300;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s;
        }
        .desc.visible { opacity: 1; transform: translateY(0); }

        /* Typewriter box */
        .type-box {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          padding: 20px 28px;
          margin: 0 auto 44px;
          max-width: 680px;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.52s, transform 0.7s ease 0.52s;
          position: relative;
          overflow: hidden;
        }
        .type-box::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #e11d48;
          border-radius: 2px 0 0 2px;
        }
        .type-box.visible { opacity: 1; transform: translateY(0); }
        .type-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e11d48;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .type-text {
          font-size: clamp(13px, 1.5vw, 15px);
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          text-align: left;
          flex: 1;
          line-height: 1.5;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #e11d48;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Buttons */
        .btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.7s ease 0.62s, transform 0.7s ease 0.62s;
        }
        .btn-row.visible { opacity: 1; transform: translateY(0); }

        .btn-primary {
          background: #e11d48;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 0 0 rgba(225,29,72,0.5);
          display: inline-block;
        }
        .btn-primary:hover {
          background: #be123c;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(225,29,72,0.4);
        }

        .btn-secondary {
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 15px 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Stats row */
        .stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 64px;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 48px;
          opacity: 0;
          transition: opacity 0.8s ease 0.75s;
          flex-wrap: wrap;
        }
        .stats-row.visible { opacity: 1; }

        .stat-item {
          flex: 1;
          min-width: 140px;
          padding: 0 32px;
          position: relative;
          text-align: center;
        }
        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0; top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.1);
        }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px;
          color: #fff;
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .stat-num .red { color: #e11d48; }
        .stat-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 6px;
        }
      `}</style>

      <section className="hero-root" id="home">
        <div className="grid-bg" />
        <div className="glow-top" />
        <div className="glow-bottom-left" />
        <div className="accent-line" />

        <div className="hero-content">
          {/* Badge */}
          <div className={`badge ${mounted ? "visible" : ""}`}>
            <span className="badge-dot" />
            Premium Outdoor Branding 
          </div>

          {/* Brand Name */}
          <h1 className={`brand-name ${mounted ? "visible" : ""}`}>
            Ryaan <span className="red">Signage</span>
          </h1>

          {/* Subheading */}
          <p className={`subheading ${mounted ? "visible" : ""}`}>
            Outdoor Advertising <span>That  Delivers Results</span>
          </p>

          {/* Divider */}
          <div className={`divider ${mounted ? "visible" : ""}`}>
            <div className="divider-line" />
            <span className="divider-icon">◆</span>
            <div className="divider-line" />
          </div>

          {/* Description */}
          {/* <p className={`desc ${mounted ? "visible" : ""}`}>
            Powerful signage solutions designed to increase visibility,
            attract customers, and make your brand stand out — every single day.
          </p> */}

          {/* Typewriter Box */}
          <div className={`type-box ${mounted ? "visible" : ""}`}>
            <span className="type-label">Why us</span>
            <p className="type-text">
              {text}
              <span className="cursor" />
            </p>
          </div>

          {/* Buttons */}
          <div className={`btn-row ${mounted ? "visible" : ""}`}>
            <a href="#contact" className="btn-primary">Get Free Quote</a>
            <a href="#services" className="btn-secondary">View Services</a>
          </div>

          {/* Stats */}
          <div className={`stats-row ${mounted ? "visible" : ""}`}>
            {/* <div className="stat-item">
              <div className="stat-num">500<span className="red">+</span></div>
              <div className="stat-label">Projects Done</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10<span className="red">+</span></div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">98<span className="red">%</span></div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">50<span className="red">+</span></div>
              <div className="stat-label">Cities Covered</div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;