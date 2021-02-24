import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="row">
      
        <div className="col col-md-4 col-lg-4 col-sm-12">
            <div className="cards">
              <div className="card_info">
                <div className="d-flex justify-content-between">
                  <div className="city_name"><h2>{props.city}</h2></div>
                  <div className="we_icon">
                    <h5 className="py-2 px-4">
                      <i className={`wi ${props.weather_icon} display-4`}></i>
                    </h5>
                    <h4 className="px-3">{props.description}</h4>
                  </div>
                  <div className="city_temp">
                      {props.temperature ? (
                        <h1 className="temp">{props.temperature}&deg;</h1>
                      ) : null}
                      {props.minTemp && props.maxTemp ? (
                        <h3>
                          <span className="px-1">L: {props.minTemp}&deg;</span>
                          <span className="px-2">H: {props.maxTemp}&deg;</span>
                        </h3>
                      ) : null}
                  </div>
                </div>
              </div>
            </div>
        </div>

    </div>
  );
};

export default WeatherCard;
