import React, { useEffect, useState } from "react";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";



import video1 from "../img/video1.mp4";
import video2 from "../img/video2.mp4";
import video3 from "../img/video3.mp4";
import video4 from "../img/video4.mp4";
import video5 from "../img/video5.mp4";
import video6 from "../img/video6.mp4";

import vImg from "../New folder/v.png";

// --- NEW ASSETS FROM 'New folder' ---
import nwImg1 from "../New folder/WhatsApp Image 2026-04-03 at 10.08.22 PM.jpeg";
import nwImg2 from "../New folder/WhatsApp Image 2026-04-03 at 10.13.32 PM.jpeg";
import nwImg3 from "../New folder/WhatsApp Image 2026-04-03 at 10.14.12 PM.jpeg";
import nwImg4 from "../New folder/WhatsApp Image 2026-04-03 at 10.16.32 PM.jpeg";
import nwImg5 from "../New folder/WhatsApp Image 2026-04-03 at 10.17.56 PM.jpeg";
import nwImg6 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.45 PM.jpeg";
import nwImg7 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.46 PM (1).jpeg";
import nwImg8 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.46 PM.jpeg";
import nwImg9 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (1).jpeg";
import nwImg10 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (2).jpeg";
import nwImg11 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (3).jpeg";
import nwImg12 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (4).jpeg";
import nwImg13 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (5).jpeg";
import nwImg14 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM (6).jpeg";
import nwImg15 from "../New folder/WhatsApp Image 2026-04-03 at 10.19.47 PM.jpeg";
import nwImg16 from "../New folder/WhatsApp Image 2026-04-03 at 10.21.45 PM.jpeg";
import nwImg17 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.06 PM (1).jpeg";
import nwImg18 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.06 PM.jpeg";
import nwImg19 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.07 PM (1).jpeg";
import nwImg20 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.07 PM (2).jpeg";
import nwImg21 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.07 PM.jpeg";
import nwImg22 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.08 PM (1).jpeg";
import nwImg23 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.08 PM (2).jpeg";
import nwImg24 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.08 PM.jpeg";
import nwImg25 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.09 PM (1).jpeg";
import nwImg26 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.09 PM (2).jpeg";
import nwImg27 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.09 PM.jpeg";
import nwImg28 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.10 PM (1).jpeg";
import nwImg29 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.10 PM (2).jpeg";
import nwImg30 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.10 PM.jpeg";
import nwImg31 from "../New folder/WhatsApp Image 2026-04-03 at 10.23.11 PM.jpeg";
import nwImg32 from "../New folder/WhatsApp Image 2026-04-03 at 10.24.02 PM.jpeg";
import nwImg33 from "../New folder/WhatsApp Image 2026-04-03 at 10.24.03 PM (1).jpeg";
import nwImg34 from "../New folder/WhatsApp Image 2026-04-03 at 10.24.03 PM.jpeg";
import nwImg35 from "../New folder/WhatsApp Image 2026-04-03 at 10.26.12 PM (1).jpeg";
import nwImg36 from "../New folder/WhatsApp Image 2026-04-03 at 10.26.12 PM (2).jpeg";
import nwImg37 from "../New folder/WhatsApp Image 2026-04-03 at 10.26.12 PM.jpeg";
import nwImg38 from "../New folder/WhatsApp Image 2026-04-03 at 10.26.13 PM (1).jpeg";
import nwImg39 from "../New folder/WhatsApp Image 2026-04-03 at 10.26.13 PM.jpeg";

import nwVid1 from "../New folder/WhatsApp Video 2026-04-03 at 10.09.42 PM.mp4";
import nwVid2 from "../New folder/WhatsApp Video 2026-04-03 at 10.10.01 PM.mp4";
import nwVid3 from "../New folder/WhatsApp Video 2026-04-03 at 10.11.33 PM.mp4";
import nwVid4 from "../New folder/WhatsApp Video 2026-04-03 at 10.11.38 PM.mp4";
import nwVid5 from "../New folder/WhatsApp Video 2026-04-03 at 10.12.58 PM.mp4";
import nwVid6 from "../New folder/WhatsApp Video 2026-04-03 at 10.14.04 PM.mp4";
import nwVid7 from "../New folder/WhatsApp Video 2026-04-03 at 10.14.51 PM.mp4";
import nwVid8 from "../New folder/WhatsApp Video 2026-04-03 at 10.16.01 PM.mp4";
import nwVid9 from "../New folder/WhatsApp Video 2026-04-03 at 10.16.20 PM.mp4";
import nwVid10 from "../New folder/WhatsApp Video 2026-04-03 at 10.17.15 PM.mp4";
import nwVid11 from "../New folder/WhatsApp Video 2026-04-03 at 10.17.50 PM.mp4";
import nwVid12 from "../New folder/WhatsApp Video 2026-04-03 at 10.19.55 PM (1).mp4";
import nwVid13 from "../New folder/WhatsApp Video 2026-04-03 at 10.19.55 PM.mp4";
import nwVid14 from "../New folder/WhatsApp Video 2026-04-03 at 10.20.40 PM.mp4";

