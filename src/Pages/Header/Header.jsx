import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/2.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSubPage = location.pathname !== "/";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

        .hd-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Outfit', sans-serif;
          padding: 20px 0;
        }

        .hd-root.scrolled {
          background: rgba(9, 9, 11, 0.90);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 12px 0;
          border-bottom: 2px solid #c0392b;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
        }

        .hd-shell {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo Area */
        .hd-logo-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.2s;
        }
        .hd-logo-wrap:hover { transform: scale(1.02); }

        .hd-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
        }

        .hd-brand {
          display: flex;
          flex-direction: column;
        }
        .hd-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: #fff;
          letter-spacing: 0.05em;
          line-height: 1;
        }
        .hd-tagline {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-top: 2px;
        }

        /* Nav Links */
        .hd-nav {
          display: none;
          align-items: center;
          gap: 32px;
        }
        @media (min-width: 1024px) { .hd-nav { display: flex; } }

        .hd-link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.25s;
          position: relative;
          padding: 8px 0;
        }
        .hd-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; width: 0;
          height: 2px;
          background: #c0392b;
          transition: width 0.3s;
          border-radius: 99px;
        }
        .hd-link.active { color: #fff; }
        .hd-link.active::after { width: 100%; }
        .hd-link:hover { color: #fff; }
        .hd-link:hover::after { width: 100%; }

        /* CTA */
        .hd-cta {
          display: none;
          align-items: center;
          gap: 16px;
        }
        @media (min-width: 640px) { .hd-cta { display: flex; } }

        .hd-btn {
          background: #c0392b;
          color: #fff;
          padding: 10px 22px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          box-shadow: 0 8px 16px -4px rgba(192, 57, 43, 0.3);
        }
        .hd-btn:hover {
          background: #e74c3c;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -6px rgba(192, 57, 43, 0.4);
        }

        /* Mobile Toggle */
        .hd-toggle {
          display: flex;
          background: none;
          border: none;
          color: #fff;
          font-size: 26px;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .hd-toggle:hover { background: rgba(255,255,255,0.08); }
        @media (min-width: 1024px) { .hd-toggle { display: none; } }

        /* Mobile Menu */
        .hd-mob-menu {
          position: fixed;
          top: 0; right: 0; bottom: 0; left: 0;
          background: rgba(9, 9, 11, 0.98);
          backdrop-filter: blur(20px);
          z-index: 2000;
          display: flex;
          flex-direction: column;
          padding: 40px 24px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hd-mob-menu.open { transform: translateX(0); }

        .hd-mob-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
        }

        .hd-mob-nav {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .hd-mob-link {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .hd-mob-link.active { color: #c0392b; }
        .hd-mob-link:hover { color: #c0392b; }

        .hd-mob-foot {
          margin-top: auto;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .hd-mob-tagline {
          font-size: 10px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        .hd-mob-cta {
          margin-top: 20px;
        }
      `}</style>

      <header className={`hd-root ${scrolled || isSubPage ? "scrolled" : ""}`}>
        <div className="hd-shell">
          {/* Logo */}
          <Link to="/" className="hd-logo-wrap">
            <img src={logo} alt="Ryaan Signage Logo" className="hd-logo" />
            <div className="hd-brand">
              <span className="hd-name">RYAAN SIGNAGE</span>
              <span className="hd-tagline">Outdoor Excellence</span>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hd-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.href} 
                className={`hd-link ${location.pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>          

          {/* Toggle */}
          <button className="hd-toggle" onClick={() => setOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`hd-mob-menu ${open ? "open" : ""}`}>
        <div className="hd-mob-head">
          <div className="hd-logo-wrap">
            <img src={logo} alt="Logo" className="hd-logo" />
            <span className="hd-name">RYAAN</span>
          </div>
          <button className="hd-toggle" onClick={() => setOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="hd-mob-nav">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`hd-mob-link ${location.pathname === link.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hd-mob-foot">
          <p className="hd-mob-tagline">Premium Signage Solutions</p>
          <div className="hd-mob-cta">
            <Link
              to="/contact"
              className="hd-btn"
              style={{ width: "fit-content" }}
              onClick={() => setOpen(false)}
            >
              Contact Specialist <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}