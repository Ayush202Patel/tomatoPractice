import React from "react";
import "./Navbar.css";
import "../../assets/assets";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} className="logo" alt="" />
    </div>
  );
};

export default Navbar;
