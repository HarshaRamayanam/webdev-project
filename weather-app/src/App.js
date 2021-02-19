import React from "react";
import "./App.css";

// importing components
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/HikeTrailsPage";
import WeatherPage from "./components/WeatherPage";
import HeaderNav from "./components/HeaderNav.js";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

// importing react modules required to redirect pages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hike-trails" component={HikeTrailsPage} />
        <Route exact path="/weather" component={WeatherPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
