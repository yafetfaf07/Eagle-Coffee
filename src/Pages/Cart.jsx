import React, { useState } from "react";
import timeTablePic from "../assets/images/timetable.png";
import "../Cart-components/CSS/cart.css";
import CardProduct from "../Cart-components/CardProduct";
const Cart = () => {
  return (
    <div>
      <div className="cart-page">
        <h1>Checkout</h1>
        <img src={timeTablePic} alt="time-table logo" />
      </div>
      <h1 className="shopping-cart">SHOPPING CART</h1>
      <div className="description">
        <div>Item</div>
        <div>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
      </div>
      <CardProduct />
    </div>
  );
};

export default Cart;
