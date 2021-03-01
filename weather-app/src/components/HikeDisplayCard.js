import React from "react";
import "./stylesheets/HikeDisplayCard.css";

const HikeDisplayCard = (props) => {
  return (
    <div className="card-container">
      <div className="card-info">
        <h2 className="card-title">{props.name}</h2>
        <span className="stats">Rating: &nbsp; {props.avg_rating} / 5</span>
        <span className="stats">
          Difficulty: &nbsp; {props.difficulty_rating}
        </span>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          dolorum tempore rem perferendis unde cupiditate quaerat hic
          consequatur blanditiis laborum dolorem. Ipsa iure alias laboriosam
          repellendus. Non velit amet nam.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default HikeDisplayCard;
