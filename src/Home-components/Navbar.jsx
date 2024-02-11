import React, { useRef } from "react";
import "../App.css";
import logo from "../assets/images/Rectangle 53.png";

const Navbar = () => {
  const menus = useRef(null);
  const showNavbar = () => {
    menus.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="logo">
        <img src={logo} alt="" />
        <h2>
          <span>Eagle</span>
          <br /> Coffee
        </h2>
      </div>

      <nav ref={menus}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Sections</a>
        <a href="/#">Events</a>
        <a href="/#">Gallery</a>
        <a href="/product">Blogs</a>
   
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <span class="material-symbols-outlined">close</span>
        </button>
        <div className="cartBtn">
          <a href="/card">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span>Cart</span>
          </a>
          

          <div className="counter">0</div>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <span class="material-symbols-outlined">menu</span>
      </button>
   
    </header>
  );
};

export default Navbar;
