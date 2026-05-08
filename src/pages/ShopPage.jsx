import React, { useEffect, useState } from 'react'
import { getAllItems, createItem, updateItem } from '../api/dataApi';
import ItemList from '../components/ItemList';
import CategorySelector from '../components/CategorySelector';
import { usePageStatus } from '../hooks/usePageStatus';
import StatusHandler from '../components/StatusHandler';

const ShopPage = ({ onAddItem }) => {
  const [items, setItems] = useState([]);
  const { activeCategory, setActiveCategory, loading, error, wrapAsync } = usePageStatus()

  useEffect(() => {
    const fetchItems = async () => {
        const data = await getAllItems(activeCategory)
        setItems(data);
    }
    wrapAsync(fetchItems)
  }, [activeCategory])

  const handleAddToInventory = async (newItem) => {
    try {
    await onAddItem(newItem)
    } catch (error) {
      console.error(`handleAddToInventory failed: ${newItem.name}`)
    }
  }
  return (
    <main>
      <CategorySelector onSelect={setActiveCategory} />
      <StatusHandler loading={loading} error={error}>
        <ItemList items={items} onAdd={handleAddToInventory} />
      </StatusHandler>
    </main>
  )
}

export default ShopPage
