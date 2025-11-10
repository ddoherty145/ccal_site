import { useEffect } from 'react'

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
          <h1 className="services-title">Our Solutions and Expertise</h1>
          <p className="services-intro">
            We provide a full spectrum of investment, advisory, and consulting services designed to connect
            international capital with African opportunities.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {/* Service A: Asset Management & Private Equity */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="2" x2="12" y2="22"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h2 className="service-name">Asset Management & Private Equity</h2>
          <p className="service-description">
            We manage and structure investment opportunities across Africa's high-growth sectors,
            including infrastructure, energy, real estate, and technology.
          </p>
          <div className="service-focus">
            <strong>Focus:</strong> deal origination, due diligence, portfolio management, and exit strategy.
          </div>
          <button className="service-cta">View Our Investment Portfolio →</button>
        </div>

        {/* Service B: Foreign Investment Representation */}
        <div className="service-card service-dark">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h2 className="service-name">Foreign Investment Representation</h2>
          <p className="service-description">
            We serve as a bridge for global investors — funds, DFIs, and family offices — seeking credible
            co-investment opportunities in Africa.
          </p>
          <p className="service-description">
            Our local insight ensures each deal aligns with both investor goals and sustainable development
            outcomes.
          </p>
          <button className="service-cta">Discover Partnership Opportunities →</button>
        </div>

        {/* Service C: Business & Market Entry Consulting */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h2 className="service-name">Business & Market Entry Consulting</h2>
          <p className="service-description">
            We help international companies successfully enter African markets through tailored advisory
            and implementation support.
          </p>
          <div className="service-focus">
            <strong>Areas of Focus:</strong> market intelligence, regulatory navigation, and business development strategy.
          </div>
          <button className="service-cta">Expand Into Africa →</button>
        </div>

        {/* Service D: Technology Consulting */}
        <div className="service-card service-dark">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <h2 className="service-name">Technology Consulting</h2>
          <p className="service-description">
            From digital transformation to system integration, our technology consulting unit delivers
            customized solutions that enhance efficiency and competitiveness.
          </p>
          <div className="service-services">
            <strong>Services Include:</strong>
            <ul className="service-list">
              <li>IT design & system development</li>
              <li>Digital strategy & transformation</li>
              <li>Application development & data analytics</li>
            </ul>
          </div>
        </div>

        {/* Service E: Research & Insights */}
        <div className="service-card service-light">
          <div className="service-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <h2 className="service-name">Research & Insights</h2>
          <p className="service-description">
            Our proprietary research provides investors with the intelligence to make confident, data-driven
            decisions in Africa's dynamic markets.
          </p>
          <div className="service-deliverables">
            <strong>Deliverables:</strong>
            <ul className="service-list">
              <li>Country & sector analysis</li>
              <li>Risk & opportunity reports</li>
              <li>Investment climate updates</li>
            </ul>
          </div>
          <button className="service-cta">Access Research Reports →</button>
        </div>
      </div>
    </section>
  )
}

export default Services

