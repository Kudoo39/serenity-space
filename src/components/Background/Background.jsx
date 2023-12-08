import React from "react";
import "./Background.css";
import Day from "../../assets/city/day.mp4";

const Background = () => {
  return (
    <div className="background-container">
      <video className="video" autoPlay loop muted>
        <source src={Day} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
