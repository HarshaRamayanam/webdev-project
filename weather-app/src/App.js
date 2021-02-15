import React from "react";
import "./App.css";
import "./components/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import Weather from "./components/WeatherPage.js";
import HomePage from "./components/HomePage.js";
import HikeTrailsPage from "./components/HikeTrailsPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Weather" component={Weather} />
          <Route path="/HikeTrails" component={HikeTrailsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
