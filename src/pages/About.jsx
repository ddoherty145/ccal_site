import { useEffect } from 'react'

function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const aboutSection = document.querySelector('.about-section')
    if (aboutSection) {
      aboutSection.style.opacity = '1'
      aboutSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Business meeting in African cityscape" 
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-intro">
            Columbus Capital Advisors Limited (CCAL) is an independent investment and advisory firm
            focused on Sub-Saharan Africa. We specialize in helping institutional investors, family offices,
            and corporations navigate Africa's frontier and emerging markets with confidence.
          </p>
          
          <div className="mission-statement">
            <h3 className="mission-title">Mission Statement</h3>
            <p className="mission-text">
              To deliver world-class research, investment management, and consulting solutions that drive
              sustainable growth and cross-border capital flows into Africa.
            </p>
          </div>
          
          <div className="core-strengths">
            <h3 className="strengths-title">Our Core Strengths</h3>
            <ul className="strengths-list">
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>Deep local knowledge and networks across West Africa.</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <span>Proprietary market intelligence and research.</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>Trusted relationships with DFIs, family offices, and private investors.</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                <span>End-to-end investment facilitation and advisory.</span>
              </li>
            </ul>
          </div>
          
          <div className="about-cta">
            <button className="cta-button primary">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

