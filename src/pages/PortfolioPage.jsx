import { useState } from 'react';
import '../App.css';
import PortfolioFilter from '../components/PortfolioFilter';
import Lightbox from '../components/Lightbox';
import PortfolioGrid from '../components/PortfolioGrid';

// IMPORT IMAGES
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';
import p13 from '../assets/p13.jpg';
import p14 from '../assets/p14.jpg';
import p15 from '../assets/p15.jpg';
import p16 from '../assets/p16.jpg';
import p17 from '../assets/p17.jpg';
import p18 from '../assets/p18.jpg';
import p19 from '../assets/p19.jpg';
import p20 from '../assets/p20.jpg';
import p21 from '../assets/p21.jpg';
import p22 from '../assets/p22.jpg';
import p23 from '../assets/p23.jpg';
import p24 from '../assets/p24.jpeg';
import p25 from '../assets/p25.jpg';
import p26 from '../assets/p26.jpg';
import p27 from '../assets/p27.jpg';
import p28 from '../assets/p28.jpg';
import p29 from '../assets/p29.jpg';
import p30 from '../assets/p30.jpg';
import p31 from '../assets/p31.jpg';
import p32 from '../assets/p32.jpg';


const images = [
  { src: p1,  category: 'portraits', caption: 'Femme Fatale',         alt: 'Portrait titled Femme Fatale, Decatur, IL',               location: 'Decatur, IL' },
  { src: p2,  category: 'portraits', caption: 'Golden hour session',  alt: 'Golden hour portrait session, Madison, WI',               location: 'Madison, WI' },
  { src: p20, category: 'travel',    caption: 'Cleveland Dam',        alt: 'Cleveland Dam landscape, Vancouver, Canada',              location: 'Vancouver, Canada' },
  { src: p21, category: 'portraits', caption: 'Picnic',               alt: 'Outdoor picnic portrait, Decatur, IL',                   location: 'Decatur, IL' },
  { src: p22, category: 'portraits', caption: 'Blinding Lights',      alt: 'Portrait titled Blinding Lights, Decatur, IL',           location: 'Decatur, IL' },
  { src: p23, category: 'portraits', caption: 'Censored',             alt: 'Editorial portrait titled Censored, Decatur, IL',        location: 'Decatur, IL' },
  { src: p24, category: 'portraits', caption: 'Pulp Fiction',         alt: 'Portrait titled Pulp Fiction, Decatur, IL',              location: 'Decatur, IL' },
  { src: p25, category: 'portraits', caption: 'Grass',                alt: 'Portrait among grass, Decatur, IL',                     location: 'Decatur, IL' },
  { src: p26, category: 'portraits', caption: 'Trucking',             alt: 'Portrait titled Trucking, Decatur, IL',                 location: 'Decatur, IL' },
  { src: p27, category: 'portraits', caption: 'Barrels',              alt: 'Portrait with barrels, Champaign, IL',                  location: 'Champaign, IL' },
  { src: p29, category: 'portraits', caption: 'Cotton Candy Clouds',  alt: 'Portrait under cotton candy clouds, Decatur, IL',       location: 'Decatur, IL' },
  { src: p30, category: 'portraits', caption: 'Washing Machine',      alt: 'Portrait titled Washing Machine, Decatur, IL',          location: 'Decatur, IL' },
  { src: p3,  category: 'portraits', caption: 'Tennis',               alt: 'group Tennis Portrait, Chicago, IL',                    location: 'Decatur, IL' },
  { src: p4,  category: 'portraits', caption: 'Scopic Satisfaction',  alt: 'Portrait titled Scopic Satisfaction, Madison, WI',      location: 'Madison, WI' },
  { src: p5,  category: 'portraits', caption: 'Phonies',              alt: 'Portrait titled Phonies, Madison, WI',                  location: 'Madison, WI' },
  { src: p6,  category: 'travel',    caption: 'Yellow Tower',         alt: 'Yellow tower architecture, Vienna, Austria',            location: 'Vienna, Austria' },
  { src: p7,  category: 'travel',    caption: 'Afternoon light',      alt: 'Afternoon light in Prague, Czechia',                    location: 'Prague, Czechia' },
  { src: p8,  category: 'travel',    caption: 'Blossoms in DC',       alt: 'Cherry blossoms in Washington D.C.',                   location: 'Washington, D.C' },
  { src: p9,  category: 'travel',    caption: 'Busy Street',          alt: 'Busy street scene in Tokyo, Japan',                    location: 'Tokyo, Japan' },
  { src: p28, category: 'portraits', caption: 'Traffic',              alt: 'Portrait titled Traffic, Decatur, IL',                 location: 'Decatur, IL' },
  { src: p10, category: 'travel',    caption: 'Tokyo Market',         alt: 'Tokyo market scene, Japan',                            location: 'Tokyo, Japan' },
  { src: p11, category: 'travel',    caption: 'Meiji Jingu',          alt: 'Meiji Jingu shrine, Tokyo, Japan',                     location: 'Tokyo, Japan' },
  { src: p31, category: 'portraits', caption: 'Neocity',              alt: 'Portrait titled Neocity, Chicago, IL',                 location: 'Chicago, IL' },
  { src: p12, category: 'events',    caption: 'Feast',                alt: 'Event photo of a feast, Decatur, IL',                  location: 'Decatur, IL' },
  { src: p13, category: 'events',    caption: 'Baby Shower',          alt: 'Baby shower event, Decatur, IL',                       location: 'Decatur, IL' },
  { src: p15, category: 'events',    caption: 'Networking',           alt: 'Networking event, Madison, WI',                        location: 'Madison, WI' },
  { src: p16, category: 'events',    caption: 'Career Fair',          alt: 'Career fair event, Madison, WI',                       location: 'Madison, WI' },
  { src: p32, category: 'portraits', caption: 'Sisters',              alt: 'Portrait of sisters, Allerton, IL',                   location: 'Allerton, IL' },
  { src: p17, category: 'events',    caption: "Veena's Birthday",     alt: "Veena's birthday celebration, Chicago, IL",            location: 'Chicago, IL' },
  { src: p18, category: 'travel',    caption: 'Sunny Rooftops',       alt: 'Sunny rooftops of Prague, Czechia',                    location: 'Prague, Czechia' },
  { src: p19, category: 'travel',    caption: 'Serene Moment',        alt: 'Serene moment captured in Prague, Czechia',            location: 'Prague, Czechia' },
];


