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
            Cloumbus Capital Advisors Limited is an Africa-focused investment advisory and capital strategy firm that connects global capital with high-growth opportunities across Sub-Saharan Africa.
          </p>
          
          <div className="mission-statement">
            <h3 className="mission-title">We Help:</h3>
            <p className="mission-text">
              We help global companies enter African markets through market intellignece, regulatory
              navigation, and partnership development.
            </p>
          </div>
          
          <div className="core-strengths">
            <h3 className="strengths-title">Our Core Strengths</h3>
            <ul className="strengths-list">
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                <span>Advisory for institutional investors, family offices, DFIs, and multinationals</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                <span>Deal origination and structuring across infrastructure, energy, tech, real estate, and agriculture</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                </svg>
                <span>Market intelligence and local networks to navigate complex regulatory environments</span>
              </li>
              <li className="strength-item">
                <svg className="strength-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <span>Government and private sector partnerships for sustainable foreign direct investment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

