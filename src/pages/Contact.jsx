import { useEffect, useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const contactSection = document.querySelector('.contact-section')
    if (contactSection) {
      contactSection.style.opacity = '1'
      contactSection.style.visibility = 'visible'
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact-section">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-title">Partner With Us</h1>
          <p className="contact-intro">
            Let's build a sustainable investment future for Africa together.
          </p>
          <p className="contact-description">
            Whether you are an investor, family office, or company exploring opportunities in Sub-Saharan
            Africa, Columbus Capital Advisors is your trusted partner on the ground.
          </p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <h2 className="contact-details-title">Get In Touch</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <h3>Head Office</h3>
                <p>Lagos | London | California</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <h3>Email</h3>
                <a href="mailto:info@columbuscapitalafrica.com">info@columbuscapitalafrica.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="contact-item-content">
                <h3>Website</h3>
                <a href="https://www.columbuscapitalafrica.com" target="_blank" rel="noopener noreferrer">
                  www.columbuscapitalafrica.com
                </a>
              </div>
            </div>

            <div className="contact-cta-buttons">
              <button className="contact-cta primary">Schedule a Consultation</button>
              <button className="contact-cta secondary">Request More Information</button>
            </div>
          </div>

          <div className="contact-map">
            <h2 className="map-title">Our Presence</h2>
            <div className="map-container">
              <div className="africa-map">
                <svg viewBox="0 0 1000 1200" className="africa-map-svg" preserveAspectRatio="xMidYMid meet">
                  {/* Simplified Africa continent outline */}
                  <path 
                    d="M150,1100 L200,1050 L250,1000 L300,950 L350,900 L400,850 L450,800 L500,750 L550,700 L600,650 L650,600 L700,550 L750,500 L800,450 L850,400 L900,350 L950,300 L1000,250 L1000,350 L950,450 L900,550 L850,650 L800,750 L750,850 L700,950 L650,1050 L600,1150 L550,1200 L500,1200 L450,1200 L400,1200 L350,1200 L300,1200 L250,1200 L200,1200 L150,1200 Z" 
                    fill="rgba(10, 25, 41, 0.08)" 
                    stroke="var(--navy-blue)" 
                    strokeWidth="3"
                  />
                  {/* West Africa region highlight - more accurate positioning */}
                  <path 
                    d="M200,900 L250,850 L300,800 L350,750 L400,700 L450,650 L500,600 L550,550 L600,500 L650,550 L600,650 L550,750 L500,850 L450,950 L400,1050 L350,1100 L300,1150 L250,1200 L200,1150 L150,1100 Z" 
                    fill="rgba(212, 175, 55, 0.25)" 
                    stroke="var(--gold)" 
                    strokeWidth="4"
                    strokeDasharray="5,5"
                  />
                  {/* Office location markers */}
                  <g className="office-markers">
                    <circle cx="400" cy="850" r="10" fill="var(--gold)" stroke="var(--white)" strokeWidth="2" className="office-marker" data-location="Lagos">
                      <title>Lagos Office</title>
                    </circle>
                    <text x="400" y="870" textAnchor="middle" fontSize="12" fill="var(--navy-blue)" fontFamily="Lato" fontWeight="600">Lagos</text>
                    
                    <circle cx="500" cy="200" r="10" fill="var(--gold)" stroke="var(--white)" strokeWidth="2" className="office-marker" data-location="London">
                      <title>London Office</title>
                    </circle>
                    <text x="500" y="220" textAnchor="middle" fontSize="12" fill="var(--navy-blue)" fontFamily="Lato" fontWeight="600">London</text>
                    
                    <circle cx="100" cy="300" r="10" fill="var(--gold)" stroke="var(--white)" strokeWidth="2" className="office-marker" data-location="California">
                      <title>California Office</title>
                    </circle>
                    <text x="100" y="320" textAnchor="middle" fontSize="12" fill="var(--navy-blue)" fontFamily="Lato" fontWeight="600">California</text>
                  </g>
                </svg>
              </div>
              <div className="map-legend">
                <div className="legend-item">
                  <div className="legend-marker gold"></div>
                  <span>Office Locations</span>
                </div>
                <div className="legend-item">
                  <div className="legend-marker region"></div>
                  <span>West Africa Focus</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="form-title">Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your investment interests or how we can help..."
              ></textarea>
            </div>

            <button type="submit" className="form-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

