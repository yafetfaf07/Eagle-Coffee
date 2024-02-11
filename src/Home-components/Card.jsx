import React from "react";
import '../Home-components/CSS/section.css';
import flowerCoffee from "../assets/images/Rectangle 6.png"
const Card = ({content,title}) => {
  return (
    <div className="card">
      <img src={flowerCoffee} alt="" />
      <h2>{title}</h2>
      <p>
        Our high-quality coffee <br /> beans are sourced from the best farms in
        Ethiopia .
      </p>
    </div>
  );
};

export default Card;
