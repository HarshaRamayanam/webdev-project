import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "./ContextStore";
import "./stylesheets/HikeDisplayCard.css";

const HikeDisplayCard = (props) => {
  const [location, setLocation] = useContext(LocationContext);

  const btnClicked = () => {
    setLocation(props.loc);
  };

  const starTotal = 5;
  let starPercentage = (props.avg_rating / starTotal) * 100;
  let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  let stylingObject = {
    "span.stars-inner": {
      width: starPercentageRounded,
    },
  };

  return (
    <div className="card-container">
      <div className="card-info">
        <h2 className="card-title">{props.name}</h2>
        <span className="statss">
          <span className="stars-outer">
            <span
              className="stars-inner"
              style={stylingObject["span.stars-inner"]}
            ></span>
          </span>
          &nbsp;{props.avg_rating}
        </span>
        <span className="stats">
          Difficulty: &nbsp; {props.difficulty_rating}
        </span>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          dolorum tempore rem perferendis unde cupiditate quaerat hic
          consequatur blanditiis laborum dolorem. Ipsa iure alias laboriosam
          repellendus. Non velit amet nam.
        </p>
        <Link to="/weather">
          <button className="btn btn-primary" onClick={btnClicked}>
            Check Weather <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HikeDisplayCard;
