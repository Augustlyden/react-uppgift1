import React, { useEffect, useState } from 'react'
import { getAllItems } from '../api/dataApi';
import ItemList from '../components/ItemList';

const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('spells')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

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
    fetchItems();
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
  return (
    <main>
      <div>
        <button onClick={() => setActiveCategory('spells')}>Spells</button>
        <button onClick={() => setActiveCategory('equipment')}>Equipment</button>
      </div>
      <ItemList items={items}/>
    </main>
  )
}

export default ShopPage
