import React from "react";
import "./App.css";
// importing components
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/HikeTrailsPage";
import WeatherPage from "./components/WeatherPage";
import Header from "./components/Header.js";
import ErrorPage from "./components/ErrorPage";

// importing react modules required to redirect pages
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hike-trails" component={HikeTrailsPage} />
        <Route exact path="/weather" component={WeatherPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
