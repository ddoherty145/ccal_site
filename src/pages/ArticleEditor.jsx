import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  updateDoc,
  serverTimestamp 
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/config'

function ArticleEditor() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    displayDate: '',
    category: 'News',
    excerpt: '',
    content: '',
    imageUrl: '',
    additionalImageUrls: []
  })

  const categories = ['News', 'Announcement', 'Event', 'Publication', 'Partnership']

  useEffect(() => {
    if (isEditMode) {
      fetchArticle()
    }
  }, [id])

  async function fetchArticle() {
    try {
      const docRef = doc(db, 'articles', id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        setFormData({
          title: data.title || '',
          date: data.date || '',
          displayDate: data.displayDate || '',
          category: data.category || 'News',
          excerpt: data.excerpt || '',
          content: data.content || '',
          imageUrl: data.imageUrl || '',
          additionalImageUrls: data.additionalImageUrls || []
        })
      } else {
        alert('Article not found')
        navigate('/admin')
      }
    } catch (error) {
      console.error('Error fetching article:', error)
      alert('Failed to load article')
    }
  }

  async function handleImageUpload(file, isMainImage = true) {
    if (!file) return null

    try {
      setUploading(true)
      const timestamp = Date.now()
      const storageRef = ref(storage, `articles/${timestamp}_${file.name}`)
      await uploadBytes(storageRef, file)
      const downloadURL = await getDownloadURL(storageRef)
      return downloadURL
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
      return null
    } finally {
      setUploading(false)
    }
  }

  async function handleMainImageChange(e) {
    const file = e.target.files[0]
    if (file) {
      const url = await handleImageUpload(file, true)
      if (url) {
        setFormData({ ...formData, imageUrl: url })
      }
    }
  }

  async function handleAdditionalImagesChange(e) {
    const files = Array.from(e.target.files)
    const uploadedUrls = []

    for (const file of files) {
      const url = await handleImageUpload(file, false)
      if (url) uploadedUrls.push(url)
    }

    setFormData({
      ...formData,
      additionalImageUrls: [...formData.additionalImageUrls, ...uploadedUrls]
    })
  }

  function removeAdditionalImage(index) {
    const newUrls = formData.additionalImageUrls.filter((_, i) => i !== index)
    setFormData({ ...formData, additionalImageUrls: newUrls })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    try {
      const articleData = {
        title: formData.title,
        date: formData.date,
        displayDate: formData.displayDate,
        category: formData.category,
        excerpt: formData.excerpt,
        content: formData.content,
        imageUrl: formData.imageUrl,
        additionalImageUrls: formData.additionalImageUrls,
        updatedAt: serverTimestamp()
      }

      if (isEditMode) {
        await updateDoc(doc(db, 'articles', id), articleData)
        alert('Article updated successfully!')
      } else {
        articleData.createdAt = serverTimestamp()
        await addDoc(collection(db, 'articles'), articleData)
        alert('Article created successfully!')
      }

      navigate('/admin')
    } catch (error) {
      console.error('Error saving article:', error)
      alert('Failed to save article')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="editor-section">
      <div className="editor-container">
        <div className="editor-header">
          <h1 className="editor-title">
            {isEditMode ? 'Edit Article' : 'Create New Article'}
          </h1>
          <button 
            onClick={() => navigate('/admin')}
            className="editor-back-button"
          >
            ← Back to Dashboard
          </button>
        </div>

        <form onSubmit={handleSubmit} className="editor-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Article title"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date (YYYY-MM-DD) *</label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="displayDate">Display Date *</label>
              <input
                id="displayDate"
                name="displayDate"
                type="text"
                value={formData.displayDate}
                onChange={handleChange}
                required
                placeholder="e.g., March 2026"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt *</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows="3"
              placeholder="Brief description for the article card"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Full Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="10"
              placeholder="Full article content (optional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mainImage">Main Image</label>
            {formData.imageUrl && (
              <div className="image-preview">
                <img src={formData.imageUrl} alt="Main preview" />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, imageUrl: '' })}
                  className="remove-image-button"
                >
                  Remove
                </button>
              </div>
            )}
            <input
              id="mainImage"
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              disabled={uploading}
            />
            {uploading && <p className="upload-status">Uploading...</p>}
          </div>

          <div className="form-group">
            <label htmlFor="additionalImages">Additional Images</label>
            {formData.additionalImageUrls.length > 0 && (
              <div className="additional-images-preview">
                {formData.additionalImageUrls.map((url, index) => (
                  <div key={index} className="image-preview-small">
                    <img src={url} alt={`Additional ${index + 1}`} />
                    <button
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="remove-image-button-small"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              id="additionalImages"
              type="file"
              accept="image/*"
              multiple
              onChange={handleAdditionalImagesChange}
              disabled={uploading}
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="form-button cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="form-button submit"
              disabled={loading || uploading}
            >
              {loading ? 'Saving...' : isEditMode ? 'Update Article' : 'Create Article'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ArticleEditor
