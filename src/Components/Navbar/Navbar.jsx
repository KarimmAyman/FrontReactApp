import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import UserDropdown from "../UserDropdown/UserDropdown";
import "./Navbar.css";
import logo from "../../assets/mainAou.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleUserDropdown = (e) => {
    e.stopPropagation();
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const closeDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  useEffect(() => {
    const closeUserDropdown = (e) => {
      if (!e.target.closest(".user-profile-icon")) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeUserDropdown);
    return () => document.removeEventListener("click", closeUserDropdown);
  }, []);

  const handleServicesClick = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
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
          <a
            href="#services"
            className="nav-link"
            onClick={handleServicesClick}
          >
            SERVICES
          </a>
          <Link to="/corporates" className="nav-link">
            CORPORATES
          </Link>
          <Link to="/offerings" className="nav-link">
            OUR OFFERINGS
          </Link>

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

        {/* Auth Section */}
        <div className="nav-auth">
          {isAuthenticated ? (
            <div className="user-profile-icon" onClick={toggleUserDropdown}>
              <Link
                to="#"
                className="profile-link"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-user"></i>
              </Link>
              {isUserDropdownOpen && <UserDropdown />}
            </div>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                Log in
              </Link>
              <Link to="/signup" className="signup-btn">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
