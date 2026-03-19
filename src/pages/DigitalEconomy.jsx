import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function DigitalEconomy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const section = document.querySelector('.digital-economy-section')
    if (section) {
      section.style.opacity = '1'
      section.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="digital-economy-section">
      <div className="digital-economy-container">
        <div className="digital-economy-hero">
          <h1 className="digital-economy-title">Business & Digital Economy Advisory</h1>
          <p className="digital-economy-intro">
            Columbus Capital Advisors Limited advises global companies, investors, and institutions on structuring and executing market entry and investment strategies across Sub-Saharan Africa. We operate at the intersection of capital, strategy, and local execution—enabling clients to deploy capital, establish operations, and build scalable platforms in frontier and emerging markets.
          </p>
          <p className="digital-economy-intro">
            Our advisory services focus on identifying investable opportunities, navigating regulatory environments, and structuring partnerships with credible local operators across key sectors including infrastructure, energy, real estate, agriculture, and the digital economy.
          </p>
          <p className="digital-economy-intro">
            Within the digital economy, we support technology-driven investment and expansion initiatives, including cybersecurity infrastructure, fintech ecosystems, digital platforms, and technology transfer partnerships. Our work is aligned with the increasing demand for secure, scalable, and locally adapted technology solutions across Africa.
          </p>
          <p className="digital-economy-intro">
            We work with institutional investors, family offices, development finance institutions, multinational corporations, and governments seeking disciplined, research-driven engagement in African markets. By combining proprietary market intelligence with deep regional networks, we help mitigate risk, accelerate execution, and facilitate sustainable foreign direct investment.
          </p>
          <p className="digital-economy-intro">
            Columbus Capital Advisors serves as a trusted bridge between global capital and Africa's next generation of growth opportunities.
          </p>
        </div>

        <div className="digital-focus-areas">
          <h2 className="section-title">Digital Economy Focus Areas</h2>
          <div className="focus-areas-grid">
            <div className="focus-area-card">
              <div className="focus-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Cybersecurity Infrastructure</h3>
            </div>

            <div className="focus-area-card">
              <div className="focus-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Fintech Ecosystems</h3>
            </div>

            <div className="focus-area-card">
              <div className="focus-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Digital Infrastructure</h3>
            </div>

            <div className="focus-area-card">
              <div className="focus-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Technology Transfer Partnerships</h3>
            </div>
          </div>
        </div>

        <div className="digital-cta-section">
          <h2 className="cta-title">Explore Digital Economy Opportunities</h2>
          <p className="cta-description">
            Partner with us to navigate Africa's rapidly evolving digital landscape.
          </p>
          <Link to="/contact" className="cta-button primary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}

export default DigitalEconomy
