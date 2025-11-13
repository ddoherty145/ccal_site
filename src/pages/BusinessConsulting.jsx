import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BusinessConsulting() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const consultingSection = document.querySelector('.business-consulting-section')
    if (consultingSection) {
      consultingSection.style.opacity = '1'
      consultingSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="business-consulting-section">
      <div className="business-consulting-container">
        <div className="business-consulting-hero">
          <h1 className="business-consulting-title">Business & Market Entry Consulting</h1>
          <p className="business-consulting-intro">
            We help international companies successfully enter African markets through tailored advisory
            and implementation support.
          </p>
        </div>

        <div className="business-consulting-content">
          <div className="consulting-service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h2 className="service-name">Market Assessment</h2>
            <p className="service-description">
              Scope the market and assess opportunities.
            </p>
          </div>

          <div className="consulting-service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h2 className="service-name">Partner Identification</h2>
            <p className="service-description">
              Assess and identify prospective partners for joint ventures, government
              collaboration, and private sector engagement.
            </p>
          </div>

          <div className="consulting-service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h2 className="service-name">Structure & Compliance</h2>
            <p className="service-description">
              Provide guidance on structure, compliance, and risk.
            </p>
          </div>

          <div className="consulting-service-card">
            <div className="service-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="2" x2="12" y2="22"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h2 className="service-name">Facilitation & Coordination</h2>
            <p className="service-description">
              Facilitate introductions and coordinate early-stage discussions.
            </p>
          </div>
        </div>

        <div className="consulting-cta-section">
          <h2 className="cta-title">Ready to Expand Into Africa?</h2>
          <p className="cta-description">
            Let us help you navigate the complexities of African markets and build a successful
            presence in the region.
          </p>
          <Link to="/contact" className="cta-button primary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}

export default BusinessConsulting

