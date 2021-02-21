// importing required modules
import React, { Component } from "react";
import "../App.css";
import WeatherForm from "./form.js";
import WeatherCard from "./Weather_card";
require("dotenv").config();

const ApiKey = process.env.REACT_APP_API_KEY;
class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temperature: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      description: "",
      error: false,
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

  calCelcius(temp) {
    let celcius = Math.floor(temp - 273.15);
    return celcius;
  }
  getWeatherIcon(icons, rangeID) {
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

  getWeather = async (e) => {
    e.preventDefault();
    const input_city = e.target.elements.city.value;
    if (input_city) {
      const Response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=${ApiKey}`
      );
      const response_data = await Response.json();
      console.log(response_data);
      console.log(response_data.main.temp);
      console.log(response_data.weather[0].description);
      console.log(response_data.main.temp_min);
      console.log(response_data.temp_max);

      this.setState({
        city: `${response_data.name}, ${response_data.sys.country}`,
        temperature: this.calCelcius(response_data.main.temp),
        minTemp: this.calCelcius(response_data.main.temp_min),
        maxTemp: this.calCelcius(response_data.main.temp_max),
        description: response_data.weather[0].description,
      });
      this.getWeatherIcon(this.weatherICON, response_data.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <div className="weather_page">
        <WeatherForm loadweather={this.getWeather} error={this.state.error} />
        <WeatherCard
          city={this.state.city}
          country={this.state.country}
          weather_icon={this.state.icon}
          temperature={this.state.temperature}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default Weather;
