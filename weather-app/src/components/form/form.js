import React from "react";


const WeatherForm = (props) => {
  return (
    <div className="form_div">
        <form onSubmit={props.loadweather}>
          <div className="input-group row">
              <input
                type="text"
                placeholder="City"
                className="inputSearch form-control"
                name="city"
                autoComplete="off"
                required
              />
            <div class="input-group-append">
              <button type="submit" className="btnSearch btn"> 
                  <i class="fa fa-search" ></i>
              </button>
            </div>
          </div>
        </form>
        <div className="lable_row ">
            <label className=" searchLabel">Search by City Name</label>
        </div>
    </div>
    

    
  );
};

export default WeatherForm;
