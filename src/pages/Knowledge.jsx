import { useEffect } from 'react'

function Knowledge() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const knowledgeSection = document.querySelector('.knowledge-section')
    if (knowledgeSection) {
      knowledgeSection.style.opacity = '1'
      knowledgeSection.style.visibility = 'visible'
    }
  }, [])

  const articles = [
    {
      id: 1,
      type: 'Infrastructure Investment',
      title: 'Investing in Nigeria\'s Infrastructure Gap',
      excerpt: 'An analysis of Nigeria\'s infrastructure deficit and the investment opportunities it presents for foreign capital and development finance institutions.',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 2026'
    },
    {
      id: 2,
      type: 'Sector Spotlight',
      title: 'Africa\'s Biotech Manufacturing Opportunity',
      excerpt: 'Exploring the emerging biotechnology and pharmaceutical manufacturing sector across Africa and the strategic importance of local production capacity.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 2026'
    },
    {
      id: 3,
      type: 'Capital Flows',
      title: 'Diaspora Capital and the Future of African Development',
      excerpt: 'How diaspora investment and remittances are shaping Africa\'s economic future and creating new pathways for credible capital deployment.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 2026'
    },
    {
      id: 4,
      type: 'Development Finance',
      title: 'The Role of DFIs in African Private Investment',
      excerpt: 'Understanding how Development Finance Institutions are catalyzing private sector investment and de-risking capital deployment across the continent.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 2026'
    },
    {
      id: 5,
      type: 'Quarterly Market Outlook',
      title: 'Q1 2026 Africa Investment Outlook',
      excerpt: 'An in-depth analysis of investment opportunities and market trends across Sub-Saharan Africa for the first quarter of 2026.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'January 2026'
    },
    {
      id: 6,
      type: 'Sector Spotlight',
      title: 'Energy Sector Transformation in West Africa',
      excerpt: 'Exploring the rapid growth of renewable energy infrastructure and investment opportunities in Nigeria, Ghana, and Senegal.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'December 2025'
    }
  ]

  return (
    <section className="knowledge-section">
      <div className="knowledge-hero">
        <div className="knowledge-hero-content">
          <h1 className="knowledge-title">Market Intelligence You Can Trust</h1>
          <p className="knowledge-intro">
            Stay informed with our latest research, investment insights, and commentary on Africa's
            evolving economic landscape.
          </p>
          <button className="knowledge-cta-primary">Read the Latest Insights →</button>
        </div>
      </div>

      <div className="knowledge-content">
        <div className="content-types">
          <h2 className="content-types-title">Content Types</h2>
          <div className="content-types-grid">
            <div className="content-type-card">
              <div className="content-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>Quarterly Market Outlook</h3>
            </div>
            <div className="content-type-card">
              <div className="content-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="2" x2="12" y2="6"/>
                  <line x1="12" y1="18" x2="12" y2="22"/>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                </svg>
              </div>
              <h3>Sector Spotlights</h3>
              <p>Energy, Infrastructure, Fintech, etc.</p>
            </div>
            <div className="content-type-card">
              <div className="content-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Country Investment Guides</h3>
            </div>
            <div className="content-type-card">
              <div className="content-type-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>Case Studies and Reports</h3>
            </div>
          </div>
        </div>

        <div className="articles-section">
          <h2 className="articles-title">Latest Insights</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-type-badge">{article.type}</div>
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledge

