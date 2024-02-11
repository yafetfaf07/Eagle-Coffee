import React from "react";
import "../Home-components/CSS/comments.css";
import CommentsCard from "./CommentsCard";
const Comments = () => {
  return (
    <div className="comments">
      <center>
        <h2>What our Customers think</h2>
      </center>
      <div>
      <CommentsCard />
      
      <div className="pager">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
      
      
    </div>
  );
};

export default Comments;
