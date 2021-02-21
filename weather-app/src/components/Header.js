import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const navStyle = {
    color: "white",
  };

  return (
    <header>
      <Router>
        <div className="navbar">
          <nav>
            <br />
            <h3>Logo</h3>
            <ul className="nav-links">
              <Link
                style={navStyle}
                to="/"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <li>Home</li>
              </Link>

              <Link
                style={navStyle}
                to="/weather"
                onClick={() => {
                  window.location.href = "/weather";
                }}
              >
                <li>Weather</li>
              </Link>

              <Link
                style={navStyle}
                to="/hike-trails"
                onClick={() => {
                  window.location.href = "/hike-trails";
                }}
              >
                <li>HikeTrails</li>
              </Link>
            </ul>
          </nav>
        </div>
      </Router>
    </header>
  );
}

export default Header;