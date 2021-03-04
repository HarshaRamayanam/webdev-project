// importing required modules
import React, { Component } from "react";
import "../App.css";
import WeatherForm from "./weather_form/WeatherForm.js";
import WeatherCard from "./Weather_page/Weather_card";
import LineChart from "./chart/lineChart";
import "./Weather_page/WeatherCard.css";
import "./chart/chart.css";
import "./weather_form/WeatherForm.css";
import Forecast from './forecast/Forecast';
import "./forecast/Forecast.css";
import axios from 'axios';
import moment from 'moment';


import '../App.css';


require("dotenv").config();


const ApiKey = process.env.REACT_APP_API_KEY;
// var sectionImage ={
//   backgroundImage: `url(${})`
// }
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temp_before: undefined,
      description: "",
      latitude : undefined,
      longitude : undefined,
      date_time:undefined,
      feels : undefined,
      daily_info: [],
      day:undefined,
      visited_cities : [],
      val:undefined
     
    };

  }

  setBackground(){
    console.log("cl");
    if(this.state.icon === "01d"){
     
      document.getElementById("main").style.backgroundImage="url('./background_images/01d.jpg')";
    } 
    else if(this.state.icon === "01n"){
      console.log("clear");
        document.getElementById("main").style.backgroundImage="url('./background_images/01n.jpg')";
    }
    // else if(this.state.icon === "02d"){
    //     document.body.style.backgroundImage="url('./background_images/02d.jpg')";
    // }
    // else if(this.state.icon === "02n"){
    //     document.body.style.backgroundImage="url('./background_images/02n.jpg')";
    // }
    // else if(this.state.icon === "03d"){
    //     document.body.style.backgroundImage="url('./background_images/03d.jpg')";
    // }
    // else if(this.state.icon === "03n"){
    //     document.body.style.backgroundImage="url('./background_images/03n.jpg')";
    // }
    // else if(this.state.icon === "04d"){
    //     document.body.style.backgroundImage="url('./background_images/04d.jpg')";
    // }
    // else if(this.state.icon === "04n"){
    //     document.body.style.backgroundImage="url('./background_images/04n.jpg')";
    // }
    // else if(this.state.icon === "09d"){
    //     document.body.style.backgroundImage="url('./background_images/09n.jpg')";
    // }
    // else if(this.state.icon === "09n"){
    //     document.body.style.backgroundImage="url('./background_images/09n.jpg')";
    // }
    // else if(this.state.icon === "10d"){
    //     document.body.style.backgroundImage="url('./background_images/10d.jpg')";
    // }
    // else if(this.state.icon === "10n"){
    //     document.body.style.backgroundImage="url('./background_images/10n.jpg')";
    // }
    // else if(this.state.icon === "11d"){
    //     document.body.style.backgroundImage="url('./background_images/11d.jpg')";
    // }
    // else if(this.state.icon === "11n"){
    //     document.body.style.backgroundImage="url('./background_images/11n.jpg')";
    // }
    // else if(this.state.icon === "13d"){
    //     document.body.style.backgroundImage="url('./background_images/13d.jpg')";
    // }
    // else if(this.state.icon === "13n"){
    //     document.body.style.backgroundImage="url('./background_images/13n.jpg')";
    // }
    // else if(this.state.icon === "50d"){
    //     document.body.style.backgroundImage="url('./background_images/50d.jpg')";
    // }
    // else if(this.state.icon === "50n"){
    //     document.body.style.backgroundImage="url('./background_images/50n.jpg')";
    // }
}


  componentDidMount() { 
 
      let currentComponent = this;
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
           
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+ApiKey+"")
           .then((response) => {
            if (response.status === 400 || response.status === 500 || response.status === 404) {
              console.log("please enter valid city");
            }
              console.log(response);
              currentComponent.setState({
                latitude: response.data.coord.lat,
                longitude: response.data.coord.lon,
                city: `${response.data.name}, ${response.data.sys.country}` ,
                temp_before:Math.floor(response.data.main.temp - 273.15),
                feels: Math.floor(response.data.main.feels_like - 273.15),
                date_time: moment.unix(response.data.dt).format('MMMM Do YYYY'),
                description: response.data.weather[0].description,
                icon:response.data.weather[0].icon,
                day:moment.unix(response.data.dt).format('dddd')
              });
            //  console.log(this.state.latitude);
          });  
        
          
        });
       
        this.setBackground();
      }
      
 
    };
    
  

  calCelcius(temp) {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  }
  

  getWeather = (e) => {
    e.preventDefault();
    const input_city = e.target.elements.city.value;
 
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+input_city+"&appid="+ApiKey+"")
      
      .then((response) => {
        if (response.status === 400 || response.status === 500 || response.status === 404) {
          console.log("please enter valid city");
        }
        console.log("inside get weather");
        console.log(response);
        // let list = this.state.visited_cities;
        // const newItem = document.getElementById("addInput");
        // const form = document.getElementById("addCityForm");
        
        
        this.setState({
          city: `${response.data.name}, ${response.data.sys.country}`,
          temp_before: this.calCelcius(response.data.main.temp),
          date_time: moment.unix(response.data.dt).format('MMMM Do YYYY'),
          description: response.data.weather[0].description,
          feels: Math.floor(response.data.main.feels_like - 273.15),
          latitude : response.data.coord.lat,
          longitude : response.data.coord.lon,
          icon:response.data.weather[0].icon,
          day:moment.unix(response.data.dt).format('dddd'),
          
        });
        // if(newItem !== ''){
        //   list.push(newItem)
        //   this.setState({
        //     visited_cities:list
        //   });
        //   newItem.classList.remove("is-danger");
        //   form.reset();
       
        // }
        // else{ 
        //   newItem.classList.add("is-danger");

        // }
        
      })
      // console.log(this.state.visited_cities)
      console.log(this.state.icon);
      this.setBackground();
     
  };
  // handleInputChange = (event) =>{
  //   const userSearch = event.target.value;
  //   this.setState({
  //     q:userSearch
  //   });
  // };

  render() {
    const { name } = this.state;
    
    if(name){
      return (
        <div id="main"  >
          
          <WeatherForm 
          loadweather={this.getWeather} 
          error={this.state.error} 
          // handleInputChange={this.handleInputChange}
          // result={this.state.visited_cities}
          // val={this.value}
          // refe = {this.target}
          />
     
          <div className="row lw mt-3">
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <WeatherCard 
                      city={this.state.city}
                      weather_icon={this.state.icon}
                      temperature={this.state.temp_before}
                      description={this.state.description}
                      feelsLike ={this.state.feels}
                      dateTime = {this.state.date_time}
                      Day={this.state.day}
                
                    />

                  </div>

                <div className="col-md-7 col-lg-6 col-sm-12"> 
                  <div className="cardline">
                      <div className="card-body">
                        <LineChart
                          lat ={this.state.latitude}
                          lon ={this.state.longitude}
                        /><br></br>
                        <p className="graphnames">X-axis: Time , Y-axis:Temperature in Celcius</p>
                      </div>
                  </div>
                </div>
            </div>
            
                <div className="row">
                    <Forecast
                      lat ={this.state.latitude}
                      lon ={this.state.longitude}
                     
                    />
              
                </div>
        </div>
     
      );
    }
    else{
      return (
        <div id="main"  >
          <WeatherForm loadweather={this.getWeather} error={this.state.error} />
          <div className="row lw mt-3">
                <div className="col-md-12 col-lg-6 col-sm-12">
                    <WeatherCard 
                      city={this.state.city}
                      weather_icon={this.state.icon}
                      temperature={this.state.temp_before}
                      description={this.state.description}
                      feelsLike ={this.state.feels}
                      dateTime = {this.state.date_time}
                      Day={this.state.day}
                
                    />
                  </div>

                <div className="col-md-7 col-lg-5 col-sm-12"> 
                  <div className="cardline">
                      <div className="card-body">
                        <LineChart
                          lat ={this.state.latitude}
                          lon ={this.state.longitude}
                        /><br></br>
                        <p className="graphnames">X-axis: Time , Y-axis:Temperature in Celcius</p>
                      </div>
                  </div>
                </div>
            </div>
                <div className="row">
                    <Forecast
                    lat ={this.state.latitude}
                    lon ={this.state.longitude}
                    />
              </div>
          
          </div>
      );

    }
  }
}
    
    
export default Weather;
