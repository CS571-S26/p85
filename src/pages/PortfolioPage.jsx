import { useState } from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

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



export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = [
    { src: p1, category: 'portraits' },
    { src: p2, category: 'portraits' },
    { src: p3, category: 'portraits' },
    { src: p4, category: 'portraits' },
    { src: p5, category: 'portraits' },
    { src: p6, category: 'travel' },
    { src: p7, category: 'travel' },
    { src: p8, category: 'travel' },
    { src: p9, category: 'travel' },
    { src: p10, category: 'travel' },
    { src: p11, category: 'travel' },
    { src: p12, category: 'events' },
    { src: p13, category: 'events' },
    { src: p14, category: 'events' },
    { src: p15, category: 'events' },
    { src: p16, category: 'events' },
    { src: p17, category: 'events' },


  ];

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter(img => img.category === selectedCategory);

  return (
    <Container className="portfolio-page">

      <div className="portfolio-header">
        <h1>Portfolio</h1>
        <p>A collection of moments, stories, and creative work.</p>
      </div>

      <PortfolioFilter setCategory={setSelectedCategory} />
      <PortfolioGrid images={filteredImages} onClick={setLightboxImg} />

      {lightboxImg && (
        <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}

    </Container>
  );
}

/* ===== COMPONENTS BELOW ===== */

function PortfolioFilter({ setCategory }) {
  return (
    <div className="portfolio-filters">
      <button onClick={() => setCategory('all')}>All</button>
      <button onClick={() => setCategory('portraits')}>Portraits</button>
      <button onClick={() => setCategory('events')}>Events</button>
      <button onClick={() => setCategory('travel')}>Travel</button>
    </div>
  );
}

function PortfolioGrid({ images, onClick }) {
  return (
    <div className="portfolio-grid">
      {images.map((img, index) => (
        <PortfolioItem key={index} img={img} onClick={onClick} />
      ))}
    </div>
  );
}

function PortfolioItem({ img, onClick }) {
  return (
    <div className="portfolio-item" onClick={() => onClick(img.src)}>
      <img src={img.src} alt="portfolio" />
    </div>
  );
}

function Lightbox({ img, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <span className="lightbox-close">&times;</span>
      <img src={img} alt="fullscreen" className="lightbox-img" />
    </div>
  );
}