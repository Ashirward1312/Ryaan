import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";
import logo from "../img/2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

        .ft-root {
          background: #09090b;
          color: #fff;
          padding: 80px 0 0;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 2px solid #c0392b;
        }

        .ft-root::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 500px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(192,57,43,0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .ft-shell {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ft-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 48px;
          margin-bottom: 60px;
        }

        @media (min-width: 640px) {
          .ft-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ft-grid {
            grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
          }
        }

        .ft-brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          color: #fff;
        }

        .ft-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          max-width: 320px;
          margin-bottom: 24px;
        }

        .ft-socials {
          display: flex;
          gap: 12px;
        }

        .ft-social-link {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .ft-social-link:hover {
          background: #c0392b;
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -5px rgba(192, 57, 43, 0.4);
        }

        .ft-h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          color: #c0392b;
          text-transform: uppercase;
        }

        .ft-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ft-link:hover {
          color: #c0392b;
          padding-left: 4px;
        }

        .ft-contact-item {
          display: flex;
          gap: 14px;
          margin-bottom: 20px;
        }

        .ft-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(192, 57, 43, 0.1);
          color: #c0392b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ft-contact-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
        }

        .ft-contact-text span {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 4px;
        }

        .ft-contact-link {
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          display: inline-block;
          font-variant-numeric: tabular-nums;
          font-weight: 400;
        }

        .ft-contact-link:hover {
          color: #c0392b;
        }

        .ft-contact-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ft-bottom {
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .ft-bottom {
            flex-direction: row;
          }
        }

        .ft-copy,
        .ft-made {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        .ft-logo-mini {
          height: 38px;
          width: auto;
          margin-bottom: 15px;
          opacity: 0.9;
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-shell">
          <div className="ft-grid">
            {/* Column 1: Brand */}
            <div className="ft-col">
              <img src={logo} alt="Ryaan Signage" className="ft-logo-mini" />
              <h2 className="ft-brand-name">RYAAN SIGNAGE</h2>
              <p className="ft-desc">
                Elevating brands through premium outdoor advertising, expert fabrication,
                and high-impact event solutions. Precision in every print, excellence in every sign.
              </p>

              <div className="ft-socials">
                <a
                  href="https://www.instagram.com/ryaansignage?igsh=dTZjcHl2bnltbjY0"
                  className="ft-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <FiInstagram />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="ft-col">
              <h3 className="ft-h3">Quick Links</h3>
              <ul className="ft-list">
                <li><Link to="/" className="ft-link" onClick={handleScrollTop}>Home</Link></li>
                <li><Link to="/about" className="ft-link" onClick={handleScrollTop}>About Company</Link></li>
                <li><Link to="/gallery" className="ft-link" onClick={handleScrollTop}>View Projects</Link></li>
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Our Services</Link></li>
                <li><Link to="/contact" className="ft-link" onClick={handleScrollTop}>Get A Quote</Link></li>
              </ul>
            </div>

            {/* Column 3: Expertise */}
            <div className="ft-col">
              <h3 className="ft-h3">Our Expertise</h3>
              <ul className="ft-list">
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Octonorm Stall</Link></li>
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Designer Stall</Link></li>
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Fabrication</Link></li>
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Outdoor Branding</Link></li>
                <li><Link to="/services" className="ft-link" onClick={handleScrollTop}>Event Planning</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="ft-col">
              <h3 className="ft-h3">Get In Touch</h3>

              <div className="ft-contact-item">
                <div className="ft-icon-box"><FiMapPin /></div>
                <div className="ft-contact-text">
                  <span>Address</span>
                  New Shanti Nagar, Govind Nagar, Raipur, Chhattisgarh 492004
                </div>
              </div>

              <div className="ft-contact-item">
                <div className="ft-icon-box"><FiPhone /></div>
                <div className="ft-contact-text">
                  <span>Phone</span>
                  <div className="ft-contact-lines">
                    <a className="ft-contact-link" href="tel:+919617178170">
                      +91 96171 78170
                    </a>
                    <a className="ft-contact-link" href="tel:+917000315002">
                      +91 70003 15002
                    </a>
                  </div>
                </div>
              </div>

              <div className="ft-contact-item">
                <div className="ft-icon-box"><FiMail /></div>
                <div className="ft-contact-text">
                  <span>Email</span>
                  <a className="ft-contact-link" href="mailto:ryaangroup1@gmail.com">
                    Ryaansignage@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="ft-bottom">
            <p className="ft-copy">© {currentYear} Ryaan Signage. All rights reserved.</p>
            <p className="ft-made">
              Designed &amp; Developed by{" "}
              <a
                href="https://wa.me/917470958844?text=Hi%20Mind%20Bridge%20Tech,%20I%20want%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}
              >
                Mind Bridge Tech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;