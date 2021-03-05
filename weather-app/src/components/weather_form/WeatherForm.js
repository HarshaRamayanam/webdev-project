import React from "react";


const WeatherForm = (props) => {
  return (
    <div className="form_div">
        <form id="addCityForm" onSubmit={props.loadweather} >
          <div className="input-group form_row">
              <input
                type="text"
                placeholder="City"
                className="inputSearch form-control"
                name="city"
                id="addInput"
                
                required
              />
              
              

            <div className="input-group-append">
              <button type="submit" className="btnSearch btn btn-lg"> 
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
