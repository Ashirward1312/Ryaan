import React, { useMemo, useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiChevronDown,
} from "react-icons/fi";
import logo from "../img/2.png";

const THEME_RED = "#c0392b";
const WHATSAPP_NUMBER = "919617178170";

const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    :root{
      --red: ${THEME_RED};
      --red-dark: #a93226;
      --ink: #111114;
      --muted: rgba(17,17,20,0.62);
      --line: rgba(17,17,20,0.10);
      --soft: #faf9f8;
      --white: #ffffff;
      --radius: 20px;
      --shadow: 0 24px 60px rgba(0,0,0,0.05);
    }

    *{ box-sizing: border-box; }

    .ct-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background:
        radial-gradient(circle at top left, rgba(192,57,43,0.05), transparent 24%),
        linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
      color: var(--ink);
      padding: 80px 0 36px;
      position: relative;
      overflow: hidden;
    }

    .ct-page::before{
      content:"";
      position:absolute;
      inset:0;
      background-image:
        linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px);
      background-size: 52px 52px;
      pointer-events:none;
      opacity: 0.45;
    }

    .ct-shell{
      width: min(1160px, calc(100% - 32px));
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .ct-head{
      text-align: center;
      margin-bottom: 34px;
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
      margin-bottom: 14px;
    }

    .ct-eyebrow::before, .ct-eyebrow::after{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      opacity: 0.32;
    }

    .ct-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(48px, 7vw, 80px);
      letter-spacing: 0.05em;
      line-height: 0.95;
      margin: 0;
      text-transform: uppercase;
    }

    .ct-title span{
      color: var(--red);
    }

    .ct-subtitle{
      margin: 10px auto 0;
      max-width: 720px;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.7;
    }

    .ct-grid{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;
      align-items: start;
    }

    .ct-formCard,
    .ct-infoWrap{
      background: rgba(255,255,255,0.88);
      backdrop-filter: blur(10px);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .ct-formCard{
      padding: 28px;
      position: relative;
    }

    .ct-formCard::before{
      content:"";
      position:absolute;
      top: -1px;
      left: 28px;
      right: 28px;
      height: 3px;
      background: linear-gradient(90deg, var(--red), #e67e73);
      border-radius: 0 0 4px 4px;
    }

    .ct-formTitle{
      margin: 0 0 18px;
      font-size: 22px;
      font-weight: 700;
      color: var(--ink);
    }

    .ct-inputRow{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }

    .ct-field{
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-bottom: 14px;
    }

    .ct-label{
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(17,17,20,0.72);
    }

    .ct-input,
    .ct-area,
    .ct-select{
      background: var(--soft);
      border: 1px solid var(--line);
      padding: 13px 15px;
      border-radius: 12px;
      font-family: inherit;
      font-size: 14px;
      color: var(--ink);
      transition: all 0.22s ease;
    }

    .ct-input:focus,
    .ct-area:focus,
    .ct-select:focus{
      outline: none;
      border-color: var(--red);
      background: #fff;
      box-shadow: 0 0 0 4px rgba(192,57,43,0.06);
    }

    .ct-select{
      appearance: none;
      background-image:
        linear-gradient(45deg, transparent 50%, rgba(17,17,20,0.55) 50%),
        linear-gradient(135deg, rgba(17,17,20,0.55) 50%, transparent 50%);
      background-position:
        calc(100% - 20px) calc(50% - 3px),
        calc(100% - 14px) calc(50% - 3px);
      background-size: 6px 6px, 6px 6px;
      background-repeat: no-repeat;
      padding-right: 44px;
    }

    .ct-area{
      min-height: 110px;
      resize: vertical;
    }

    .ct-submit{
      background: linear-gradient(135deg, var(--red), var(--red-dark));
      color: #fff;
      border: none;
      padding: 15px 18px;
      border-radius: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      justify-content: center;
      transition: all 0.25s ease;
      box-shadow: 0 16px 30px rgba(192,57,43,0.20);
    }

    .ct-submit:hover{
      transform: translateY(-1px);
      box-shadow: 0 20px 36px rgba(192,57,43,0.28);
    }

    .ct-infoWrap{
      padding: 16px;
    }

    .ct-infoCol{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      align-content: start;
    }

    .ct-span2{
      grid-column: span 2;
    }

    .ct-infoCard{
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 16px;
      transition: 0.25s ease;
    }

    .ct-infoCard:hover{
      background: #fff;
      border-color: rgba(192,57,43,0.25);
      box-shadow: 0 14px 30px rgba(0,0,0,0.04);
    }

    .ct-cardHead{
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .ct-iconBox{
      width: 42px;
      height: 42px;
      background: #fff;
      border: 1px solid var(--line);
      border-radius: 12px;
      display: grid;
      place-items: center;
      color: var(--red);
      font-size: 18px;
      flex-shrink: 0;
    }

    .ct-cardHeadText{
      flex: 1;
      min-width: 0;
    }

    .ct-infoTitle{
      font-weight: 800;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin: 0;
      color: var(--ink);
    }

    .ct-toggleBtn{
      border: 1px solid var(--line);
      background: #fff;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      display: grid;
      place-items: center;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s ease;
      color: rgba(17,17,20,0.75);
    }

    .ct-toggleBtn:hover{
      border-color: rgba(192,57,43,0.35);
      color: var(--red);
    }

    .ct-chevron{
      transition: transform 0.22s ease;
    }

    .ct-chevron.is-open{
      transform: rotate(180deg);
    }

    .ct-cardBody{
      overflow: hidden;
      transition: max-height 0.35s ease, opacity 0.2s ease, margin-top 0.2s ease;
    }

    .ct-infoCard.is-collapsed .ct-cardBody{
      max-height: 0;
      opacity: 0;
      margin-top: 0;
    }

    .ct-infoCard.is-expanded .ct-cardBody{
      max-height: 500px;
      opacity: 1;
      margin-top: 10px;
    }

    .ct-infoText{
      font-size: 14px;
      color: var(--muted);
      line-height: 1.6;
      margin: 0;
      font-weight: 400;
    }

    .ct-infoText + .ct-infoText{
      margin-top: 6px;
    }

    .ct-phoneList{
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-variant-numeric: tabular-nums;
    }

    .ct-phoneLink,
    .ct-emailLink{
      color: var(--ink);
      text-decoration: none;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.6;
      word-break: break-word;
    }

    .ct-phoneLink:hover,
    .ct-emailLink:hover{
      color: var(--red);
    }

    .ct-mapFrame{
      width: 100%;
      height: 260px;
      border: 0;
      border-radius: 14px;
      display: block;
    }

    .ct-footLogo{
      margin-top: 22px;
      padding-top: 16px;
      border-top: 1px solid var(--line);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      opacity: 0.92;
    }

    .ct-logoImg{
      height: 36px;
      width: auto;
      object-fit: contain;
    }

    .ct-logoText{
      font-family: "Bebas Neue", sans-serif;
      font-size: 24px;
      letter-spacing: 0.05em;
    }

    @media (max-width: 1000px){
      .ct-grid{
        grid-template-columns: 1fr;
      }

      .ct-infoCol{
        grid-template-columns: 1fr;
      }

      .ct-span2{
        grid-column: span 1;
      }

      .ct-mapFrame{
        height: 240px;
      }
    }

    @media (max-width: 600px){
      .ct-page{
        padding: 64px 0 30px;
      }

      .ct-inputRow{
        grid-template-columns: 1fr;
      }

      .ct-formCard{
        padding: 22px;
      }

      .ct-formCard::before{
        left: 22px;
        right: 22px;
      }

      .ct-shell{
        width: min(100%, calc(100% - 20px));
      }
    }
  `}</style>
);

function InfoCard({ className = "", title, icon, expanded, onToggle, children }) {
  return (
    <div className={`ct-infoCard ${expanded ? "is-expanded" : "is-collapsed"} ${className}`}>
      <div className="ct-cardHead">
        <div className="ct-iconBox">{icon}</div>
        <div className="ct-cardHeadText">
          <h4 className="ct-infoTitle">{title}</h4>
        </div>
        <button
          type="button"
          className="ct-toggleBtn"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${title}`}
        >
          <FiChevronDown className={`ct-chevron ${expanded ? "is-open" : ""}`} />
        </button>
      </div>
      <div className="ct-cardBody">{children}</div>
    </div>
  );
}

