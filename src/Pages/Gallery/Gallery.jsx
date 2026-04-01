import React, { useEffect, useState } from "react";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";

import video1 from "../img/video1.mp4";
import video2 from "../img/video2.mp4";
import video3 from "../img/video3.mp4";
import video4 from "../img/video4.mp4";
import video5 from "../img/video5.mp4";
import video6 from "../img/video6.mp4";

const projects = [
  { id: 1, type: "video", src: video1, poster: img1},
  { id: 2, type: "image", src: img1},
  { id: 3, type: "video", src: video2, poster: img2},
  { id: 4, type: "image", src: img2},
  { id: 5, type: "video", src: video3, poster: img3},
  { id: 6, type: "image", src: img3},
  { id: 7, type: "video", src: video4, poster: img4},
  { id: 8, type: "image", src: img4},
  { id: 9, type: "video", src: video5, poster: img1},
  { id: 10, type: "video", src: video6, poster: img2},
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
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
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
      width: 46px;
      height: 46px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.14);
      color: white;
      font-size: 18px;
      backdrop-filter: blur(10px);
      flex-shrink: 0;
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

    @media (max-width: 992px){
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
          <video
            className="gallery-media"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.poster}
            onError={() => setHasError(true)}
          >
            <source src={project.src} type="video/mp4" />
          </video>
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
          <div className="gallery-tag">
            {project.type === "video" ? "Video Project" : "Image Project"}
          </div>
          <div className="gallery-play">
            {project.type === "video" ? "▶" : "↗"}
          </div>
        </div>

        <div className="gallery-bottom">
          <h3>{project.title}</h3>
          <div className="gallery-meta">
            <span className="gallery-pill">{project.category}</span>
            <span>{project.type === "video" ? "Live Preview" : "High Resolution"}</span>
          </div>
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
          <h3>{item.title}</h3>
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
            Explore our premium branding, signage, digital display, print and motion
            work in a clean modern showcase. Every card is now equal size for a more
            polished and balanced look.
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