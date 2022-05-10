import React from "react";
import "./Navbar.css";
import image1 from "./images/logo-1.png"

const Navbar = () => {
  return (
    <header>
    <div className="first-logo">
        <div href="#" className="logo">
          <img src={image1} className="log1" alt="" />
          Constructit!
        </div>

        <div className="navbar">
          <a   href="#home">home</a>
          <a   href="#products">products</a>
          <a   href="#featured">services</a>
          <a   href="#review">review</a>
        </div>

        <div className="icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-user"></a>
        </div>
    </div>
    </header>
  );
};

export default Navbar;