const Contact = () => {
  const serviceOptions = useMemo(
    () => [
      "Flex Printing",
      "Eco Solvent Printing",
      "Vinyl Printing",
      "Retro Reflective",
      "Glow Sign Boards",
      "Hoarding Printing & Maintenance",
      "Digital Wall Printing",
      "One Way Vision",
      "Neon Boards",
    ],
    []
  );

  const [open, setOpen] = useState({
    office: true,
    phone: true,
    email: true,
    hours: true,
    map: true,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Ryaan Signage,%0A%0A` +
      `Name: ${encodeURIComponent(formData.fullName || "-")}%0A` +
      `Email: ${encodeURIComponent(formData.email || "-")}%0A` +
      `Service: ${encodeURIComponent(formData.service || "-")}%0A` +
      `Subject: ${encodeURIComponent(formData.subject || "-")}%0A` +
      `Message: ${encodeURIComponent(formData.message || "-")}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="ct-page" id="contact">
      <BaseStyles />

      <div className="ct-shell">
        <div className="ct-head">
          <span className="ct-eyebrow">Get in touch</span>
          <h2 className="ct-title">
            Let's <span>Connect.</span>
          </h2>
          <p className="ct-subtitle">
            Let’s discuss your signage, printing, branding or display project. Fill the form and it will directly open on WhatsApp.
          </p>
        </div>

        <div className="ct-grid">
          {/* Form */}
          <div className="ct-formCard">
            <h3 className="ct-formTitle">Send us your requirement</h3>

            <form onSubmit={handleWhatsAppSubmit}>
              <div className="ct-inputRow">
                <div className="ct-field">
                  <label className="ct-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="ct-input"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="ct-input"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label">Services</label>
                <select
                  name="service"
                  className="ct-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ct-field">
                <label className="ct-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="ct-input"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="ct-field">
                <label className="ct-label">Message</label>
                <textarea
                  name="message"
                  className="ct-area"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="ct-submit" type="submit">
                Send on WhatsApp <FiSend />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="ct-infoWrap">
            <div className="ct-infoCol">
              <InfoCard
                className="ct-span2"
                title="Our Office"
                icon={<FiMapPin />}
                expanded={open.office}
                onToggle={() => toggle("office")}
              >
                <p className="ct-infoText">
                  New Shanti Nagar, Govind Nagar,
                  <br />
                  Raipur, Chhattisgarh 492004
                </p>
              </InfoCard>

              <InfoCard
                title="Phone Number"
                icon={<FiPhone />}
                expanded={open.phone}
                onToggle={() => toggle("phone")}
              >
                <div className="ct-phoneList">
                  <a className="ct-phoneLink" href="tel:+919617178170">
                    +91 96171 78170
                  </a>
                  <a className="ct-phoneLink" href="tel:+917000315002">
                    +91 70003 15002
                  </a>
                </div>
              </InfoCard>

              <InfoCard
                title="Email Address"
                icon={<FiMail />}
                expanded={open.email}
                onToggle={() => toggle("email")}
              >
                <a className="ct-emailLink" href="mailto:ryaansignage@gmail.com">
                  ryaansignage@gmail.com
                </a>
              </InfoCard>

              <InfoCard
                className="ct-span2"
                title="Working Hours"
                icon={<FiClock />}
                expanded={open.hours}
                onToggle={() => toggle("hours")}
              >
                <p className="ct-infoText">
                  Mon - Sat: 10:00 AM - 07:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </InfoCard>

              <InfoCard
                className="ct-span2"
                title="Google Map"
                icon={<FiMapPin />}
                expanded={open.map}
                onToggle={() => toggle("map")}
              >
                <iframe
                  title="Ryaan Signage Location Map"
                  className="ct-mapFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.8361002507936!2d81.65550671005454!3d21.249782680070528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd7247419d87%3A0xbbe9f2613dffa97b!2sNew%20Shanti%20Nagar%20Rd%2C%20New%20Shanti%20Nagar%2C%20Raipur%2C%20Chhattisgarh%20492004!5e1!3m2!1sen!2sin!4v1774974605564!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </InfoCard>
            </div>
          </div>
        </div>

        <div className="ct-footLogo">
          <img src={logo} alt="Ryaan Logo" className="ct-logoImg" />
          <div className="ct-logoText">RYAAN SIGNAGE</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;