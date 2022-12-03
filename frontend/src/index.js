import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import MenuPage from './pages/MenuPage';
import OrderTracking from './pages/OrderTracking';
import SignUp from './pages/SignUp';
import { AuthContextProvider } from './context/AuthContext';
import Admin from './pages/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
  (
    <>
      <AuthContextProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:category" element={<MenuPage />} />
            <Route path='/order-tracking' element={<OrderTracking />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );