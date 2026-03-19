import { useEffect } from 'react'

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const projectsSection = document.querySelector('.projects-section')
    if (projectsSection) {
      projectsSection.style.opacity = '1'
      projectsSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-main-title">Current Projects & Engagements</h1>
        
        <div className="projects-content">
          <div className="current-projects">
            <h2 className="projects-subtitle">Current Projects</h2>
            <ul className="projects-list">
              <li>Ondo State investment summit</li>
              <li>Biotech manufacturing project</li>
              <li>China–Africa supply chain deals</li>
              <li>Agriculture investment</li>
              <li>Infrastructure and real estate</li>
            </ul>
          </div>

          <div className="current-engagements">
            <h2 className="projects-subtitle">Current Engagements</h2>
            <p className="engagements-intro">
              Columbus Capital Advisors is actively working with governments, investors, and companies to structure investments across Africa.
            </p>
            
            <div className="engagements-examples">
              <h3 className="examples-title">Examples include:</h3>
              <ul className="engagements-list">
                <li>Advising on investment partnerships with Ondo State, Nigeria</li>
                <li>Supporting cross-border investment opportunities in biotechnology manufacturing</li>
                <li>Facilitating agricultural and supply chain investment partnerships between Asia and Africa</li>
                <li>Structuring capital strategies for infrastructure and real estate development projects</li>
                <li>Working on developing a regional cybersecurity sovereignty and infrastructure platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
