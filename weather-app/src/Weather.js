import React, { Component } from 'react'; 
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';

function Weather() {
  return (
    <div className="weather_page">
      {/* <Nav /> */}
      <div>
          <div className="flex-container">
              <div>
                  <h3>Get weather forecast </h3>
                  <br />
                  <input type="text" placeholder="Enter city name"  className="searchBar" />
              </div>
              
          </div>
      </div>
    </div>
     
  );
}

export default Weather;