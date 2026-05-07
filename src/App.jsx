import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ItemDetailPage from './pages/ItemDetailPage'
import { createItem, deleteItem, getInventory, updateItem } from './api/dataApi'
import CreateItemPage from './pages/CreateItemPage'

function App() {
  const [inventory, setInventory] = useState([])

  const fetchInventory = async () => {
    try {
      const items = await getInventory()
      setInventory(items)
      return items
    } catch (error) {
      console.error(`fetchInventory failed: ${error.message}`)
    }
  }

  const handleUpdateItem = async (id, itemData) => {
    try {
      await updateItem(id, itemData)
      setInventory(prev => 
        prev.map(item =>
          item.id === id ? {...item, ...itemData } : item
        )
      )

      return { status: 'updated' }
    } catch (error) {
      console.error('handleUpdateItem failed:', error.message)
    }
  }

  const handleAddItem = async (newItem) => {
    try {
      const existingItem = inventory.find(item => item.id === newItem.id)

      if (existingItem && newItem.type === 'spells') {
        return { status: 'duplicate_spell', name: newItem.name }
      }

      if (existingItem && newItem.type === 'equipment') {
        await handleUpdateItem(existingItem.id, { quantity: existingItem.quantity + 1 })
        return { status: 'updated_quantity' }
      }

      await createItem(newItem)
      setInventory(prev => [...prev, newItem])
      
      return { status: 'created' }
    } catch (error) {
      console.error(`handleAddItem failed: ${newItem.name}`, error.message)
      throw error
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteItem(id)
      setInventory(prev => 
        prev.filter(item => item.id !== id)
      )
    } catch (error) {
      console.error('Delete failed', error.message)
      await fetchInventory()
    }
  }

  useEffect(() => {
    fetchInventory()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage inventory={inventory} onUpdate={handleUpdateItem} refresh={fetchInventory} onDelete={handleDelete} onEdit={handleUpdateItem}/>} />
          <Route path='/shop' element={<ShopPage inventory={inventory}  onAddItem={handleAddItem}/>} />
          <Route path='/create' element={<CreateItemPage onAddItem={handleAddItem} onUpdateItem={handleUpdateItem}/>}/>
          <Route path='/:category/:slug' element={<ItemDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
