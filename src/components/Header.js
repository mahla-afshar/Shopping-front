import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import {DataContext} from './Context';

function Header() {

     const [menu, setMenu] = useState(false);
     const value = useContext(DataContext);
     const [cart] = value.cart;

     const toggleMenu = () => {
          setMenu(!menu);
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"
     }

  return (
    <header>
         <div className="cart-icon">
              <span>{cart.length}</span>
              <Link to="/cart">
                    <FaShoppingBag />
              </Link>
         </div>
         <ul style={styleMenu}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/"> Contact</Link></li>
              <li><Link to="/Register">Register</Link></li>
              <li><Link to="/Login">Login </Link></li>
               <li><img src={Close} width="30" className="menu" alt="" onClick={toggleMenu} /></li>
         </ul>
         <div className="logo">
              <Link to="/">Mahla Shop</Link>
         </div>
         <div className="menu" onClick={toggleMenu}>
              <img src={Menu} width="30" alt="" />
         </div>
    </header>

  )
}

export default Header