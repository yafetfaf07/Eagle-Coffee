import React from "react";
import customerCoffee from "../assets/images/Group 71.png";
import "../Home-components/CSS/blog.css";
const BlogCards = () => {
  return (
    <div className="blog-cards">
      <img src={customerCoffee} alt="" />
      <div>
        <p>These is the title of the blog post of Eagle Coffee</p>
        <span className="date">Jan 24,2023</span>
        <span className="learn-more">Learn More &gt; &gt;</span>
      </div>
    </div>
  );
};

export default BlogCards;
