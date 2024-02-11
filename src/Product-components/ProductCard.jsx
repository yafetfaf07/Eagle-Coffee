import React from "react";
import "../Product-components/CSS/product.css";
import productImage from "../assets/images/Coffee_product.png";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div>
        <img src={productImage} alt="coffee-product" />
        <div className="bg"></div>
        <div className="product-details">
          <h2>Jimma Coffee</h2>
          <p>
            This is a dry processed lightly flavoured bean is fruity with cocao
            and tea notes.
          </p>
        </div>
        <div className="price-details">
          <span className="price">$50.50</span>
          <button className="order-btn">Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
