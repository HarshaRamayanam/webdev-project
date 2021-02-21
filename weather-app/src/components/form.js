import React from "react";

const WeatherForm = (props) => {
  return (
    <div className="flex-container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-7 offset-md-2">
            <input
              type="text"
              placeholder="Enter city name"
              className="form-control"
              name="city"
              autoComplete="off"
            />
          </div>
          <div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div classNames="alert alert-danger mx-5" role="alert">
      Please Enter City
    </div>
  );
}

export default WeatherForm;
