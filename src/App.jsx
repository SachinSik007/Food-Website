import React, { useState } from 'react'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Footer from './Component/footer/Footer'
import LoginPop from './Component/LoginPoP/LoginPop'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
      </Routes>
    </div>
    <Footer />
   </> 
  )
}

export default App
