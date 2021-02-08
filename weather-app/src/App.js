<<<<<<< HEAD
// import Button from 'react-bootstrap/Button';
import React from "react";
// import { Navbar, Nav, NavItem, Button,NavDropdown, FormControl,MenuItem,Form,Container } from 'react-bootstrap';
import "./App.css";
import logo from "./images/weather_icon.png";

// importing components
import HomePage from "./components/HomePage";
import HikeTrailsPage from "./components/HikeTrailsPage";
import WeatherPage from "./components/WeatherPage";

// importing react modules required to redirect pages
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar expand="lg" bg="dark" variant="dark">
            <Nav.Link as={Link} to="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Weather logo"
              />
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
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
=======
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch,
  Route,
 } from 'react-router-dom';

import Nav from './Nav';
import Weather from './Weather';

function App() {
  return (
          <Router> 
              <div className="App">
                  <Nav />
                  <Switch>
                    <Route  path="/" exact component={Home} />
                    <Route path="/Weather" component={Weather} />
                </Switch>
>>>>>>> Updated old pages by adding Navbar and links. Now links are navigating to other pages

              </div>
          </Router>
                
    );   
}
const Home = () =>(
  <div>
    <h2>Home Page</h2>
  </div>
);
export default App;
