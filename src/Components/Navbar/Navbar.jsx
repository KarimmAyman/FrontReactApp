import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Aoun" />
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/services" className="nav-link">
            SERVICES
          </Link>
          <Link to="/corporates" className="nav-link">
            CORPORATES
          </Link>
          <Link to="/offerings" className="nav-link">
            OUR OFFERINGS
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link">ABOUT US</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="nav-auth">
          <Link to="/login" className="login-btn">
            Log in
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
