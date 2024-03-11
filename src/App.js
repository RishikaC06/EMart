import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './modules/Product';
import Products from './modules/Products';
import CategoryProducts from './modules/CategoryProducts';
import Cart from './modules/Cart';
import Login from './modules/Login';
import Register from './modules/Register';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/products/:id' exact element={<Product/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
