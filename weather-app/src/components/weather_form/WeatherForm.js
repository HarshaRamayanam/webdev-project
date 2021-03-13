import React from "react";
import "../weather_form/WeatherForm.css";

const WeatherForm = (props) => {
  return (
    <div className="form_div">
      <form id="addCityForm" onSubmit={props.loadweather}>
        <div className="input-group form_row">
          <label htmlFor="addInput">City name</label>
          <input
            type="text"
            placeholder="Enter city name"
            className="inputSearch form-control"
            name="city"
            id="addInput"
            required
          />

          <div className="input-group-append">
            <button type="submit" className="btnSearch btn btn-lg">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
