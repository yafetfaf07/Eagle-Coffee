import React from "react";
import "../Home-components/CSS/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div id="f1" className="navigation">
          <h2>Navigation</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Blogs</li>
          </ul>
        </div>
        {/* <div className="line-break"></div> */}
        <div id="f2" className="services">
          <h2>Services</h2>
          <ul>
            <li>Design & Development</li>
            <li>Digital Marketing</li>
            <li>Creative Content</li>
            <li>IT Hardware Import </li>
          </ul>
        </div>
        {/* <div className="line-break"></div> */}
        <div id="f3" className="support">
          <h2>Support</h2>
          <ul>
            <li>+251985235803</li>
            <li>Eagle Coffee@gmail.com</li>
            <li>Mexico, Bulgaria</li>
          </ul>
        </div>
        {/* <div className="line-break"></div> */}
        <div id="f4" className="eagle-coffee">
          <h2>Eagle Coffee</h2>
          <p>
            we believe that our coffee beans are more than just a commodity.
            Each batch of beans has a story to tell, from the farmers who grow
            them to the roasters who roast them. Our gallery is a celebration of
            the beauty and diversity of Ethiopian coffee. From the vibrant
            cherry reds of Yergachaffee to the earthy browns of Lekempti, each
            bean has a unique personality and flavor profile.
          </p>
        </div>
      </div>
      <div className="line-break"></div>
      {/* <div className="line-break"></div> */}
      <div className="copy-right">
        <div>
          <span>Copyright © 2023 Eagle Coffee</span>
        </div>
  

      </div>
    </footer>
  );
};

export default Footer;
