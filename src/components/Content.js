import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Details from './Details';
function Content() {
  return (
         <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
  )
}

export default Content