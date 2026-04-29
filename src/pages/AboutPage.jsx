import '../App.css';
import hero from '../assets/hero.jpg';
import vanImg from '../assets/van.jpg';
import my1 from '../assets/my1.jpg';

import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AboutPerson({ image, name, tagline, index, children }) {
  return (
    <div className={`ap-card ap-card--${index}`}>
      <div className="ap-img-wrap">
        <Image src={image} alt={name} fluid className="ap-img" />
        <div className="ap-img-overlay" />
      </div>
      <div className="ap-text">
        <p className="ap-eyebrow">{tagline}</p>
        <h2 className="ap-name">{name}</h2>
        <div className="ap-divider" />
        <div className="ap-bio">{children}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --cream: #f8f5f0;
          --warm-white: #fdfcfa;
          --ink: #191714;
          --mid: #4a4540;
          --gold: #b8986a;
          --gold-text: #7a6035;
          --border: #e2dbd2;
        }

        .about-page {
          background: var(--warm-white);
          font-family: 'DM Sans', sans-serif;
          color: var(--ink);
        }

        /* ── HERO ── */
        .about-hero {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        .about-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(72%);
          transform: scale(1.04);
          transition: transform 8s ease;
        }

        .about-hero:hover .about-hero-img {
          transform: scale(1.0);
        }

        .hero-text-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 0 60px 72px;
        }

        .hero-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3rem, 6vw, 5rem);
          color: #fff;
          line-height: 1.05;
          margin: 0;
        }

        .hero-title em {
          font-style: italic;
          color: rgba(255,255,255,0.75);
        }

        /* ── INTRO STRIP ── */
        .about-intro-strip {
          background: var(--ink);
          padding: 56px 72px;
          display: flex;
          align-items: center;
          gap: 48px;
        }

        .intro-line {
          width: 64px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .intro-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.7rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.88);
          line-height: 1.55;
          margin: 0;
        }

        /* ── MEET US ── */
        .meet-section {
          padding: 100px 0 80px;
          background: var(--cream);
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-text);
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--ink);
          margin-bottom: 60px;
          line-height: 1.1;
        }

        /* ── PERSON CARD ── */
        .ap-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          background: #fff;
          box-shadow: 0 4px 40px rgba(25,23,20,0.07);
          overflow: hidden;
          margin-bottom: 28px;
          transition: box-shadow 0.3s ease;
        }

        .ap-card:hover {
          box-shadow: 0 12px 60px rgba(25,23,20,0.13);
        }

        .ap-card--1 {
          direction: rtl;
        }
        .ap-card--1 > * {
          direction: ltr;
        }

        .ap-img-wrap {
          position: relative;
          overflow: hidden;
          min-height: 380px;
        }

        .ap-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .ap-card:hover .ap-img {
          transform: scale(1.04);
        }

        .ap-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(25,23,20,0.12) 0%, transparent 60%);
        }

        .ap-text {
          padding: 52px 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fff;
        }

        .ap-eyebrow {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-text);
          margin-bottom: 10px;
        }

        .ap-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: 2.2rem;
          color: var(--ink);
          margin-bottom: 0;
          line-height: 1.1;
        }

        .ap-divider {
          width: 36px;
          height: 1px;
          background: var(--gold);
          margin: 20px 0;
        }

        .ap-bio p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--mid);
          margin-bottom: 12px;
        }

        .ap-bio p:last-child { margin-bottom: 0; }

        /* ── SOCIAL ── */
        .social-section {
          padding: 80px 0;
          background: var(--warm-white);
          text-align: center;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .social-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 2rem;
          color: var(--ink);
          margin-bottom: 28px;
        }

        .social-links-row {
          display: flex;
          justify-content: center;
          gap: 40px;
        }

        .social-links-row a {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mid);
          text-decoration: none;
          position: relative;
          transition: color 0.2s;
        }

        .social-links-row a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s;
        }

        .social-links-row a:hover {
          color: var(--ink);
        }

        .social-links-row a:hover::after {
          width: 100%;
        }

        /* ── CTA ── */
        .about-cta-section {
          padding: 100px 0;
          background: var(--ink);
          text-align: center;
        }

        .cta-eyebrow {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.1;
        }

        .cta-sub {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin-bottom: 36px;
        }

        .cta-btn {
          display: inline-block;
          padding: 14px 40px;
          background: transparent;
          border: 1px solid var(--gold) !important;
          color: var(--gold) !important;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px !important;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 0 !important;
          transition: background 0.25s, color 0.25s !important;
        }

        .cta-btn:hover {
          background: var(--gold) !important;
          color: var(--ink) !important;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .ap-card,
          .ap-card--1 {
            grid-template-columns: 1fr;
            direction: ltr;
          }

          .ap-img-wrap { min-height: 280px; }
          .ap-text { padding: 36px 28px; }

          .about-intro-strip {
            padding: 40px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .hero-text-overlay { padding: 0 0 40px 28px; }
        }
      `}</style>

      <div className="about-page">

        {/* HERO */}
        <div className="about-hero">
          <Image src={hero} alt="Van and My Tran, photographers and artists" fluid className="about-hero-img" />
          <div className="hero-text-overlay">
            <p className="hero-eyebrow">Our Story</p>
            <h1 className="hero-title">
              Two sisters,<br /><em>one vision.</em>
            </h1>
          </div>
        </div>

        {/* INTRO STRIP */}
        <div className="about-intro-strip">
          <div className="intro-line" />
          <p className="intro-quote">
            "We're a creative duo combining photography and art to tell
            stories that feel real, personal, and worth remembering."
          </p>
        </div>

        {/* MEET US */}
        <div className="meet-section">
          <Container>
            <p className="section-label">The Team</p>
            <h2 className="section-title">Meet the Tran sisters</h2>

            <AboutPerson
              image={vanImg}
              alt="Van Tran, portrait and event photographer"
              name="Van Tran"
              tagline="Portrait & Event Photographer"
              index={0}
            >
              <p>
                I specialize in portrait and event photography, focusing on capturing
                real, natural moments that feel authentic. I primarily shoot in
                Madison, WI and Decatur, IL.
              </p>
              <p>
                Photography started as a passion, and continues to be a way for me
                to explore creativity, whether I'm working with clients or capturing
                moments while traveling.
              </p>
            </AboutPerson>

            <AboutPerson
              image={my1}
              alt="My Tran, artist and illustrator"
              name="My Tran"
              tagline="Artist & Illustrator"
              index={1}
            >
              <p>
                My is a visual artist who loves expressing ideas through drawing,
                painting, and digital art. Her work adds a creative and artistic
                dimension to everything we create together.
              </p>
              <p>
                She enjoys experimenting with different styles and mediums,
                creating pieces that are personal, expressive, and unique.
              </p>
            </AboutPerson>
          </Container>
        </div>

        {/* SOCIAL */}
        <div className="social-section">
          <h2>Connect With Us</h2>
          <div className="social-links-row">
            <a href="https://www.instagram.com/mvstudio.jpg/">Instagram</a>
            <a href="#">Portfolio</a>
            <a href="mailto:vanyhaitran@yahoo.com">Email</a>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta-section">
          <p className="cta-eyebrow">Work With Us</p>
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-sub">Let's bring your vision to life.</p>
          <Link to="/inquire" className="cta-btn">Inquire Now</Link>
        </div>

      </div>
    </>
  );
}