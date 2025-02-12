import { Link } from "react-router-dom";
import "./Footer.css";
import Aoun1 from "../../assets/Aoun1.png";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img src={Aoun1} alt="Aoun Logo" className="footer-logo" />
          <p className="footer-description">
            Aoun is an online aggregator. We do not participate in transactions
            between our users, they create and manage all requests within our
            app independently
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Download App</h3>
          <div className="app-downloads">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} alt="Get it on Google Play" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="Download on App Store" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
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
        <div className="footer-links">
          <Link to="/terms">Terms & Condition</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/help">Help center</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
