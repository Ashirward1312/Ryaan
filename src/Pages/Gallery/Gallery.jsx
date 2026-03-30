import React, { useState, useMemo } from "react";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import imgAbout from "../img/about.png";
import imgHow from "../img/how.png";

/* Gallery Project Section (Red/White Theme) — Responsive Grid — Default Export */

const projects = [
    { id: 1, title: "Premium Hoarding", category: "Outdoor", img: img1 },
    { id: 2, title: "Exhibition Stall", category: "Bespoke", img: img2 },
    { id: 3, title: "Corporate Branding", category: "Branding", img: img3 },
    { id: 4, title: "Signage Fabrication", category: "Signage", img: imgAbout },
    { id: 5, title: "Event Lighting", category: "Events", img: imgHow },
    { id: 6, title: "LED Display", category: "Digital", img: img1 },
];

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
      --radius: 18px;
    }

    *{ box-sizing: border-box; }

    .gl-page{
      font-family: "Outfit", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
      background: #fff;
      color: var(--ink);
      padding: 100px 0;
      position: relative;
    }

    .gl-shell{
      width: min(1200px, calc(100% - 40px));
      margin: 0 auto;
    }

    /* HEADER */
    .gl-head{
      text-align: center;
      margin-bottom: 60px;
    }

    .gl-eyebrow{
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
    .gl-eyebrow::before, .gl-eyebrow::after{
      content:"";
      width: 28px;
      height: 2px;
      background: var(--red);
      opacity: 0.4;
    }

    .gl-title{
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(48px, 6vw, 72px);
      letter-spacing: 0.05em;
      line-height: 0.95;
      margin: 0;
    }
    .gl-title span{ color: var(--red); }

    /* FILTERS */
    .gl-filters{
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    .gl-filter{
      background: none;
      border: 1px solid var(--line);
      padding: 10px 20px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: all 0.2s;
      color: var(--muted);
    }
    .gl-filter.active, .gl-filter:hover{
      border-color: var(--red);
      color: var(--red);
      background: rgba(192,57,43,0.05);
    }

    /* GRID */
    .gl-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 20px;
    }
    @media (max-width: 640px){
      .gl-grid { grid-template-columns: 1fr; }
    }

    .gl-item{
      position: relative;
      border-radius: var(--radius);
      overflow: hidden;
      aspect-ratio: 4/3;
      background: var(--soft);
      cursor: pointer;
    }

    .gl-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .gl-overlay{
      position: absolute;
      inset: 0;
      background: linear-gradient(0deg, rgba(17,17,20,0.92) 0%, rgba(17,17,20,0.4) 50%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 32px;
    }

    .gl-item:hover .gl-img{ transform: scale(1.08); }
    .gl-item:hover .gl-overlay{ opacity: 1; }

    .gl-cat{
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 800;
      color: var(--red);
      margin-bottom: 8px;
      transform: translateY(20px);
      transition: transform 0.4s ease 0.1s;
    }
    .gl-projectTitle{
      font-family: "Bebas Neue", sans-serif;
      font-size: 32px;
      color: #fff;
      letter-spacing: 0.04em;
      margin: 0;
      transform: translateY(20px);
      transition: transform 0.4s ease 0.15s;
    }

    .gl-item:hover .gl-cat,
    .gl-item:hover .gl-projectTitle{
      transform: translateY(0);
    }

    /* VIEW MORE */
    .gl-foot{
      text-align: center;
      margin-top: 60px;
    }
    .gl-btn{
      background: var(--red);
      color: #fff;
      padding: 16px 40px;
      border-radius: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      border: none;
      cursor: pointer;
      box-shadow: 0 20px 40px rgba(192,57,43,0.3);
      transition: all 0.2s;
    }
    .gl-btn:hover{
      background: #e74c3c;
      transform: translateY(-2px);
      box-shadow: 0 24px 48px rgba(192,57,43,0.4);
    }
  `}</style>
);

const Gallery = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter((p) => p.category === filter);
    }, [filter]);

    const categories = ["All", "Outdoor", "Bespoke", "Branding", "Signage", "Events"];

    return (
        <section className="gl-page" id="gallery">
            <BaseStyles />

            <div className="gl-shell">
                <div className="gl-head">
                    <span className="gl-eyebrow">Our Portfolio</span>
                    <h2 className="gl-title">
                        Featured <span>Work</span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="gl-filters">
                    {categories.map((c) => (
                        <button
                            key={c}
                            className={`gl-filter ${filter === c ? "active" : ""}`}
                            onClick={() => setFilter(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gl-grid">
                    {filteredProjects.map((p) => (
                        <div className="gl-item" key={p.id}>
                            <img src={p.img} alt={p.title} className="gl-img" />
                            <div className="gl-overlay">
                                <span className="gl-cat">{p.category}</span>
                                <h3 className="gl-projectTitle">{p.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gl-foot">
                    <button className="gl-btn">Explore Full Portfolio</button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
