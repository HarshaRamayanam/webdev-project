// import Button from 'react-bootstrap/Button';
import React from "react";
// import { Navbar, Nav, NavItem, Button,NavDropdown, FormControl,MenuItem,Form,Container } from 'react-bootstrap';
import "./App.css";
import logo from "./images/weather_icon.png";

// importing components
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/hike-trails/HikeTrailsPage";
import WeatherPage from "./components/weather/WeatherPage";

// importing react modules required to redirect pages
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Weather logo"
              />
            </Navbar.Brand>
            <Navbar.Brand as={Link} to="/hike-trails"></Navbar.Brand>
            <Navbar.Brand as={Link} to="/weather"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/"></Nav.Link>
                <Nav.Link as={Link} to="/hike-trails">
                  Hike-Trails
                </Nav.Link>
                <Nav.Link as={Link} to="/weather">
                  Weather
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
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
