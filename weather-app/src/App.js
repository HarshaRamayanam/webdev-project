// import Button from 'react-bootstrap/Button';
import React from "react";
import "./App.css";
// importing components
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/HikeTrailsPage";
import WeatherPage from "./components/WeatherPage";
import Nav from './components/Nav.js';

// importing react modules required to redirect pages
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";


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
