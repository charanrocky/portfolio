import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="logo">
        <div class="rectangle"></div>
        <div class="ellipse"></div>
        <div class="rectangle"></div>
        <div class="circle"></div>
      </div>
      <ul className="menu">
        <li className="menu-item active">Home</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Portfolio</li>
        <li className="menu-item">Contact</li>
      </ul>
      <button className="hire-me-button">HIRE ME</button>
    </nav>
  );
};

export default Navbar;
