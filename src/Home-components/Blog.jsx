import React from "react";
import BlogCards from "./BlogCards";
import "../Home-components/CSS/blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <center>
        <h2>Blogs</h2>
        <p>Featured Post</p>
      </center>
      <div>
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
      
      </div>
    </div>
  );
};

export default Blog;
