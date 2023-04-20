import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import logoSvg from './images/logo.svg';

import Menu from './components/Menu/Menu';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Order from './components/order/Order';
import Contact from './components/contact/Contact';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './components/Home/Home';
import Cart from './pages/cart/Cart';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import About from './pages/about/About';
import Company from './pages/company/Company';
import Favorite from './pages/favorite/Favorite';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/company"
          element={<Company />}
        />
        <Route
          path="/favorite"
          element={<Favorite />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
}

export default App;
