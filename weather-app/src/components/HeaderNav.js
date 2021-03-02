import { Link } from "react-router-dom";
import "./stylesheets/HeaderNav.css";

function HeaderNav() {
  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    textTransform: "uppercase",
    display: "block",
    fontWeight: 600,
    letterSpacing: "0.2em",
    fontSize: "14px",
  };

  return (
    <>
      <nav className="navbar">
        <img src="#" alt="Logo" />
        <ul>
          <Link style={linkStyle} to="/">
            <li>Home</li>
          </Link>

          <Link style={linkStyle} to="/weather">
            <li>Weather</li>
          </Link>

          <Link style={linkStyle} to="/hike-trails">
            <li>HikeTrails</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