const projects = [
  // --- IMAGES FIRST ---
  { id: 31, type: "image", src: nwImg1 },
  { id: 32, type: "image", src: nwImg2 },
  { id: 33, type: "image", src: nwImg3 },
  { id: 34, type: "image", src: nwImg4 },
  { id: 35, type: "image", src: nwImg5 },
  { id: 36, type: "image", src: nwImg6 },
  { id: 37, type: "image", src: nwImg7 },
  { id: 38, type: "image", src: nwImg8 },
  { id: 39, type: "image", src: nwImg9 },
  { id: 40, type: "image", src: nwImg10 },
  { id: 41, type: "image", src: nwImg11 },
  { id: 42, type: "image", src: nwImg12 },
  { id: 43, type: "image", src: nwImg13 },
  { id: 44, type: "image", src: nwImg14 },
  { id: 45, type: "image", src: nwImg15 },
  { id: 46, type: "image", src: nwImg16 },
  { id: 47, type: "image", src: nwImg17 },
  { id: 48, type: "image", src: nwImg18 },
  { id: 49, type: "image", src: nwImg19 },
  { id: 50, type: "image", src: nwImg20 },
  { id: 51, type: "image", src: nwImg21 },
  { id: 52, type: "image", src: nwImg22 },
  { id: 53, type: "image", src: nwImg23 },
  { id: 54, type: "image", src: nwImg24 },
  { id: 55, type: "image", src: nwImg25 },
  { id: 56, type: "image", src: nwImg26 },
  { id: 57, type: "image", src: nwImg27 },
  { id: 58, type: "image", src: nwImg28 },
  { id: 59, type: "image", src: nwImg29 },
  { id: 60, type: "image", src: nwImg30 },
  { id: 61, type: "image", src: nwImg31 },
  { id: 62, type: "image", src: nwImg32 },
  { id: 63, type: "image", src: nwImg33 },
  { id: 64, type: "image", src: nwImg34 },
  { id: 65, type: "image", src: nwImg35 },
  { id: 66, type: "image", src: nwImg36 },
  { id: 67, type: "image", src: nwImg37 },
  { id: 68, type: "image", src: nwImg38 },
  { id: 69, type: "image", src: nwImg39 },

  // --- VIDEOS AFTER ---
  { id: 1, type: "video", src: video1, poster: vImg },
  { id: 3, type: "video", src: video2, poster: vImg },
  { id: 4, type: "video", src: video3, poster: vImg },
  { id: 5, type: "video", src: video4, poster: vImg },
  { id: 6, type: "video", src: video5, poster: vImg },
  { id: 7, type: "video", src: video6, poster: vImg },
  { id: 11, type: "video", src: nwVid1, poster: vImg },
  { id: 12, type: "video", src: nwVid2, poster: vImg },
  { id: 13, type: "video", src: nwVid3, poster: vImg },
  { id: 14, type: "video", src: nwVid4, poster: vImg },
  { id: 15, type: "video", src: nwVid5, poster: vImg },
  { id: 16, type: "video", src: nwVid6, poster: vImg },
  { id: 17, type: "video", src: nwVid7, poster: vImg },
  { id: 18, type: "video", src: nwVid8, poster: vImg },
  { id: 19, type: "video", src: nwVid9, poster: vImg },
  { id: 20, type: "video", src: nwVid10, poster: vImg },
  { id: 21, type: "video", src: nwVid11, poster: vImg },
  { id: 22, type: "video", src: nwVid12, poster: vImg },
  { id: 23, type: "video", src: nwVid13, poster: vImg },
  { id: 24, type: "video", src: nwVid14, poster: vImg },
];


const BaseStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bebas+Neue&display=swap');

    :root{
      --bg: #0b0d12;
      --card: #12161d;
      --card2: #171c24;
      --text: #ffffff;
      --muted: rgba(255,255,255,0.70);
      --line: rgba(255,255,255,0.10);
      --accent: #d94a38;
      --accent2: #ff7f67;
      --radius: 22px;
      --shadow: 0 18px 55px rgba(0,0,0,0.30);
    }

    *{
      box-sizing: border-box;
    }

    .gallery-section{
      position: relative;
      padding: 90px 0;
      overflow: hidden;
      background:
        radial-gradient(circle at top left, rgba(217,74,56,0.14), transparent 24%),
        radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 20%),
        linear-gradient(180deg, #090b10 0%, #0f1319 100%);
      color: var(--text);
      font-family: "Inter", sans-serif;
    }

    .gallery-container{
      width: min(1320px, calc(100% - 28px));
      margin: 0 auto;
    }

    .gallery-header{
      text-align: center;
      max-width: 850px;
      margin: 0 auto 42px;
    }

    .gallery-badge{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.10);
      color: #ffd5cf;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .gallery-dot{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      box-shadow: 0 0 18px rgba(217,74,56,0.65);
    }

    .gallery-title{
      margin: 0;
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(52px, 8vw, 96px);
      line-height: 0.95;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .gallery-title span{
      color: var(--accent);
    }

    .gallery-subtitle{
      margin: 16px auto 0;
      max-width: 760px;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.8;
    }

    .gallery-topbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      flex-wrap: wrap;
      margin-bottom: 28px;
    }

    .gallery-stats{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .gallery-stat{
      padding: 12px 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      font-size: 13px;
      color: #fff;
      font-weight: 600;
    }

    .gallery-tag{
      display: none;
    }

    .gallery-actions{
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .gallery-btn{
      border: none;
      cursor: pointer;
      border-radius: 999px;
      padding: 15px 24px;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }

    .gallery-btn-outline{
      background: rgba(255,255,255,0.06);
      color: white;
      border: 1px solid rgba(255,255,255,0.10);
    }

    .gallery-btn-outline:hover{
      background: rgba(255,255,255,0.10);
      transform: translateY(-2px);
    }

    .gallery-btn-primary{
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      color: white;
      box-shadow: 0 18px 36px rgba(217,74,56,0.28);
    }

    .gallery-btn-primary:hover{
      transform: translateY(-2px);
      box-shadow: 0 24px 42px rgba(217,74,56,0.34);
    }

    .gallery-grid{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .gallery-card{
      position: relative;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: var(--radius);
      background: linear-gradient(180deg, var(--card2), var(--card));
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: var(--shadow);
      cursor: pointer;
      transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    }

    .gallery-card:hover{
      transform: translateY(-8px);
      border-color: rgba(255,255,255,0.16);
      box-shadow: 0 28px 70px rgba(0,0,0,0.36);
    }

    .gallery-media-wrap{
      position: absolute;
      inset: 0;
      background: #0a0c10;
    }

    .gallery-media{
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      transition: transform 0.7s ease;
      background: #0a0c10;
    }

    .gallery-card:hover .gallery-media{
      transform: scale(1.06);
    }

    .gallery-overlay{
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 18px;
      background: linear-gradient(180deg, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.68) 100%);
    }

    .gallery-top{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }

    .gallery-tag{
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.10);
      color: white;
      border: 1px solid rgba(255,255,255,0.12);
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      backdrop-filter: blur(10px);
    }

    .gallery-play{
      width: 68px;
      height: 68px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.14);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: white;
      font-size: 24px;
      backdrop-filter: blur(12px);
      box-shadow: 0 0 30px rgba(0,0,0,0.3);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .gallery-card:hover .gallery-play{
      transform: scale(1.15) rotate(5deg);
      background: var(--accent);
      border-color: var(--accent2);
      box-shadow: 0 10px 40px rgba(217, 74, 56, 0.6);
    }

    .gallery-center-play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
      pointer-events: none;
    }

    .gallery-bottom h3{
      margin: 0 0 8px;
      font-size: clamp(22px, 2vw, 30px);
      line-height: 1.05;
      font-weight: 800;
      color: white;
      letter-spacing: -0.03em;
    }

    .gallery-meta{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      color: rgba(255,255,255,0.82);
      font-size: 13px;
      font-weight: 500;
    }

    .gallery-pill{
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.10);
      border: 1px solid rgba(255,255,255,0.10);
    }

    .gallery-error{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
      color: rgba(255,255,255,0.75);
      background: linear-gradient(135deg, #171a20, #0d0f14);
    }

    .gallery-modal{
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0,0,0,0.84);
      backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .gallery-modal-box{
      position: relative;
      width: min(1100px, 96vw);
      background: #0b0e13;
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 30px 90px rgba(0,0,0,0.45);
    }

    .gallery-modal-close{
      position: absolute;
      top: 14px;
      right: 14px;
      width: 46px;
      height: 46px;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      color: #fff;
      font-size: 24px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.14);
      z-index: 5;
    }

    .gallery-modal-media-wrap{
      width: 100%;
      height: 72vh;
      background: #000;
    }

    .gallery-modal-media{
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      background: #000;
    }

    .gallery-modal-info{
      padding: 22px 24px;
      background: #10141b;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    .gallery-modal-info h3{
      margin: 0 0 8px;
      color: white;
      font-size: 28px;
      font-weight: 800;
    }

    .gallery-modal-info p{
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 14px;
    }

    @media (max-width: 1100px){
      .gallery-grid{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 900px){
      .gallery-grid{
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px){
      .gallery-section{
        padding: 72px 0;
      }

      .gallery-grid{
        grid-template-columns: 1fr;
      }

      .gallery-topbar{
        flex-direction: column;
        align-items: stretch;
      }

      .gallery-actions{
        width: 100%;
      }

      .gallery-btn{
        width: 100%;
      }

      .gallery-modal-media-wrap{
        height: 52vh;
      }
    }
  `}</style>
);

const MediaCard = ({ project, onOpen }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="gallery-card" onClick={() => onOpen(project)}>
      <div className="gallery-media-wrap">
        {hasError ? (
          <div className="gallery-error">
            Media failed to load
            <br />
            Please check file path / format
          </div>
        ) : project.type === "video" ? (
          <>
            <video
              className="gallery-media"
              muted
              playsInline
              preload="metadata"
              poster={project.poster}
              onError={() => setHasError(true)}
            >
              <source src={project.src} type="video/mp4" />
            </video>
            <div className="gallery-center-play">
              <div className="gallery-play">▶</div>
            </div>
          </>
        ) : (
          <img
            src={project.src}
            alt={project.title}
            className="gallery-media"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>

      <div className="gallery-overlay">
        <div className="gallery-top">
          {/* Tags removed for a cleaner look */}
        </div>
      </div>
    </div>
  );
};

const GalleryModal = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="gallery-modal" onClick={onClose}>
      <div className="gallery-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-modal-close" onClick={onClose}>×</button>

        <div className="gallery-modal-media-wrap">
          {item.type === "video" ? (
            <video
              className="gallery-modal-media"
              src={item.src}
              controls
              autoPlay
              loop
              playsInline
              poster={item.poster}
            />
          ) : (
            <img
              src={item.src}
              alt={item.title}
              className="gallery-modal-media"
            />
          )}
        </div>

        <div className="gallery-modal-info">
          <p>
            Premium creative showcase from our portfolio. This preview highlights our
            branding, signage, printing, exhibition, media, and visual production work.
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCTA = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(
        "https://wa.me/919617178170?text=Hi%2C%20I%20want%20to%20discuss%20a%20project",
        "_blank"
      );
    }
  };

  const handleExplore = () => {
    const section = document.getElementById("gallery");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gallery-section" id="gallery">
      <BaseStyles />

      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-badge">
            <span className="gallery-dot"></span>
            Premium Portfolio
          </div>

          <h2 className="gallery-title">
            View Our <span>Work</span>
          </h2>

          <p className="gallery-subtitle">
            Explore our premium collection of branding, signage, and digital motion
            work in a clean, minimalist gallery.
          </p>
        </div>

        <div className="gallery-topbar">
          
          <div className="gallery-actions">
            
            <button className="gallery-btn gallery-btn-primary" onClick={handleCTA}>
              Work With Us
            </button>
          </div>
        </div>

        <div className="gallery-grid">
          {projects.map((project) => (
            <MediaCard
              key={project.id}
              project={project}
              onOpen={setSelectedItem}
            />
          ))}
        </div>
      </div>

      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default Gallery;