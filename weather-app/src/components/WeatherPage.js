// importing required modules
import React, { Component } from "react";
import "../App.css";
import WeatherForm from "./form/form.js";
import WeatherCard from "./Weather_page/Weather_card";
import LineChart from "./chart/lineChart";
import "./Weather_page/WeatherCard.css";
import "./chart/chart.css";
import "./form/form.css";
import Forecast from "./forecast/Forecast";
import "./forecast/Forecast.css";
import axios from "axios";
import moment from "moment";

require("dotenv").config();

const ApiKey = process.env.REACT_APP_API_KEY;
class Weather extends Component {
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
      icon_id: undefined,
      feels: undefined,
      daily_info: [],
      day: undefined,
    };
    this.weatherICON = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  getWeatherIcon(rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.weatherICON.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.weatherICON.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherICON.Rain });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.weatherICON.Snow });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: this.weatherICON.Atmosphere });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherICON.Clouds });
        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherICON.Clear });
        break;
      default:
        this.setState({ icon: this.weatherICON.Clouds });
    }
  }

  componentDidMount() {
    let currentComponent = this;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        axios
          .get(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
              lat +
              "&lon=" +
              lon +
              "&appid=" +
              ApiKey +
              ""
          )
          .then((response) => {
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
      });
    }
    // if(location !== null) {
    //   this.state.latitude = location.lat
    //   this.state.longitude = location.lng
    // }
  }

  calCelcius(temp) {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  }

  getWeather = async (e) => {
    e.preventDefault();
    const input_city = e.target.elements.city.value;

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          input_city +
          "&appid=" +
          ApiKey +
          ""
      )

      .then((response) => {
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
      });
    console.log(this.state.latitude, this.state.longitude);
  };
  render() {
    const { name } = this.state;

    if (name) {
      return (
        <div className="main">
          <WeatherForm loadweather={this.getWeather} error={this.state.error} />

          <WeatherCard
            city={this.state.city}
            weather_icon={this.state.icon}
            temperature={this.state.temp_before}
            description={this.state.description}
            feelsLike={this.state.feels}
            dateTime={this.state.date_time}
            Day={this.state.day}
          />
          <div className="row lw mt-4">
            <div className="col-md-7 col-lg-6 col-sm-12">
              <div className="cardline">
                <div className="card">
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
            <div className="col-md-7 col-lg-6 col-sm-12">
              <div className="row">
                <Forecast
                  lat={this.state.latitude}
                  lon={this.state.longitude}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <WeatherForm loadweather={this.getWeather} error={this.state.error} />

          <WeatherCard
            city={this.state.city}
            weather_icon={this.state.icon}
            temperature={this.state.temp_before}
            description={this.state.description}
            feelsLike={this.state.feels}
            dateTime={this.state.date_time}
            Day={this.state.day}
          />

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

          <div className="row">
            <Forecast lat={this.state.latitude} lon={this.state.longitude} />
          </div>
        </div>
      );
    }
  }
}

export default Weather;
