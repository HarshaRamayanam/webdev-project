import React from "react";
import "./stylesheets/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>HIKE APP INC.</h4>
            <h6 className="list-unstyled">By:</h6>
            <p>
              <em>Shweta Korulkar</em>
              <br />
              <em>Harsha Ramayanam</em>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Powered By</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  ReactJS
                </a>
              </li>
              <li>
                <a
                  href="https://www.heroku.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Heroku
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://fontawesome.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Font Awesome
                </a>
              </li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>APIs used</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenWeatherMap
                </a>
              </li>
              <li>
                <a
                  href="https://www.kaggle.com/planejane/national-park-trails"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hike Trails
                </a>
              </li>
              <li>
                <a
                  href="https://www.mapbox.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MapBox GL
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} HIKE APP | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
