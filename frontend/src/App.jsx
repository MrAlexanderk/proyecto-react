import { Route, Routes } from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/p001" element={<Pizza id ={'p001'} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />


      </Routes>
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App