import { Link } from "react-router-dom";

function HeaderNav() {
  const navStyle = {
    color: "white",
  };

  return (
    <div className="navbar">
      <nav>
        <br />
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>Home</li>
          </Link>

          <Link style={navStyle} to="/weather">
            <li>Weather</li>
          </Link>

          <Link style={navStyle} to="/hike-trails">
            <li>HikeTrails</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderNav;
