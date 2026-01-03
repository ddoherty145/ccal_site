import { useEffect, useMemo, useState } from 'react'
// Import images
import img6224 from '../assets/images/SIP/IMG_6224.jpg'
import img6228 from '../assets/images/SIP/IMG_6228.jpg'
import img6271 from '../assets/images/SIP/IMG_6271.jpg'
import img6293 from '../assets/images/SIP/IMG_6293.jpg'
import img6355 from '../assets/images/SIP/IMG_6355.jpg'
import img6359 from '../assets/images/SIP/IMG_6359.jpg'
import img7786 from '../assets/images/SIP/IMG_7786.jpg'

function Updates() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // ============================================
  // ADD NEW ARTICLES HERE - Just add a new object to this array!
  // ============================================
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const articles = [
    // Example article structure - copy and modify this for new articles
    {
      id: 1,
      title: 'South Korea Immersion Program',
      date: '2025-11-11', // Format: YYYY-MM-DD (for proper sorting)
      displayDate: 'November 2025', // How you want it displayed
      category: 'News', // Options: News, Announcement, Event, Publication, Partnership
      excerpt: 'As part of South Korea Immersion Program',
      image: img6224, // Main image (shown in card)
      images: [img6228, img6271], // Additional images for the carousel
      content: "As part of a South Korea immersion program organized by Dominican University of California, business school students participated in a company visit to AhnLab, a leading global cybersecurity firm. Columbus Advisors Limited joined the engagement by invitation to explore potential joint venture structures supporting AhnLab's strategic expansion into Nigeria and Africa." // Optional: full article text for modal
    },
    {
      id: 2,
      title: 'South Korea Immersion Program',
      date: '2025-11-11', // Format: YYYY-MM-DD (for proper sorting)
      displayDate: 'November 2025', // How you want it displayed
      category: 'News', // Options: News, Announcement, Event, Publication, Partnership
      excerpt: 'As part of South Korea Immersion Program',
      image: img6293, // Main image (shown in card)
      images: [img6355, img6359, img7786], // Additional images for the carousel
      content: "As part of the South Korea immersion program, participants attended an academic session on doing business in South Korea at Korea University. The course provided practical insights into Korean business culture, corporate governance, negotiation norms, and market entry strategies, complementing company visits and strategic discussions with global firms. The session reinforced the program’s emphasis on experiential learning and cross-border business competence." // Optional: full article text for modal
    }
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

  // Close modal on ESC key and navigate carousel with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedArticle) return

      if (e.key === 'Escape') {
        setSelectedArticle(null)
        return
      }

      // Get all images for the selected article
      const allImages = []
      if (selectedArticle.image) allImages.push(selectedArticle.image)
      if (selectedArticle.images) allImages.push(...selectedArticle.images)

      if (allImages.length <= 1) return

      if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        e.preventDefault()
        setCurrentImageIndex((prev) => prev - 1)
      } else if (e.key === 'ArrowRight' && currentImageIndex < allImages.length - 1) {
        e.preventDefault()
        setCurrentImageIndex((prev) => prev + 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedArticle, currentImageIndex])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden'
      // Reset image index when modal opens
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedArticle])

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
                    {(article.content || (article.images && article.images.length > 0)) && (
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="article-read-more"
                      >
                        Read More →
                      </button>
                    )}
                    {article.link && !article.content && (!article.images || article.images.length === 0) && (
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="article-read-more"
                      >
                        Read More →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="article-modal-overlay"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="article-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="article-modal-close"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="article-modal-header">
              <div 
                className="article-modal-badge" 
                style={{ backgroundColor: formatCategory(selectedArticle.category) }}
              >
                {selectedArticle.category}
              </div>
              <span className="article-modal-date">{selectedArticle.displayDate}</span>
            </div>

            <h2 className="article-modal-title">{selectedArticle.title}</h2>

            {/* Image Carousel */}
            {(() => {
              const allImages = []
              if (selectedArticle.image) {
                allImages.push({ src: selectedArticle.image, alt: selectedArticle.title })
              }
              if (selectedArticle.images && selectedArticle.images.length > 0) {
                selectedArticle.images.forEach((img, index) => {
                  allImages.push({ src: img, alt: `${selectedArticle.title} - Image ${index + 1}` })
                })
              }

              if (allImages.length === 0) return null

              const totalImages = allImages.length
              const canGoPrev = currentImageIndex > 0
              const canGoNext = currentImageIndex < totalImages - 1

              const goToPrevious = () => {
                setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }

              const goToNext = () => {
                setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : prev))
              }

              const goToImage = (index) => {
                setCurrentImageIndex(index)
              }

              return (
                <div className="article-modal-carousel">
                  <div className="article-modal-carousel-container">
                    {totalImages > 1 && (
                      <button
                        className={`article-carousel-btn article-carousel-btn-prev ${!canGoPrev ? 'disabled' : ''}`}
                        onClick={goToPrevious}
                        disabled={!canGoPrev}
                        aria-label="Previous image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="15 18 9 12 15 6"/>
                        </svg>
                      </button>
                    )}

                    <div 
                      className="article-carousel-slide-container"
                      style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                      {allImages.map((img, index) => (
                        <div
                          key={index}
                          className="article-carousel-slide"
                        >
                          <img 
                            src={img.src} 
                            alt={img.alt}
                            loading="eager"
                            onError={(e) => {
                              console.error('Image failed to load:', img.src);
                              e.target.style.display = 'none';
                            }}
                            onLoad={() => {
                              console.log('Image loaded successfully:', img.src);
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {totalImages > 1 && (
                      <button
                        className={`article-carousel-btn article-carousel-btn-next ${!canGoNext ? 'disabled' : ''}`}
                        onClick={goToNext}
                        disabled={!canGoNext}
                        aria-label="Next image"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Carousel Indicators */}
                  {totalImages > 1 && (
                    <div className="article-carousel-indicators">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          className={`article-carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => goToImage(index)}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Article Content */}
            {selectedArticle.content && (
              <div className="article-modal-content">
                {selectedArticle.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* External Link */}
            {selectedArticle.link && (
              <div className="article-modal-footer">
                <a 
                  href={selectedArticle.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="article-modal-link"
                >
                  Read Full Article →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Updates

