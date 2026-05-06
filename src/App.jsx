import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ItemDetailPage from './pages/ItemDetailPage'
import { getInventory } from './api/dataApi'
/* import CreateItemPage from './pages/CreateItemPage' */

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

  useEffect(() => {
    fetchInventory()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage inventory={inventory} refresh={fetchInventory}/>} />
          <Route path='/shop' element={<ShopPage inventory={inventory} refresh={fetchInventory}/>} />
          {/* <Route path='/create' element={<CreateItemPage />} /> */}
          <Route path='/:category/:slug' element={<ItemDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
