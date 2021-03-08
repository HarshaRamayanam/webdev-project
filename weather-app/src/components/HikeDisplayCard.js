import React, { useState, useContext, useEffect, useRef } from "react";
import HikeDirections from "./HikeDirections";
import { Link } from "react-router-dom";
import { LocationContext } from "./ContextStore";
import "./stylesheets/HikeDisplayCard.css";

const HikeDisplayCard = ({ infoObj }) => {
  const [location, setLocation] = useContext(LocationContext);
  const [directionsClick, setDirectionsClick] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({});

  let difficulty_rating = infoObj.difficulty_rating;
  let difficulty_rating_text;
  let difficulty_style;

  // convert the difficulty_rating number to text as
  // 1 -> easy
  // 3 -> moderate
  // 5 -> difficult
  // 7 -> hard
  switch (difficulty_rating) {
    case 1:
      difficulty_rating_text = "easy";
      difficulty_style = {
        "span.difficulty": {
          display: "inline-block",
          background: "green",
          color: "white",
          padding: "2px 10px",
          boxSizing: "border-box",
          borderRadius: "20%",
        },
      };
      break;
    case 3:
      difficulty_rating_text = "moderate";
      difficulty_style = {
        "span.difficulty": {
          display: "inline-block",
          background: "yellow",
          color: "black",
          padding: "2px 10px",
          boxSizing: "border-box",
          borderRadius: "20%",
        },
      };
      break;
    case 5:
      difficulty_rating_text = "difficult";
      difficulty_style = {
        "span.difficulty": {
          display: "inline-block",
          background: "orange",
          color: "black",
          padding: "2px 10px",
          boxSizing: "border-box",
          borderRadius: "20%",
        },
      };
      break;
    case 7:
      difficulty_rating_text = "hard";
      difficulty_style = {
        "span.difficulty": {
          display: "inline-block",
          background: "red",
          color: "black",
          padding: "2px 10px",
          boxSizing: "border-box",
          borderRadius: "20%",
        },
      };
      break;
    default:
      break;
  }

  const checkWeatherBtnClicked = () => {
    setLocation(infoObj._geoloc);
  };

  const getDirectionsBtnClicked = () => {
    setLocation(infoObj._geoloc);
    setDirectionsClick(true);
  };

  // Logic to convert avg_rating number to star rating
  const starTotal = 5;
  let starPercentage = (infoObj.avg_rating / starTotal) * 100;
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

  // Logic to set current location, after the component mounts which in future
  // used to get directions from current location to hike location.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
    function successLocation(position) {
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
        {/* Display the Hike title */}
        <h2 className="card-title">{infoObj.name}</h2>
        {/* Display the Hike location as
        //  area, city, state. */}
        <div className="card-subtitle">
          {infoObj.area_name}, &nbsp;{infoObj.city_name}, &nbsp;
          {infoObj.state_name}
        </div>
        <br />
        {/* Display the star rating */}
        <div className="stars-outer">
          <span
            className="stars-inner"
            style={stylingObject["span.stars-inner"]}
          ></span>
        </div>
        &nbsp;{infoObj.avg_rating}
        <br />
        <br />
        {/* Display the hike's difficulty level */}
        <span
          className="difficulty"
          style={difficulty_style["span.difficulty"]}
        >
          {difficulty_rating_text}
        </span>
        <br />
        <br />
        {/* Display some stats of the hike
            "length", "elevation gain", "route type" */}
        <div className="stats">
          <div className="stat-name">Length</div>
          <div className="stat-name">Elevation Gain</div>
          <div className="stat-name">Route-type</div>
          <div className="stat-value">
            {(infoObj.length * 0.000621371192).toFixed(2)} mi
          </div>
          <div className="stat-value">
            {Math.round(infoObj.elevation_gain)} ft
          </div>
          <div className="stat-value">{infoObj.route_type}</div>
        </div>
        {/* Display some features of the hike
            "Features", "Activities" */}
        <div className="hike-features">
          <div className="feature-label">Features</div>
          <div className="feature-label">Activities</div>
          {infoObj.features.map((item) => (
            <li key={Math.random()} className="features">
              <i className="far fa-check-circle"></i>
              {item}
            </li>
          ))}
          {infoObj.activities.map((item) => (
            <li key={Math.random()} className="features">
              <i className="far fa-check-circle"></i>
              {item}
            </li>
          ))}
        </div>
        {/* Display two buttons
            "Check Weather", "Get Directions" */}
        <div className="buttons">
          <Link to="/weather">
            <button
              className="btn btn-primary"
              onClick={checkWeatherBtnClicked}
            >
              Check Weather <i className="fas fa-chevron-right"></i>
            </button>
          </Link>
          <button
            className="btn btn-secondary"
            onClick={getDirectionsBtnClicked}
          >
            Get Directions <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        {directionsClick ? <HikeDirections currLoc={currentLocation} /> : null}
      </div>
    </div>
  );
};

export default HikeDisplayCard;
