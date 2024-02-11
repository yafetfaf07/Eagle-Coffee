import React from "react";
import light from "../assets/images/Light_Roasted.png";
import medium from "../assets/images/Medium_Roasted.png";
import dark from "../assets/images/Dark_Roasted.png";
import g1 from "../assets/images/Group 106.png";
import g2 from "../assets/images/Group 108.png";
import g3 from "../assets/images/Group 109.png";
import verified from "../assets/images/Vector.png";
import brown_verified from "../assets/images/brown_verified.png";
import frames from "../assets/images/Frame 30.png";
import "../Home-components/CSS/our.css";

const Our = () => {
  return (
    <div className="our-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <center>
        <h2>Our Coffee</h2>
      </center>
      <div className="grids">
        <div id="one">
          <p>
            we are passionate about bringing you some of the best coffee in the
            world.
          </p>

          <div>
            <img src={verified} alt="" />
            <p>From Pure Ethiopian Soil</p>
          </div>
          <div>
            <img src={verified} alt="" />
            <p>Direct From Local Farmer</p>
          </div>
          <div>
            <img src={verified} alt="" />
            <p>Committed To Sustainable and Ethical Farming </p>
          </div>
        </div>
        <div id="two">
          {/* <span>Light</span>
          <span>Medium</span>
          <span>Dark</span> */}
          <img src={light} alt="Light roasted" />
          <img src={medium} alt="Medium roasted" />
          <img src={dark} alt="Dark roasted" />
        </div>
        <div id="three">
          <h2>We Offer Different Packages</h2>
          <div>
            <div>
              <img src={g1} alt="" />
              <span>1kg</span>
            </div>
            <div>
              <img src={g2} alt="" />
              <span>0.5kg</span>
            </div>
            <div>
              <img src={g3} alt="" />
              <span>0.25kg</span>
            </div>
          </div>
        </div>
        <div id="four">
          <center>
            <h2>Grind type</h2>
          </center>
          <div>
            <div id="four-1">
              <img src={brown_verified} />
              <p>Whole Bean</p>
            </div>
            <div id="four-2">
              <img src={brown_verified} />
              <p>Course</p>
            </div>
            <div id="four-3">
              <img src={brown_verified} />
              <p>Drip</p>
            </div>
            <div id="four-4">
              <img src={brown_verified} />
              <p>Fine</p>
            </div>
          </div>
        </div>
      </div>
      <h4>Our coffee are harvested from</h4>
      <div className="origin">
        <div className="origin-img">
          <img src={frames} alt="" />
          <div>
            <h3>Jimma</h3>
            <p>
              This is a dry processed lightly flavored bean is fruity with cocoa
              and tea notes.
            </p>
          </div>
        </div>

        <div className="right-swipe">
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </div>
  );
};

export default Our;
