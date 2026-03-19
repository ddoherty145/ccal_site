import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
          Connecting Global Capital with Africa's Next Generation of Growth
        </h1>
        <p className="hero-subtext">
          Columbus Capital Advisors Limited is an Africa-focused investment advisory and capital strategy firm facilitating cross-border investment into Sub-Saharan Africa's frontier and emerging markets.
        </p>
        <p className="hero-subtext">
          We advise institutional investors, family offices, development finance institutions, and multinational companies seeking credible investment opportunities and strategic partnerships across the continent. Our work spans deal origination, investment structuring, and market entry advisory across high-growth sectors including infrastructure, energy, technology, real estate, and agriculture.
        </p>
        <p className="hero-subtext">
          Combining rigorous market intelligence with deep local networks, Columbus Capital Advisors helps global investors navigate complex regulatory environments, identify credible partners, and deploy capital responsibly.
        </p>
        <p className="hero-subtext">
          The firm also works with governments and private operators to structure investment partnerships that enable sustainable foreign direct investment and long-term economic development.
        </p>
        <p className="hero-subtext">
          Columbus Capital Advisors serves as a trusted bridge between global capital and Africa's evolving investment landscape.
        </p>
        <div className="hero-cta">
          <Link to="/services" className="cta-button primary">Explore Our Services</Link>
          <Link to="/business-consulting" className="cta-button secondary">Partner With Us</Link>
        </div>
        <div className={`scroll-animation ${showScrollText ? 'visible' : ''}`}>
          <span className="scroll-text">Invest. Collaborate. Grow.</span>
        </div>
      </div>
    </section>
  )
}

export default Home

