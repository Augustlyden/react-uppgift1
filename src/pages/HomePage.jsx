import React, { useState, useEffect } from 'react'
import { getInventory, updateItem } from '../api/dataApi'
import InventoryList from '../components/InventoryList'

const HomePage = ({inventory, refresh, onUpdate, onDelete, onEdit}) => {
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

  const handleIncrement = async (item) => {
    try {
      await onUpdate(item.id, { quantity: item.quantity + 1 })
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleDecrement = async (item) => {
    try {
      if (item.quantity > 1) {
        await onUpdate(item.id, { quantity: item.quantity - 1 })
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const confirmAndDelete = async (id) => {
    try {
      if (window.confirm("You're about to delete this item, are you sure?")) {
        await onDelete(id)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const currentItems = activeCategory === 'spells' ? spellbook : backpack
  const isEmpty = currentItems.length === 0

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
      {isEmpty ? (
        <p>Inventory is empty</p>
      ) : (
        <InventoryList 
          items={currentItems}
          onDelete={confirmAndDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onEdit={onEdit}
        />
      )}
    </main>
  )
}

export default HomePage
