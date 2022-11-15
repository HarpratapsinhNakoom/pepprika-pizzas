import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import MenuPage from './pages/MenuPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
  (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/menu" element={<MenuPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );