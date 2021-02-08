import React from 'react';

import { nav } from 'react-bootstrap';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom';

function Nav() {

    const navStyle ={
        color:'white'
    }
   
    return(
        <Router>
            <div className="navbar">
                <nav>
                    <br />
                    <h2>Check weather and go for the Hike</h2>
                    <ul className="nav-links">
                        <Link style={navStyle} to="/Weather" onClick={() => {window.location.href="/Weather"}}>
                             <li>Weather</li>
                        </Link>
                        <Link style={navStyle} to="/" onClick={() => {window.location.href="/"}}>
                            <li>Home</li>
                        </Link>
                       
                    </ul>
                </nav>
            </div>
        </Router>
        );   
    }
    

export default Nav;