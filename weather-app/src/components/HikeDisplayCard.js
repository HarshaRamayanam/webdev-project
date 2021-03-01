import React from "react";
import "./stylesheets/HikeDisplayCard.css";

const HikeDisplayCard = ({ name, loc }) => {
  return (
    <div className="card-container">
      <p>{name}</p>
      <p>{loc}</p>
    </div>
  );
};

export default HikeDisplayCard;
