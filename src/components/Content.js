import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Details from './Details';
import Login from './auth/Login';
import Register from './auth/Register';
function Content() {
  return (
         <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />}  />
            <Route path="/Register" element={<Register />}  />
          </Routes>
  )
}

export default Content