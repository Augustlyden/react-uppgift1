import React, { useEffect, useState } from 'react'
import { getAllItems, createItem, updateItem } from '../api/dataApi';
import ItemList from '../components/ItemList';

const ShopPage = ({inventory, onAddItem, onUpdateQuantity}) => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(
    localStorage.getItem('selectedCategory') || 'spells'
  )
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  /* const [showModal, setShowModal] = useState(false) */

  const fetchItems = async () => {
    try {
      setItems([])
      setError(null)
      setLoading(true)
      const data = await getAllItems(activeCategory)
      setItems(data);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems()
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

  const handleAddToInventory = async (newItem) => {
    try {
    await onAddItem(newItem)
    } catch (error) {
      console.error(`handleAddToInventory failed: ${newItem.name}`)
    }
  }
  return (
    <main>
      <div>
        <button onClick={() => setActiveCategory('spells')}>Spells</button>
        <button onClick={() => setActiveCategory('equipment')}>Equipment</button>
      </div>
      <ItemList items={items} onAdd={handleAddToInventory}/>
    </main>
  )
}

export default ShopPage
