import { useState, useEffect } from 'react'

export const usePageStatus = (shouldSaveCategory = true) => {
  const [activeCategory, setActiveCategory] = useState(
      localStorage.getItem('selectedCategory') || 'spells'
  )
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (shouldSaveCategory) {
      localStorage.setItem('selectedCategory', activeCategory)
    }
  }, [activeCategory, shouldSaveCategory])

  const wrapAsync = async (fn) => {
    try {
      setError(null)
      setLoading(true)
      await fn()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    activeCategory,
    setActiveCategory,
    error,
    setError,
    loading,
    setLoading,
    wrapAsync
  }
}