import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import logo from "../img/2.png";

/* Contact Page (Red/White Theme) — Modern + Glass — Default Export */

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
      --radius: 20px;
    }

    *{ box-sizing: border-box; }

    .ct-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: #fff;
      color: var(--ink);
      padding: 100px 0;
      position: relative;
      overflow: hidden;
    }

    /* subtle grid + glow */
    .ct-page::before{
      content:"";
      position:absolute; inset:0;
      background-image:
        linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
      background-size: 56px 56px;
      pointer-events:none;
      opacity: 0.5;
    }

    .ct-shell{
      width: min(1140px, calc(100% - 48px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    /* HEADER */
    .ct-head{
      text-align: center;
      margin-bottom: 60px;
    }
    .ct-eyebrow{
      font-size: 11px;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--red);
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    .ct-eyebrow::before, .ct-eyebrow::after{
      content:"";
      width: 32px; height: 2px;
      background: var(--red);
      opacity: 0.3;
    }
    .ct-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(52px, 7vw, 84px);
      letter-spacing: 0.05em;
      line-height: 0.92;
      margin: 0;
    }
    .ct-title span{ color: var(--red); }

    /* GRID */
    .ct-grid{
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 32px;
      align-items: start;
    }

    /* FORM AREA */
    .ct-formCard{
      background: #fff;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 40px;
      box-shadow: 0 30px 60px rgba(0,0,0,0.05);
      position: relative;
    }
    .ct-formCard::before{
      content:"";
      position:absolute;
      top: -1px; left: 40px; right: 40px;
      height: 3px;
      background: var(--red);
      border-radius: 0 0 4px 4px;
    }

    .ct-inputRow{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
    }

    .ct-field{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 20px;
    }
    .ct-label{
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--ink);
      opacity: 0.7;
    }
    .ct-input, .ct-area{
      background: var(--soft);
      border: 1px solid var(--line);
      padding: 14px 18px;
      border-radius: 12px;
      font-family: inherit;
      font-size: 14px;
      color: var(--ink);
      transition: all 0.2s;
    }
    .ct-input:focus, .ct-area:focus{
      outline: none;
      border-color: var(--red);
      background: #fff;
      box-shadow: 0 0 0 4px rgba(192,57,43,0.06);
    }

    .ct-area{ min-height: 140px; resize: none; }

    .ct-submit{
      background: var(--red);
      color: #fff;
      border: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
      transition: all 0.2s;
      box-shadow: 0 16px 32px rgba(192,57,43,0.25);
    }
    .ct-submit:hover{
      background: #e74c3c;
      transform: translateY(-2px);
      box-shadow: 0 20px 40px rgba(192,57,43,0.35);
    }

    /* INFO AREA */
    .ct-infoCol{
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .ct-infoCard{
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 30px;
      display: flex;
      gap: 20px;
      align-items: flex-start;
      transition: all 0.3s;
    }
    .ct-infoCard:hover{
      background: #fff;
      border-color: var(--red);
      transform: translateX(6px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.04);
    }

    .ct-iconBox{
      width: 48px; height: 48px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 14px;
      display: grid;
      place-items: center;
      color: var(--red);
      font-size: 20px;
      flex-shrink: 0;
      box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    }

    .ct-infoTitle{
      font-weight: 800;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 0 0 6px;
      color: var(--ink);
    }
    .ct-infoText{
      font-size: 14px;
      color: var(--muted);
      line-height: 1.6;
      margin: 0;
    }

    /* LOGO BAND */
    .ct-footLogo{
      margin-top: 60px;
      padding-top: 40px;
      border-top: 1px solid var(--line);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      opacity: 0.8;
    }
    .ct-logoImg{ height: 44px; width: auto; filter: grayscale(1); transition: all 0.3s; }
    .ct-footLogo:hover .ct-logoImg{ filter: grayscale(0); opacity: 1; }

    @media (max-width: 900px){
      .ct-grid{ grid-template-columns: 1fr; }
      .ct-inputRow{ grid-template-columns: 1fr; }
      .ct-formCard{ padding: 30px 20px; }
    }
  `}</style>
);

const Contact = () => {
    return (
        <section className="ct-page" id="contact">
            <BaseStyles />

            <div className="ct-shell">
                <div className="ct-head">
                    <span className="ct-eyebrow">Get in touch</span>
                    <h2 className="ct-title">
                        Let's <span>Connect.</span>
                    </h2>
                </div>

                <div className="ct-grid">
                    {/* Form */}
                    <div className="ct-formCard">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="ct-inputRow">
                                <div className="ct-field">
                                    <label className="ct-label">Full Name</label>
                                    <input type="text" className="ct-input" placeholder="e.g. Rahul Sharma" />
                                </div>
                                <div className="ct-field">
                                    <label className="ct-label">Email Address</label>
                                    <input type="email" className="ct-input" placeholder="e.g. rahul@example.com" />
                                </div>
                            </div>

                            <div className="ct-field">
                                <label className="ct-label">Subject</label>
                                <input type="text" className="ct-input" placeholder="How can we help?" />
                            </div>

                            <div className="ct-field">
                                <label className="ct-label">Message</label>
                                <textarea className="ct-area" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button className="ct-submit" type="submit">
                                Send Message <FiSend />
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="ct-infoCol">
                        <div className="ct-infoCard">
                            <div className="ct-iconBox"><FiMapPin /></div>
                            <div>
                                <h4 className="ct-infoTitle">Our Office</h4>
                                <p className="ct-infoText">
                                    B-24, Industrial Area, Phase II,<br />
                                    Ahmedabad, Gujarat - 380022
                                </p>
                            </div>
                        </div>

                        <div className="ct-infoCard">
                            <div className="ct-iconBox"><FiPhone /></div>
                            <div>
                                <h4 className="ct-infoTitle">Phone Number</h4>
                                <p className="ct-infoText">+91 70003 15002</p>
                                <p className="ct-infoText">+91 90983 07070</p>
                            </div>
                        </div>

                        <div className="ct-infoCard">
                            <div className="ct-iconBox"><FiMail /></div>
                            <div>
                                <h4 className="ct-infoTitle">Email Address</h4>
                                <p className="ct-infoText">ryaansignage@gmail.com</p>
                            </div>
                        </div>

                        <div className="ct-infoCard">
                            <div className="ct-iconBox"><FiClock /></div>
                            <div>
                                <h4 className="ct-infoTitle">Working Hours</h4>
                                <p className="ct-infoText">Mon - Sat: 10:00 AM - 07:00 PM</p>
                                <p className="ct-infoText">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ct-footLogo">
                    <img src={logo} alt="Ryaan Logo" className="ct-logoImg" />
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: 24, letterSpacing: '0.05em' }}>RYAAN SIGNAGE</div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
