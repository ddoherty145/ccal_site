import { useEffect } from 'react'

function WhyAfrica() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const whyAfricaSection = document.querySelector('.why-africa-section')
    if (whyAfricaSection) {
      whyAfricaSection.style.opacity = '1'
      whyAfricaSection.style.visibility = 'visible'
    }
  }, [])

  return (
    <section className="why-africa-section">
      <div className="why-africa-container">
        <h1 className="why-africa-title">Why Africa</h1>
        
        <div className="why-africa-content">
          <p className="why-africa-intro">
            Africa represents one of the most compelling long-term investment opportunities globally.
          </p>
          
          <div className="key-drivers">
            <h2 className="drivers-title">Key drivers include:</h2>
            <ul className="drivers-list">
              <li>Population expected to exceed 2 billion by 2050</li>
              <li>Rapid urbanization and infrastructure demand</li>
              <li>Technology adoption leapfrogging legacy systems</li>
              <li>Increasing regional trade through AfCFTA</li>
            </ul>
          </div>
          
          <div className="why-africa-conclusion">
            <p>
              Columbus Capital Advisors helps investors navigate these opportunities with local intelligence and disciplined capital strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAfrica
