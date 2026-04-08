import '../App.css';
import hero from '../assets/hero.jpg';
import vanImg from '../assets/van.jpg';

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <img src={hero} alt="About us" className="about-hero-img" />  

      </div>

      {/* INTRO */}
      <div className="about-content">
        <h2>Hi, we’re the Tran sisters!</h2>
        <p>
          We’re a creative duo combining photography and art to tell stories in a 
          meaningful way. While Van leads the photography side, specializing in 
          portraits and event coverage, My brings ideas to life 
          through various mediums like drawing and painting.
        </p>
      </div>

      {/* MEET US GRID */}
      <div className="about-team">
        <h2>Meet Us</h2>

        <div className="team-grid">

          {/* YOU - LEFT */}
          <div className="about-person">
            <img src={vanImg} alt="Van Tran" />
            <h3>Van Tran</h3>
            <p className="tagline">Portrait & Event Photographer</p>

            <p>
              I specialize in portrait and event photography, focusing on capturing 
              real, natural moments that feel authentic. I primarily shoot in 
              Madison, WI and Decatur, IL.
            </p>

            <p>
              Photography started as a passion, 
              and continues to be a way for me to explore creativity, whether I’m 
              working with clients or capturing moments while traveling.
            </p>
          </div>

          {/* SISTER - RIGHT */}
          <div className="about-person">
            <img src="/sister-photo.jpg" alt="My Tran" />
            <h3>My Tran</h3>
            <p className="tagline">Artist & Illustrator</p>

            <p>
              My is a visual artist who loves expressing ideas through various mediums like drawing, painting, and digital art.
              Her work adds a creative and artistic dimension 
              to everything we create.
            </p>

            <p>
              She enjoys experimenting with different styles and mediums, creating 
              pieces that are personal, expressive, and unique.
            </p>
          </div>

        </div>
      </div>

  

      {/* SOCIAL */}
      <div className="about-social">
        <h3>Connect With Us</h3>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Portfolio</a>
          <a href="#">Email</a>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to get started?</h2>
        <p>Let’s bring your vision to life.</p>
        <a href="/inquire" className="cta-button">
          Inquire Now
        </a>
      </div>

    </div>
  );
}