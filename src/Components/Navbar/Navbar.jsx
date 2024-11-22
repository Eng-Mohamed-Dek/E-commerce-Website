import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { totalCarts } = useContext(ShopContext)
  const drop_icon = "/Frontend_Assets/nav_dropdown.png";
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }
    
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/Frontend_Assets/logo.png" alt="logo" />
        <p>HIRSHOP</p>
      </div>
      <img src={drop_icon} onClick={dropdown_toggle} alt="dropdown-icon" className="nav-dropdown" />
      <ul className="nav-menu" ref={menuRef}>
        <li onClick={() => setMenu("shop")} ><Link to="/" onClick={dropdown_toggle}>Shop</Link> {menu == 'shop' && <hr />}</li>
        <li onClick={() => setMenu("men")}><Link to="/mens" onClick={dropdown_toggle}>Mens</Link>   {menu == 'men' && <hr />}</li>
        <li onClick={() => setMenu("women")}><Link to="/womens" onClick={dropdown_toggle}>Womens</Link>  {menu == 'women' && <hr />}</li>
        <li onClick={() => setMenu("kid")}><Link to="/kids" onClick={dropdown_toggle}>Kids</Link>   {menu == 'kid' && <hr />}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to="/login">Login in</Link> </button>
        <Link to="/cart"> <img src="/Frontend_Assets/cart_icon.png" alt="cart-icon" /></Link>
       
        <div className="nav-cart-count">{totalCarts()}</div>
      </div>
    </div>
  );
};
