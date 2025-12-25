import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={assets.logo} />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>home</li>
          <li>menu</li>
          <li>mobile-app</li>
          <li>contact us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="dot">
          <img className="cart-icon" src={assets.basket_icon} alt="" />
        </div>
        <div className="sign-in">Sign In</div>
      </div>
    </div>
  );
};
export default Navbar;
