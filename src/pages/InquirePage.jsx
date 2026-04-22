import { useState } from 'react'
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap'

const SESSION_TYPES = [
  'Portrait',
  'Wedding',
  'Engagement',
  'Family',
  'Editorial / Commercial',
  'Event',
  'Other',
]

export default function InquirePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: '',
    date: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [focused, setFocused] = useState(null)

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!formData.sessionType) e.sessionType = 'Please select a session type'
    if (!formData.message.trim()) e.message = 'Tell us a bit about your vision'
    return e
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .inquire-root {
          min-height: 100vh;
          background: #f7f4ef;
          font-family: 'Jost', sans-serif;
          padding: 80px 0 100px;
        }

        .inquire-eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #a8957c;
          margin-bottom: 12px;
        }

        .inquire-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.6rem, 5vw, 4rem);
          line-height: 1.1;
          color: #1c1712;
          margin-bottom: 10px;
        }

        .inquire-title em {
          font-style: italic;
          color: #a8957c;
        }

        .inquire-divider {
          width: 48px;
          height: 1px;
          background: #a8957c;
          margin: 28px 0;
        }

        .inquire-subtitle {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 14px;
          line-height: 1.75;
          color: #6b5e50;
          max-width: 380px;
        }

        /* --- Form Card --- */
        .inquire-card {
          background: #fff;
          border: none;
          box-shadow: 0 2px 40px rgba(28,23,18,0.07);
          padding: 52px 48px;
        }

        @media (max-width: 576px) {
          .inquire-card { padding: 36px 24px; }
        }

        /* --- Fields --- */
        .field-group {
          margin-bottom: 28px;
          position: relative;
        }

        .field-label {
          display: block;
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a8957c;
          margin-bottom: 8px;
          transition: color 0.2s;
        }

        .field-label.active { color: #1c1712; }

        .field-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #d4c9bb;
          border-radius: 0;
          padding: 8px 0 10px;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 15px;
          color: #1c1712;
          outline: none;
          transition: border-color 0.25s;
          -webkit-appearance: none;
        }

        .field-input:focus {
          border-bottom-color: #a8957c;
          box-shadow: none;
        }

        .field-input.error {
          border-bottom-color: #c0392b;
        }

        .field-input option { font-family: 'Jost', sans-serif; }

        .field-input::placeholder { color: #c4b9ad; font-weight: 300; }

        textarea.field-input {
          resize: none;
          min-height: 96px;
        }

        .field-error {
          font-size: 11px;
          color: #c0392b;
          margin-top: 5px;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        /* --- Session Pills --- */
        .session-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .session-pill {
          padding: 6px 16px;
          border: 1px solid #d4c9bb;
          background: transparent;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #6b5e50;
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 0;
        }

        .session-pill:hover {
          border-color: #a8957c;
          color: #1c1712;
        }

        .session-pill.selected {
          background: #1c1712;
          border-color: #1c1712;
          color: #f7f4ef;
        }

        /* --- Submit Button --- */
        .submit-btn {
          width: 100%;
          padding: 16px;
          background: #1c1712;
          color: #f7f4ef;
          border: none;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 12px;
          transition: background 0.25s, transform 0.15s;
        }

        .submit-btn:hover {
          background: #a8957c;
          transform: translateY(-1px);
        }

        .submit-btn:active { transform: translateY(0); }

        /* --- Success State --- */
        .success-wrap {
          text-align: center;
          padding: 60px 20px;
        }

        .success-icon {
          width: 56px;
          height: 56px;
          border: 1px solid #a8957c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          color: #a8957c;
          font-size: 22px;
        }

        .success-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 2rem;
          color: #1c1712;
          margin-bottom: 12px;
        }

        .success-body {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 14px;
          color: #6b5e50;
          line-height: 1.7;
        }

        .reset-link {
          background: none;
          border: none;
          padding: 0;
          color: #a8957c;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-family: 'Jost', sans-serif;
          cursor: pointer;
          margin-top: 28px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>

      <div className="inquire-root">
        <Container>
          <Row className="g-5 align-items-start">

            {/* Left column — intro text */}
            <Col xs={12} md={4} className="pe-md-5">
              <p className="inquire-eyebrow">Let's Connect</p>
              <h1 className="inquire-title">
                Tell us about your <em>vision</em>
              </h1>
              <div className="inquire-divider" />
              <p className="inquire-subtitle">
                Every session starts with a conversation. Share the details of your
                dream shoot and we'll be in touch to talk through
                availability, location ideas, and how we can make it real.
              </p>
            </Col>

            {/* Right column — form */}
            <Col xs={12} md={8}>
              <Card className="inquire-card">
                <Card.Body>
                  {submitted ? (
                    <div className="success-wrap">
                      <div className="success-icon">✓</div>
                      <h2 className="success-title">Message received</h2>
                      <p className="success-body">
                        Thank you, {formData.name.split(' ')[0]}. I'm looking forward
                        to reading your note and will be in touch soon.
                      </p>
                      <button className="reset-link" onClick={() => { setSubmitted(false); setFormData({ name:'', email:'', sessionType:'', date:'', location:'', message:'' }) }}>
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit} noValidate>
                      <Row className="g-0">
                        <Col xs={12} md={6} className="pe-md-4">
                          <Form.Group className="field-group" controlId="formName">
                            <Form.Label className={`field-label${focused==='name'?' active':''}`}>Full Name *</Form.Label>
                            <Form.Control
                              className={`field-input${errors.name?' error':''}`}
                              value={formData.name}
                              placeholder="Jane Smith"
                              isInvalid={!!errors.name}
                              onFocus={() => setFocused('name')}
                              onBlur={() => setFocused(null)}
                              onChange={e => handleChange('name', e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid" className="field-error">
                              {errors.name}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="ps-md-4">
                          <Form.Group className="field-group" controlId="formEmail">
                            <Form.Label className={`field-label${focused==='email'?' active':''}`}>Email Address *</Form.Label>
                            <Form.Control
                              type="email"
                              className={`field-input${errors.email?' error':''}`}
                              value={formData.email}
                              placeholder="jane@email.com"
                              isInvalid={!!errors.email}
                              onFocus={() => setFocused('email')}
                              onBlur={() => setFocused(null)}
                              onChange={e => handleChange('email', e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid" className="field-error">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="field-group" controlId="formSessionType">
                        <Form.Label className="field-label">Session Type *</Form.Label>
                        <div className="session-pills">
                          {SESSION_TYPES.map(t => (
                            <button
                              key={t}
                              type="button"
                              className={`session-pill${formData.sessionType===t?' selected':''}`}
                              onClick={() => handleChange('sessionType', t)}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.sessionType && <Form.Text className="field-error d-block">{errors.sessionType}</Form.Text>}
                      </Form.Group>

                      <Row className="g-0">
                        <Col xs={12} md={6} className="pe-md-4">
                          <Form.Group className="field-group" controlId="formDate">
                            <Form.Label className={`field-label${focused==='date'?' active':''}`}>Desired Date</Form.Label>
                            <Form.Control
                              type="date"
                              className="field-input"
                              value={formData.date}
                              onFocus={() => setFocused('date')}
                              onBlur={() => setFocused(null)}
                              onChange={e => handleChange('date', e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6} className="ps-md-4">
                          <Form.Group className="field-group" controlId="formLocation">
                            <Form.Label className={`field-label${focused==='location'?' active':''}`}>Location / City</Form.Label>
                            <Form.Control
                              className="field-input"
                              value={formData.location}
                              placeholder="Chicago, IL"
                              onFocus={() => setFocused('location')}
                              onBlur={() => setFocused(null)}
                              onChange={e => handleChange('location', e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="field-group" controlId="formMessage">
                        <Form.Label className={`field-label${focused==='message'?' active':''}`}>Tell Us About Your Vision *</Form.Label>
                        <Form.Control
                          as="textarea"
                          className={`field-input${errors.message?' error':''}`}
                          value={formData.message}
                          placeholder="Describe the mood, setting, or story you'd love to capture…"
                          isInvalid={!!errors.message}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          onChange={e => handleChange('message', e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid" className="field-error">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button type="submit" className="submit-btn">
                        Send Inquiry
                      </Button>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}
