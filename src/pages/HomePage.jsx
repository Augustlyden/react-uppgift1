import React, { useState, useEffect } from 'react'
import { getInventory, updateItem } from '../api/dataApi'
import InventoryList from '../components/InventoryList'
import CategorySelector from '../components/CategorySelector';
import { usePageStatus } from '../hooks/usePageStatus';
import StatusHandler from '../components/StatusHandler';

const HomePage = ({inventory, refresh, onUpdate, onDelete, onEdit}) => {
  const { activeCategory, setActiveCategory, loading, error, wrapAsync } = usePageStatus()
  
  useEffect(() => {
    wrapAsync(() => refresh())
  }, [])

  const currentItems = inventory.filter(item => 
    activeCategory === 'spells' ? item.type === 'spells' : item.type === 'equipment'
  )
  const isEmpty = currentItems.length === 0

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

  return (
    <main>
      <CategorySelector onSelect={setActiveCategory} />
      <StatusHandler loading={loading} error={error}>
        {isEmpty ? (
          <p>Inventory is empty</p>
        ) : (
          <InventoryList 
            items={currentItems}
            onDelete={confirmAndDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onEdit={onEdit}/>
        )}
      </StatusHandler>
    </main>
  )
}

export default HomePage
