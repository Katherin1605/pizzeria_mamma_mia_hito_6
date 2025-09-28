import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { CartProvider } from './context/CartContext'
import { PizzaProvider } from './context/PizzaContext'
import './App.css'

const App = () => {

  return (
    <PizzaProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
            <Footer/>
          </div>
        </Router>
      </CartProvider>
    </PizzaProvider>
  )
}

export default App
