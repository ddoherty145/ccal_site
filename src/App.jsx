import { useEffect, useState, useRef } from 'react'
import './App-modern.css'
// To switch between layouts, change the import above to:
// import './App.css'        - Original layout
// import './App-alt.css'     - Alternative layout
// import './App-modern.css'  - Modern layout

function App() {
  const [showScrollText, setShowScrollText] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollText(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#home">Columbus Capital</a>
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Our Services</a></li>
            <li><a href="#knowledge" onClick={() => setIsMobileMenuOpen(false)}>Knowledge Hub</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      </nav>
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
      
      <footer className="footer fade-in-on-scroll" ref={footerRef}>
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#knowledge">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-media">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Disclaimer</h3>
            <p className="footer-disclaimer">
              Columbus Capital Advisors Limited is regulated and operates in accordance with applicable financial services regulations. 
              Past performance is not indicative of future results. All investments carry risk.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Columbus Capital Advisors Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App