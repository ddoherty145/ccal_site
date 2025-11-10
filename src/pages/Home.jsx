import { useEffect, useState } from 'react'

function Home() {
  const [showScrollText, setShowScrollText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollText(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-headline">
          Empowering Investment in Africa's Frontier and Emerging Markets
        </h1>
        <p className="hero-subtext">
          Columbus Capital Advisors Limited is a Pan-African asset management and private
          equity firm that connects global capital to Africa's most promising investment opportunities
          through deep research, local expertise, and strategic partnerships.
        </p>
        <div className="hero-cta">
          <button className="cta-button primary">Explore Our Services</button>
          <button className="cta-button secondary">Partner With Us</button>
        </div>
        <div className={`scroll-animation ${showScrollText ? 'visible' : ''}`}>
          <span className="scroll-text">Invest. Collaborate. Grow.</span>
        </div>
      </div>
    </section>
  )
}

export default Home

