import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function BusinessConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
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
          <h1 className="business-consulting-title">Market Entry & Strategic Advisory</h1>
          <p className="business-consulting-intro">
            Columbus Capital Advisors Limited provides strategic advisory to multinational companies and investors seeking to enter and expand across Sub-Saharan Africa. We focus on enabling disciplined market entry, capital deployment, and long-term commercial positioning in frontier and emerging markets.
          </p>
          <p className="business-consulting-intro">
            Our approach combines rigorous market intelligence with deep local networks to help clients navigate regulatory environments, assess risk, and identify credible operating and investment partners. We support clients across the full lifecycle of market entry—from strategy and feasibility to execution and partnership structuring.
          </p>
          <p className="business-consulting-intro">
            We work closely with corporate, institutional investors, and development partners to align commercial objectives with local market realities, ensuring scalable and sustainable outcomes.
          </p>
        </div>

        <div className="core-capabilities">
          <h2 className="section-title">Core Capabilities</h2>
          <div className="business-consulting-content">
            <div className="consulting-service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="service-name">Market Entry Strategy & Execution</h3>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="service-name">Investment & Partnership Structuring</h3>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="service-name">Regulatory & Risk Advisory</h3>
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
              <h3 className="service-name">Commercial Due Diligence</h3>
            </div>

            <div className="consulting-service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="service-name">Local Partner Identification</h3>
            </div>
          </div>
        </div>

        <div className="closing-statement">
          <p>
            Columbus Capital Advisors serves as a trusted partner for organizations seeking to establish a durable presence in Africa's high-growth markets—bridging global expertise with on-the-ground execution.
          </p>
        </div>

        <div className="consulting-cta-section">
          <h2 className="cta-title">Ready to Expand Into Africa?</h2>
          <p className="cta-description">
            Let us help you navigate the complexities of African markets and build a successful presence in the region.
          </p>
          <Link to="/contact" className="cta-button primary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}

export default BusinessConsulting
