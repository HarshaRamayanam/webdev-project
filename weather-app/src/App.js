// import Button from 'react-bootstrap/Button';
import React, { Component } from "react";
// import { Navbar, Nav, NavItem, Button,NavDropdown, FormControl,MenuItem,Form,Container } from 'react-bootstrap';
import "./App.css";

// import Navbar from "./components/header/Navbar";
// Use the following import instead of above
import WeatherNavbar from "./components/navbars/WeatherNavbar.js";

import "bootstrap/dist/css/bootstrap.min.css";

// Code by Harsha. Just to differentiate
import Link from "react-router-dom";

function App() {
  return (
    <div className="nav-container">
      <WeatherNavbar />
    </div>
  );
}

export default App;
