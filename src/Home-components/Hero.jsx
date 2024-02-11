import React from "react";
import heroImage from "../assets/images/Rectangle 2.png";
import "../Home-components/CSS/hero.css";
const Hero = () => {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className="left" id="hl">
        <h1>Step into the <br />World of Quality Coffee with us.</h1>
        <p>Explore Our Premium Coffee Selections and Services</p>
        <div className="explore-store">Explore our store now</div>
      </div>
      <div className="right" id="hr">
      <img src={heroImage} alt="A cup of coffee" />
      </div>
    </main>
  );
};

export default Hero;
