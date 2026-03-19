import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SelectedEngagements() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const section = document.querySelector('.selected-engagements-section')
    if (section) {
      section.style.opacity = '1'
      section.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="selected-engagements-section">
      <div className="selected-engagements-container">
        <div className="selected-engagements-hero">
          <h1 className="selected-engagements-title">Selected Engagements</h1>
          <p className="selected-engagements-intro">
            Columbus Capital Advisors Limited is actively engaged in structuring and facilitating investment opportunities across Sub-Saharan Africa, working with governments, investors, and private sector partners.
          </p>
        </div>

        <div className="engagement-list">
          <div className="engagement-item">
            <h3 className="engagement-title">Public-Private Partnership Advisory – Nigeria</h3>
            <p className="engagement-description">
              Advising on the structuring of an investment partnership with a state government to support industrial development, including manufacturing and healthcare-related infrastructure, with aligned long-term offtake arrangements.
            </p>
          </div>

          <div className="engagement-item">
            <h3 className="engagement-title">Biotechnology Manufacturing Initiative – West Africa</h3>
            <p className="engagement-description">
              Supporting the development and capital strategy for a U.S.-based biotechnology company establishing local manufacturing capacity, including partnership structuring and investment positioning.
            </p>
          </div>

          <div className="engagement-item">
            <h3 className="engagement-title">Cross-Border Investment Partnerships – Asia–Africa Corridor</h3>
            <p className="engagement-description">
              Facilitating strategic partnerships between Asian industrial groups and African stakeholders across sectors including agriculture, light manufacturing, and supply chain development.
            </p>
          </div>

          <div className="engagement-item">
            <h3 className="engagement-title">Infrastructure & Real Estate Investment Strategy – Nigeria</h3>
            <p className="engagement-description">
              Advising on capital structuring and investor engagement for mixed-use and infrastructure-related development projects, including alignment with international financing partners.
            </p>
          </div>

          <div className="engagement-item">
            <h3 className="engagement-title">Digital Economy & Cybersecurity Platform – Sub-Saharan Africa</h3>
            <p className="engagement-description">
              Supporting the development of a regional technology and cybersecurity initiative through international partnerships and technology transfer frameworks.
            </p>
          </div>
        </div>

        <div className="engagements-cta-section">
          <h2 className="cta-title">Interested in Working With Us?</h2>
          <p className="cta-description">
            Learn more about how we can support your investment or market entry strategy.
          </p>
          <Link to="/contact" className="cta-button primary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}

export default SelectedEngagements
