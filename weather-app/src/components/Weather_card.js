import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="container">
      <div className="cards pt-4">
        <div className="card_info">
          <h2>{props.city}</h2>
          <h5 className="py-3 px-4">
            <i className={`wi ${props.weather_icon} display-1`}></i>
          </h5>
          <h4 className="px-4">{props.description}</h4>
          {props.temperature ? (
            <h1 className="py-1 px-5">{props.temperature}&deg;</h1>
          ) : null}
          {props.minTemp && props.maxTemp ? (
            <h3>
              <span className="px-0">L: {props.minTemp}&deg;</span>
              <span className="px-3">H: {props.maxTemp}&deg;</span>
            </h3>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
