import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'
import { useState, useEffect } from 'react'

function App() {


  return (
    <>
    
      <Navbar />
      {/* <Cart /> */}
      {/* <Home /> */}
      <Pizza id={'p001'} />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </>
  )
}

export default App