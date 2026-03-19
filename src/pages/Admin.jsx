import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../firebase/AuthContext'
import { 
  collection, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query 
} from 'firebase/firestore'
import { db } from '../firebase/config'

function Admin() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles() {
    try {
      const articlesQuery = query(
        collection(db, 'articles'), 
        orderBy('date', 'desc')
      )
      const querySnapshot = await getDocs(articlesQuery)
      const articlesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setArticles(articlesData)
    } catch (error) {
      console.error('Error fetching articles:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id) {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteDoc(doc(db, 'articles', id))
        setArticles(articles.filter(article => article.id !== id))
        alert('Article deleted successfully')
      } catch (error) {
        console.error('Error deleting article:', error)
        alert('Failed to delete article')
      }
    }
  }

  async function handleLogout() {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <section className="admin-section">
      <div className="admin-container">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Article Management</h1>
            <p className="admin-subtitle">Logged in as: {currentUser?.email}</p>
          </div>
          <div className="admin-header-actions">
            <button 
              onClick={() => navigate('/admin/new')}
              className="admin-button primary"
            >
              + New Article
            </button>
            <button 
              onClick={handleLogout}
              className="admin-button secondary"
            >
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="admin-loading">Loading articles...</div>
        ) : articles.length === 0 ? (
          <div className="admin-empty">
            <p>No articles yet. Create your first article!</p>
            <button 
              onClick={() => navigate('/admin/new')}
              className="admin-button primary"
            >
              Create Article
            </button>
          </div>
        ) : (
          <div className="admin-articles">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td className="admin-table-title">{article.title}</td>
                    <td>
                      <span className="admin-badge">{article.category}</span>
                    </td>
                    <td>{article.displayDate}</td>
                    <td className="admin-table-actions">
                      <button
                        onClick={() => navigate(`/admin/edit/${article.id}`)}
                        className="admin-action-button edit"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="admin-action-button delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default Admin
