import { Link } from "react-router-dom";
import "./stylesheets/HeaderNav.css";
import image from "../image/logo.jpg";

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
          <img src={image} alt="hike_image_ with_man_and_mountain" width="50px" height="50px" />
        <ul>
          <Link style={linkStyle} to="/">
            <li>
              <span>Home</span>
            </li>
          </Link>

          <Link style={linkStyle} to="/weather">
            <li>
              <span>Weather</span>
            </li>
          </Link>

          <Link style={linkStyle} to="/hike-trails">
            <li>
              <span>HikeTrails</span>
            </li>
          </Link>
          <Link style={linkStyle} to="/contact">
            <li>
              <span>Contact</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default HeaderNav;
