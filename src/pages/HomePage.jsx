import React, { useState, useEffect } from 'react'
import { getInventory } from '../api/dataApi'
import InventoryList from '../components/InventoryList'

const HomePage = ({inventory, refresh}) => {
  const [activeCategory, setActiveCategory] = useState(
    localStorage.getItem('selectedCategory') || 'spells'
  )
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      setError(null)
      setLoading(true)
      await refresh()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
    localStorage.setItem('selectedCategory', activeCategory)
  }, [activeCategory])

  if (error) {
    return (
      <div className='error'>
        <h2>Error loading items</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className='loader'>Loading items...</div>
    )
  }

  const backpack = inventory.filter(item => item.type === 'equipment')
  const spellbook = inventory.filter(item => item.type === 'spells')
  return (
    <main>
      <div>
        <button 
        className={activeCategory === 'spells' ? 'active' : ''} 
        onClick={() => setActiveCategory('spells')}>Spellbook</button>
        <button 
        className={activeCategory === 'equipment' ? 'active' : ''} 
        onClick={() => setActiveCategory('equipment')}>Backpack</button>
      </div>
      {activeCategory === 'spells' ? (
        <InventoryList items={spellbook}/>
      ) : (
        <InventoryList items={backpack}/>
      )}
    </main>
  )
}

export default HomePage
