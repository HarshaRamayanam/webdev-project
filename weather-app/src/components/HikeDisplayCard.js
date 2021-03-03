import React, { useState, useContext, useEffect, useRef } from "react";
import HikeDirections from "./HikeDirections";
import { Link } from "react-router-dom";
import { LocationContext } from "./ContextStore";
import "./stylesheets/HikeDisplayCard.css";
// {lat: 233.900, lng: 2323.32}
const HikeDisplayCard = (props) => {
  const [location, setLocation] = useContext(LocationContext);
  const [directionsClick, setDirectionsClick] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});

  const checkWeatherBtnClicked = () => {
    setLocation(props.loc);
  };

  const getDirectionsBtnClicked = () => {
    setLocation(props.loc);
    setDirectionsClick(true);
  };
  // console.log(location);

  const starTotal = 5;
  let starPercentage = (props.avg_rating / starTotal) * 100;
  let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  let stylingObject = {
    "span.stars-inner": {
      width: starPercentageRounded,
    },
    "div.map": {
      width: "400px",
      height: "300px",
    },
  };

  // console.log(currentLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
    function successLocation(position) {
      // console.log(position);
      const currLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentLocation(currLoc);
    }

    function errorLocation() {
      setCurrentLocation({ lat: -2.24, lng: 53.48 });
    }
  }, []);

  return (
    <div className="card-container">
      <div className="card-info">
        <h2 className="card-title">{props.name}</h2>
        <span className="stats">
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
          <button className="btn btn-primary" onClick={checkWeatherBtnClicked}>
            Check Weather <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
        <button className="btn btn-secondary" onClick={getDirectionsBtnClicked}>
          Get Directions <i className="fas fa-chevron-right"></i>
        </button>
        {directionsClick ? <HikeDirections currLoc={currentLocation} /> : null}
      </div>
    </div>
  );
};

export default HikeDisplayCard;