export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter(img => img.category === selectedCategory);

  const currentIndex = lightboxImg
    ? filteredImages.findIndex(img => img.src === lightboxImg.src)
    : -1;

  const goNext = (e) => {
    e.stopPropagation();
    if (currentIndex < filteredImages.length - 1)
      setLightboxImg(filteredImages[currentIndex + 1]);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0)
      setLightboxImg(filteredImages[currentIndex - 1]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream: #f8f5f0;
          --warm-white: #fdfcfa;
          --ink: #191714;
          --mid: #6b6159;
          --gold: #b8986a;
          --border: #e2dbd2;
        }

        .portfolio-page {
          background: var(--warm-white);
          min-height: 100vh;
          padding-bottom: 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── HEADER ── */


        .port-eyebrow {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
          font-family: 'DM Sans', sans-serif;
        }

        .portfolio-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3rem, 6vw, 5rem);
          color: var(--ink);
          line-height: 1;
          margin-bottom: 14px;
        }

        .portfolio-header p {
          font-size: 13px;
          font-weight: 300;
          color: var(--mid);
          letter-spacing: 0.06em;
          margin-bottom: 0;
        }

        .port-header-rule {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin: 24px auto 0;
        }

        /* ── FILTERS ── */
        .portfolio-filters {
          display: flex;
          justify-content: center;
          gap: 0;
          margin: 0px 0 40px;
          border-bottom: 1px solid var(--border);
        }

        .pf-btn {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          padding: 10px 28px 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mid);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
        }

        .pf-btn:hover { color: var(--ink); }

        .pf-btn.active {
          color: var(--ink);
          border-bottom-color: var(--gold);
        }

        /* ── GRID ── */
        .portfolio-grid {
          columns: 3;
          column-gap: 12px;
        }

        @media (max-width: 900px) { .portfolio-grid { columns: 2; } }
        @media (max-width: 500px) { .portfolio-grid { columns: 1; } }

        /* ── ITEM ── */
        .portfolio-item {
          break-inside: avoid;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: var(--ink);
        }

        .portfolio-item img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease, opacity 0.35s ease;
        }

        .portfolio-item:hover img {
          transform: scale(1.04);
          opacity: 0.72;
        }

        .pi-hover-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 28px 16px 16px;
          background: linear-gradient(to top, rgba(25,23,20,0.85) 0%, transparent 100%);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          pointer-events: none;
        }

        .portfolio-item:hover .pi-hover-info {
          opacity: 1;
          transform: translateY(0);
        }

        .pi-caption {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: rgba(255,255,255,0.9);
          display: block;
        }

        .pi-location {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-top: 3px;
        }

        /* ── LIGHTBOX ── */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(18, 16, 13, 0.96);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          animation: lbFadeIn 0.25s ease;
        }

        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .lightbox-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 88vw;
          max-height: 88vh;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 78vh;
          object-fit: contain;
          display: block;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }

        .lightbox-meta {
          margin-top: 20px;
          text-align: center;
        }

        .lb-caption {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.88);
          display: block;
        }

        .lb-location {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-top: 6px;
        }

        .lb-counter {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.3);
          margin-top: 10px;
          display: block;
        }

        .lightbox-close {
          position: fixed;
          top: 28px;
          right: 36px;
          color: rgba(255,255,255,0.55);
          font-size: 1.6rem;
          cursor: pointer;
          line-height: 1;
          transition: color 0.2s;
          background: none;
          border: none;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }

        .lightbox-close:hover { color: #fff; }

        .lb-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.55);
          font-size: 1.2rem;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .lb-nav:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.4);
        }

        .lb-nav:disabled {
          opacity: 0.15;
          cursor: default;
        }

        .lb-prev { left: 24px; }
        .lb-next { right: 24px; }
      `}</style>

      <div className="portfolio-page">


        <PortfolioFilter
          selectedCategory={selectedCategory}
          setCategory={setSelectedCategory}
        />

        <PortfolioGrid
          images={filteredImages}
          onClick={setLightboxImg}
        />

        {lightboxImg && (
          <Lightbox
            img={lightboxImg}
            onClose={() => setLightboxImg(null)}
            onNext={goNext}
            onPrev={goPrev}
            currentIndex={currentIndex}
            total={filteredImages.length}
            hasPrev={currentIndex > 0}
            hasNext={currentIndex < filteredImages.length - 1}
          />
        )}
      </div>
    </>
  );
}
