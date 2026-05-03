import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import ShopPage from './pages/ShopPage'
import ItemDetailPage from './pages/ItemDetailPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/shop' element={<ShopPage/>}></Route>
          {/* <Route path='/:category/:slug'> element={<ItemDetailPage/>}</Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
