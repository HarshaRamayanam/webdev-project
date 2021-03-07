// importing required modules
import React, { Component,useContext } from "react";
import "../App.css";
import WeatherForm from "./weather_form/WeatherForm.js";
import WeatherCard from "./Weather_page/Weather_card";
import LineChart from "./chart/lineChart";
import "./Weather_page/WeatherCard.css";
import "./chart/chart.css";
import "./weather_form/WeatherForm.css";
import Forecast from "./forecast/Forecast";
import "./forecast/Forecast.css";
import axios from "axios";
import moment from "moment";
import one_day from "./background_images/01d.jpg";
import one_night from "./background_images/01n.jpg";
import two_day from "./background_images/02d.jpg";
import ten_day from "./background_images/10d.jpg";
import two_night from "./background_images/02n.jpg";
import three_day from "./background_images/03d.jpg";
import three_night from "./background_images/03n.jpg";
import four_day from "./background_images/04d.jpg";
import four_night from "./background_images/04n.jpg";
import nine_day from "./background_images/09d.jpg";
import nine_night from "./background_images/09n.jpg";
import ten_night from "./background_images/10n.jpg";
import eleven_day from "./background_images/11d.jpg";
import eleven_night from "./background_images/11n.jpg";
import thirteen_day from "./background_images/13d.jpg";
import thirteen_night from "./background_images/13n.jpg";
import fifty_day from "./background_images/50d.jpg";
import fifty_night from "./background_images/50n.jpg";
import mist from "./background_images/mist.jpg";
import "../App.css";
import { BgContext } from "./ContextStore";


require("dotenv").config();

const ApiKey = process.env.REACT_APP_API_KEY;

class Weather extends Component {
  // const [location, setLocation] = useContext(LocationContext);
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temp_before: undefined,
      description: "",
      latitude: undefined,
      longitude: undefined,
      date_time: undefined,
      feels: undefined,
      daily_info: [],
      day: undefined,
      dir: "",
      
    };
  }
 setBackground = (ICON) => {
   switch(ICON){
      case "01d":
          this.setState({
              dir: one_day
            });
          break;
      case "01n":
          this.setState({
                  dir: one_night
            });
            break;
      case "02d":
          this.setState({
                 dir: two_day
               });
            break;
      case "02n":
          this.setState({
            dir: two_night,
          });
          break;
      case "03d":
          this.setState({
            dir: three_day,
          });
          break;
      case "03n":
          this.setState({
            dir: three_night,
          });
          break;
      case "04d":
          this.setState({
            dir: four_day,
          });
          break;
      case "04n":
          this.setState({
            dir: four_night,
          });
          break;
      case "09d":
          this.setState({
            dir: nine_day,
          });
          break;
      case "09n":
          this.setState({
            dir: nine_night,
          });
          break;
      case "10n":
          this.setState({
            dir: ten_night,
          });
          break;
      case "10d":
          this.setState({
            dir: ten_day,
          });
          break;
      case "11d":
          this.setState({
            dir: eleven_day,
          });
          break;
      case "11n":
          this.setState({
            dir: eleven_night,
          });
          break;
      case "13d":
          this.setState({
            dir: thirteen_day,
          });
          break;
      case "13n":
          this.setState({
            dir: thirteen_night,
          });
          break;
      case "50d":
          this.setState({
            dir: fifty_day,
          });
          break;
      case "50n":
          this.setState({
            dir: fifty_night,
          });
          break;
      case "mist":
          this.setState({
            dir: mist,
          });
          break;
      
      default:
        break;


   }

  }

  componentDidMount = () => {
    try {
      let currentComponent = this;
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function (position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;

          const response = await axios.get(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              lat +
              "&lon=" +
              lon +
              "&appid=" +
              ApiKey +
              ""
          );
          if (
            response.status === 400 ||
            response.status === 500 ||
            response.status === 404
          ) {
            console.log("please enter valid city");
          }
         
          currentComponent.setState({
            latitude: response.data.coord.lat,
            longitude: response.data.coord.lon,
            city: `${response.data.name}, ${response.data.sys.country}`,
            temp_before: Math.floor(response.data.main.temp - 273.15),
            feels: Math.floor(response.data.main.feels_like - 273.15),
            date_time: moment.unix(response.data.dt).format("MMMM Do YYYY"),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            day: moment.unix(response.data.dt).format("dddd"),
           
          });
          
        });
      }
     
    } catch (err) {
      console.log(err);
    }

    
  };
  calCelcius(temp) {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const input_city = e.target.elements.city.value;

    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input_city +
        "&appid=" +
        ApiKey +
        ""
    );
    if (
      response.status === 400 ||
      response.status === 500 ||
      response.status === 404
    ) {
      console.log("please enter valid city");
    }
    
    console.log(response);

    this.setState({
      city: `${response.data.name}, ${response.data.sys.country}`,
      temp_before: this.calCelcius(response.data.main.temp),
      date_time: moment.unix(response.data.dt).format("MMMM Do YYYY"),
      description: response.data.weather[0].description,
      feels: Math.floor(response.data.main.feels_like - 273.15),
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
      icon: response.data.weather[0].icon,
      day: moment.unix(response.data.dt).format("dddd"),
      
    });
  
    if (this.state.icon) {
      this.setBackground(this.state.icon);
    }
  };

  render() {
    const { name } = this.state;

    if (name) {
      return (
        <div
          id="root"
          style={{
            backgroundImage: `url(${this.state.dir})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <WeatherForm loadweather={this.getWeather} error={this.state.error} />

          <div className="row lw mt-3">
            <div className="col-md-12 col-lg-6 col-sm-12">
              <WeatherCard
                city={this.state.city}
                weather_icon={this.state.icon}
                temperature={this.state.temp_before}
                description={this.state.description}
                feelsLike={this.state.feels}
                dateTime={this.state.date_time}
                Day={this.state.day}
                time={this.state.time}
              />
            </div>

            <div className="col-md-7 col-lg-6 col-sm-12">
              <div className="cardline">
                <div className="card-body">
                  <LineChart
                    lat={this.state.latitude}
                    lon={this.state.longitude}
                  />
                  <br></br>
                  <p className="graphnames">
                    X-axis: Time , Y-axis:Temperature in Celcius
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <Forecast lat={this.state.latitude} lon={this.state.longitude} />
          </div>
        </div>
      );
    } else {
      return (
        <div
          id="main"
          style={{
            backgroundImage: `url(${this.state.dir})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <WeatherForm loadweather={this.getWeather} error={this.state.error} />
          <div className="row lw mt-3">
            <div className="col-md-12 col-lg-6 col-sm-12">
              <WeatherCard
                city={this.state.city}
                weather_icon={this.state.icon}
                temperature={this.state.temp_before}
                description={this.state.description}
                feelsLike={this.state.feels}
                dateTime={this.state.date_time}
                Day={this.state.day}
                time={this.state.time}
              />
            </div>

            <div className="col-md-7 col-lg-5 col-sm-12">
              <div className="cardline">
                <div className="card-body">
                  <LineChart
                    lat={this.state.latitude}
                    lon={this.state.longitude}
                  />
                  <br></br>
                  <p className="graphnames">
                    X-axis: Time , Y-axis:Temperature in Celcius
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Forecast lat={this.state.latitude} lon={this.state.longitude} />
          </div>
        </div>
      );
    }
  }
}

export default Weather;
