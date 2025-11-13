import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function WorkInProgress() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const wipSection = document.querySelector('.work-in-progress-section')
    if (wipSection) {
      wipSection.style.opacity = '1'
      wipSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="work-in-progress-section">
      <div className="wip-container">
        <div className="wip-icon">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h1 className="wip-title">Work In Progress</h1>
        <p className="wip-message">
          We're currently working on this section. Please check back soon for updates.
        </p>
        <p className="wip-submessage">
          In the meantime, feel free to explore our other services or contact us for more information.
        </p>
        <div className="wip-actions">
          <Link to="/services" className="wip-button primary">Back to Services</Link>
          <Link to="/contact" className="wip-button secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default WorkInProgress

