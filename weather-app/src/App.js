
// import Button from 'react-bootstrap/Button';
import React from "react";
import "./App.css";
import 'weather-icons/css/weather-icons.css';
// importing components
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/HikeTrailsPage";
import WeatherPage from "./components/WeatherPage";
import Nav from './components/Header.js';

// importing react modules required to redirect pages
import { Switch, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hike-trails" component={HikeTrailsPage} />
            <Route exact path="/weather" component={WeatherPage} />
            <Route
              render={() => {
                return <p>Page not found</p>;
              }}
            />
          </Switch>
        </div>

      </div>
    </BrowserRouter>

  );
}
export default App;
