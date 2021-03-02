import React from "react";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  return (
    <div className="we_row">
        <div className="cards">
          <div className="card_info">
            <div className="d-flex justify-content-between">
              <div className="city_name">
                  <h4><b>{props.city}</b></h4>
                  <h6>{props.dateTime}</h6>  
                  <h6>{props.Day}</h6>                  
              </div>
              <div className="we_icon ">
                <img  src={`http://openweathermap.org/img/w/${props.weather_icon}.png`} class="img-fluid" alt="weather icon" width="80px" />
                <h5 className="px-2"><b>{props.description}</b></h5>
              </div>
              <div className="city_temp">
                  {props.temperature ? (
                    <h1 className="px-4"><b>{props.temperature}&deg;c</b></h1>
                  ) : null}
                
                  {props.feelsLike ? (
                  <h4 className="px-3 py-1" >Feels Like: <b>{props.feelsLike}&deg;</b></h4>
                  ) : null}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default WeatherCard;
