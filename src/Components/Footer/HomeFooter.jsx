import { Link } from "react-router-dom";
import "./HomeFooter.css";
import Aoun1 from "../../assets/Aoun1.png";

const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-grid">
        {/* Left Section */}
        <div className="footer-left">
          <img src={Aoun1} alt="Aoun Logo" className="footer-logo" />
          <p className="footer-description">
            Aoun is an online aggregator. We do not participate in transactions
            between our users, they create and manage all requests within our
            app independently
          </p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>
              <span className="check-icon">✓</span> Ride
            </li>
            <li>
              <span className="check-icon">✓</span> Drive
            </li>
            <li>
              <span className="check-icon">✓</span> Find Nearby Housing
            </li>
            <li>
              <span className="check-icon">✓</span> Activities & Opportunities
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-company">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/newsroom">Newsroom</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/offerings">Our offerings</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Subscribe Our Newsletter</h3>
          <p>
            Corporate business typically refers to large-scale operations that
            streamline services for efficiency and reliability.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Email" />
            <button type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© Aoun 2024 | All Rights Reserved</p>
        <div className="bottom-links">
          <Link to="/terms">Terms & Condition</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/help">Help center</Link>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
