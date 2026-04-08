import '../App.css';
import hero from '../assets/hero.jpg';
import vanImg from '../assets/van.jpg';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';

/* NEW COMPONENT */
function AboutPerson({ image, name, tagline, children }) {
  return (
    <div className="about-person text-center">
      <Image src={image} rounded fluid className="mb-3" />
      <h3>{name}</h3>
      <p className="tagline">{tagline}</p>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <Image src={hero} alt="About us" fluid className="about-hero-img" />
      </div>

      <Container>

        {/* INTRO */}
        <div className="about-content text-center my-5">
          <h2>Hi, we’re the Tran sisters!</h2>
          <p>
            We’re a creative duo combining photography and art to tell stories in a 
            meaningful way. While Van leads the photography side, specializing in 
            portraits and event coverage, My brings ideas to life 
            through various mediums like drawing and painting.
          </p>
        </div>

        {/* MEET US */}
        <div className="about-team my-5">
          <h2 className="text-center mb-4">Meet Us</h2>

          <Row className="g-4">
            
            {/* YOU */}
            <Col md={6}>
              <AboutPerson
                image={vanImg}
                name="Van Tran"
                tagline="Portrait & Event Photographer"
              >
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
              </AboutPerson>
            </Col>

            {/* SISTER */}
            <Col md={6}>
              <AboutPerson
                image="/sister-photo.jpg"
                name="My Tran"
                tagline="Artist & Illustrator"
              >
                <p>
                  My is a visual artist who loves expressing ideas through various mediums like drawing, painting, and digital art.
                  Her work adds a creative and artistic dimension 
                  to everything we create.
                </p>

                <p>
                  She enjoys experimenting with different styles and mediums, creating 
                  pieces that are personal, expressive, and unique.
                </p>
              </AboutPerson>
            </Col>

          </Row>
        </div>

        {/* SOCIAL */}
        <div className="about-social text-center my-5">
          <h3>Connect With Us</h3>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <a href="#">Instagram</a>
            <a href="#">Portfolio</a>
            <a href="#">Email</a>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta text-center my-5">
          <h2>Ready to get started?</h2>
          <p>Let’s bring your vision to life.</p>
          <Button href="/inquire" variant="dark">
            Inquire Now
          </Button>
        </div>

      </Container>
    </div>
  );
}