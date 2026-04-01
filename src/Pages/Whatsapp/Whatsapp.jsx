// FloatingSocials.jsx
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingSocials = ({
  whatsappNumber = "919617178170", // ✅ without + (example: 91xxxxxxxxxx)
  instagramUrl = "https://www.instagram.com/ryaansignage?igsh=dTZjcHl2bnltbjY0",
  whatsappMessage = "Hi Ryaan Signage, I want to know more about your services.",
}) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <style>{`
        .fs-wrap{
          position: fixed;
          left: 18px;                 /* ✅ left side */
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fs-btn{
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          text-decoration: none;
          color: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 14px 30px rgba(0,0,0,0.16);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .fs-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(0,0,0,0.22);
          filter: brightness(1.03);
        }

        .fs-wa{ background: #25D366; }
        .fs-ig{
          background: radial-gradient(circle at 30% 110%,
            #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }

        .fs-icon{
          font-size: 22px;
          line-height: 1;
        }

        /* Optional small label on hover */
        .fs-btn[data-label]{
          position: relative;
        }
        .fs-btn[data-label]::after{
          content: attr(data-label);
          position: absolute;
          left: 58px;
          white-space: nowrap;
          background: rgba(17,17,20,0.92);
          color: #fff;
          padding: 8px 10px;
          border-radius: 10px;
          font-size: 12px;
          opacity: 0;
          transform: translateX(-6px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .fs-btn:hover::after{
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 600px){
          .fs-wrap{ left: 12px; }
          .fs-btn{ width: 44px; height: 44px; border-radius: 12px; }
          .fs-icon{ font-size: 21px; }
          .fs-btn[data-label]::after{ display:none; } /* mobile clean */
        }
      `}</style>

      <div className="fs-wrap">
        <a
          className="fs-btn fs-wa"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-label="WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="fs-icon" />
        </a>

        <a
          className="fs-btn fs-ig"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram"
          data-label="Instagram"
          title="Instagram"
        >
          <FiInstagram className="fs-icon" />
        </a>
      </div>
    </>
  );
};

export default FloatingSocials;