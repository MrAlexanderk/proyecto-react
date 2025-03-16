import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { useState, useEffect, useContext } from 'react';
import CartProvider from "./context/CartContext";
import { UserContext } from './context/UserContext';

function App() {
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Pizza />} />

            <Route path="/cart" element={<Cart />} />
            {/*<Route path="/profile" element={<Profile />} />*/}
            <Route path="*" element={<NotFound />} />
            
            <Route 
              path="/profile" 
              element={token ? <Profile /> : <Navigate to="/login" />} 
            />

            <Route 
              path="/register" 
              element={!token ? <Register /> : <Navigate to="/" />} 
            />
            <Route 
              path="/login" 
              element={!token ? <Login /> : <Navigate to="/" />} 
            />


          </Routes>
          <Footer />
        </CartProvider>
    </BrowserRouter>
  );
}

export default App;
