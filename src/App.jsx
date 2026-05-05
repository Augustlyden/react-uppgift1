import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
/* import HomePage from './pages/HomePage' */
import ShopPage from './pages/ShopPage'
import ItemDetailPage from './pages/ItemDetailPage'
/* import CreateItemPage from './pages/CreateItemPage' */

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='/' element={<HomePage />} /> */} 
          <Route path='/shop' element={<ShopPage/>} />
          {/* <Route path='/create' element={<CreateItemPage />} /> */}
          <Route path='/:category/:slug' element={<ItemDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
