import React from "react";
import pics from "../assets/images/profile-pic.jpg";
import "../Home-components/CSS/comments.css";
import double_quotes from "../assets/images/double-quotes.png";

const CommentsCard = () => {
  return (
    <div className="comments-card">
      <p>
        <img src={double_quotes} alt="" />
        I am so impressed with the level of service and expertise provided by
        Trust ICT Solutions. They have truly transformed our business, from
        building us a professional website to creating custom mobile
        applications
      </p>
      <div>
        <img src={pics} alt="" />
        <div>
          <span className="job-title">Marketing manager</span>
          <span>Benyam Yosef</span>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
