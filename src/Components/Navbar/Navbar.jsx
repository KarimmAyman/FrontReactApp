import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/mainAou.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Aoun" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-icon ${isOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/properties" className="nav-link">
            SERVICES
          </Link>
          <Link to="/corporates" className="nav-link">
            CORPORATES
          </Link>
          <Link to="/offerings" className="nav-link">
            OUR OFFERINGS
          </Link>

          
          <Link to="/HouseRouting" className="nav-link">HOUSE DETAILS</Link>
          <Link to="/Activities" className="nav-link">ACTIVITIES</Link>


          {/* <Link to="/about" className="nav-link">
            <div className="nav-dropdown">
              <span className="nav-link">ABOUT US</span>
              <i className="fas fa-chevron-down"></i>
            </div>
          </Link> */}
          {/* About Us Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={toggleAboutDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="nav-link dropdown-toggle">
              ABOUT US
              <i
                className={`fas fa-chevron-down ${
                  isAboutDropdownOpen ? "rotate" : ""
                }`}
              ></i>
            </button>

            {isAboutDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/about" className="dropdown-item">
                  About Us
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/success-story" className="dropdown-item">
                  Success Story
                </Link>
                <Link to="/blog" className="dropdown-item">
                  Blog
                </Link>
                <Link to="/faq" className="dropdown-item">
                  FAQ
                </Link>
                <Link to="/contact" className="dropdown-item">
                  Contact
                </Link>
              </div>
            )}
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
