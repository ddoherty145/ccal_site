import { useEffect, useMemo } from 'react'

function Updates() {
  // ============================================
  // ADD NEW ARTICLES HERE - Just add a new object to this array!
  // ============================================
  const articles = [
    // Example article structure - copy and modify this for new articles
    // {
    //   id: 1,
    //   title: 'Example Article Title',
    //   date: '2024-12-15', // Format: YYYY-MM-DD (for proper sorting)
    //   displayDate: 'December 15, 2024', // How you want it displayed
    //   category: 'News', // Options: News, Announcement, Event, Publication, Partnership
    //   excerpt: 'A brief description or excerpt of the article content...',
    //   image: 'https://images.unsplash.com/photo-...', // Optional: image URL
    //   link: 'https://...', // Optional: link to full article (if external)
    //   content: 'Full article content can go here if you want to display it on the page...' // Optional
    // },
  ]

  // Sort articles by date (newest first)
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  }, [articles])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Ensure content is visible immediately
    const updatesSection = document.querySelector('.updates-section')
    if (updatesSection) {
      updatesSection.style.opacity = '1'
      updatesSection.style.visibility = 'visible'
    }
  }, [])

  const formatCategory = (category) => {
    const categoryColors = {
      'News': '#4A90E2',
      'Announcement': '#D4AF37',
      'Event': '#E74C3C',
      'Publication': '#27AE60',
      'Partnership': '#9B59B6'
    }
    return categoryColors[category] || '#6C757D'
  }

  return (
    <section className="updates-section">
      <div className="updates-hero">
        <div className="updates-hero-content">
          <h1 className="updates-title">Latest Updates</h1>
          <p className="updates-intro">
            Stay informed with the latest news, announcements, and developments from Columbus Capital Advisors Limited.
          </p>
        </div>
      </div>

      <div className="updates-container">
        {sortedArticles.length === 0 ? (
          <div className="updates-empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginBottom: '1.5rem', opacity: 0.5 }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <p className="updates-placeholder">
              Updates and announcements will be posted here. Check back soon!
            </p>
          </div>
        ) : (
          <div className="updates-articles">
            <div className="articles-grid">
              {sortedArticles.map((article) => (
                <article key={article.id} className="article-card">
                  {article.image && (
                    <div className="article-image">
                      <img src={article.image} alt={article.title} />
                      <div 
                        className="article-type-badge" 
                        style={{ backgroundColor: formatCategory(article.category) }}
                      >
                        {article.category}
                      </div>
                    </div>
                  )}
                  <div className="article-content">
                    {!article.image && (
                      <div 
                        className="article-type-badge-inline" 
                        style={{ backgroundColor: formatCategory(article.category) }}
                      >
                        {article.category}
                      </div>
                    )}
                    <div className="article-meta">
                      <span className="article-date">{article.displayDate}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    {article.link && (
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="article-read-more"
                      >
                        Read More →
                      </a>
                    )}
                    {article.content && !article.link && (
                      <div className="article-full-content">
                        <p>{article.content}</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Updates

