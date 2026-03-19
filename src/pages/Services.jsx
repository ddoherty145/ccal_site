import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const servicesSection = document.querySelector('.services-section')
    if (servicesSection) {
      servicesSection.style.opacity = '1'
      servicesSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="services-section">
      <div className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-title">What We Do</h1>
        </div>
      </div>

      <div className="services-grid">
        {/* Service 1: Investment Advisory */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="22"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h2 className="service-name">Investment Advisory</h2>
          <p className="service-description">
            Origination and structuring of private investment opportunities across infrastructure, energy, technology, real estate, and agriculture.
          </p>
        </div>

        {/* Service 2: Capital Raising & Strategic Partnerships */}
        <div className="service-card service-dark">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="service-name">Capital Raising & Strategic Partnerships</h2>
          <p className="service-description">
            We represent African investment opportunities to institutional investors, family offices, and development finance institutions.
          </p>
        </div>

        {/* Service 3: Market Entry Strategy */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2 className="service-name">Market Entry Strategy</h2>
          <p className="service-description">
            Advising international companies expanding into African markets.
          </p>
          <Link to="/business-consulting" className="service-cta">Learn More →</Link>
        </div>

        {/* Service 4: Research & Intelligence */}
        <div className="service-card service-dark">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h2 className="service-name">Research & Intelligence</h2>
          <p className="service-description">
            Frontier market insights and sector analysis supporting investment decisions.
          </p>
        </div>

        {/* Service 5: Digital Economy & Technology Investment Advisory */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h2 className="service-name">Digital Economy & Technology Investment Advisory</h2>
          <p className="service-description">
            Supporting investment opportunities in Africa's digital economy including:
          </p>
          <ul className="service-list">
            <li>Cybersecurity infrastructure</li>
            <li>Fintech ecosystems</li>
            <li>Digital infrastructure</li>
            <li>Technology transfer partnerships</li>
          </ul>
          <Link to="/digital-economy" className="service-cta">Learn More →</Link>
        </div>

        {/* Service 6: Selected Engagements */}
        <div className="service-card service-dark">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h2 className="service-name">Selected Engagements</h2>
          <p className="service-description">
            Active investment structuring and facilitation projects across Sub-Saharan Africa with governments, investors, and private sector partners.
          </p>
          <Link to="/selected-engagements" className="service-cta">View Engagements →</Link>
        </div>
      </div>

      {/* Cross-border Investment Architect */}
      <div className="architect-section">
        <div className="architect-container">
          <h2 className="architect-title">A cross-border investment architect.</h2>
          <p className="architect-subtitle">You structure deals between:</p>
          <div className="architect-grid">
            <div className="architect-item">Investors</div>
            <div className="architect-item">Governments</div>
            <div className="architect-item">Operators</div>
            <div className="architect-item">Global companies</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-main-title">Ready to Get Started?</h2>
          <div className="cta-grid">
            <div className="cta-card">
              <h3 className="cta-card-title">For Investors</h3>
              <p className="cta-card-text">Explore investment opportunities in Africa.</p>
              <Link to="/contact" className="cta-card-button">Get in Touch</Link>
            </div>
            <div className="cta-card">
              <h3 className="cta-card-title">For Companies</h3>
              <p className="cta-card-text">Discuss your market entry strategy.</p>
              <Link to="/contact" className="cta-card-button">Contact Us</Link>
            </div>
            <div className="cta-card">
              <h3 className="cta-card-title">For Governments</h3>
              <p className="cta-card-text">Structure international investment partnerships.</p>
              <Link to="/contact" className="cta-card-button">Partner With Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

