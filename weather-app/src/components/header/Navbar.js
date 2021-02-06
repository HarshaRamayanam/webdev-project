import React from 'react'
import "./Navbar.css"
// import { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../images/weather_icon.png"


const navbar = () =>{

        return(
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src= {logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="Weather logo"
                        />{' '} Weather
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#Hike_Trails">Hike_Trails</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <div id="flex-container">
                        <div>
                        <h3>Get weather forecast </h3>
                        <input type="text" placeholder="Enter city name"  className="searchBar" />
                        </div>
                    </div>
                </div>
            </div>
        )   
    }

export default navbar