import { Link } from "react-router-dom";
import "./ParentFooter.css";
import Aoun1 from "../../assets/Aoun1.svg";

const ParentFooter = () => {
  // Changed from HomeFooter to ParentFooter
  return (
    <footer className="aoun-footer">
      <div className="aoun-footer-content">
        {/* Logo Section */}
        <div className="aoun-footer-logo-section">
          <img src={Aoun1} alt="Aoun Logo" className="aoun-footer-logo" />
          <p className="aoun-footer-description">
            Aoun is an online aggregator. We do not participate in transactions
            between our users, they create and manage all requests within our
            app independently
          </p>
          <div className="aoun-footer-social">
            <Link to="#" className="aoun-social-icon">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="aoun-social-icon">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="aoun-social-icon">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="aoun-social-icon">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="aoun-footer-section">
          <h3>Services</h3>
          <div className="aoun-footer-links">
            <Link to="#">
              <i className="fas fa-check"></i> Ride
            </Link>
            <Link to="#">
              <i className="fas fa-check"></i> Drive
            </Link>
            <Link to="#">
              <i className="fas fa-check"></i> Find Nearby Housing
            </Link>
            <Link to="#">
              <i className="fas fa-check"></i> Activities & Opportunities
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="aoun-footer-section">
          <h3>Company</h3>
          <div className="aoun-footer-links">
            <Link to="#">About us</Link>
            <Link to="#">Newsroom</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Our offerings</Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="aoun-footer-section">
          <h3>Subscribe Our Newsletter</h3>
          <p className="aoun-footer-description">
            Corporate business typically refers to large-scale operations that
            streamline services for efficiency and reliability.
          </p>
          <div className="aoun-footer-subscribe">
            <input type="email" placeholder="Enter Email" />
            <button type="submit" className="aoun-submit-btn">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="aoun-footer-bottom">
        <div className="aoun-footer-bottom-left">
          © Aoun 2024 | All Rights Reserved
        </div>
        <div className="aoun-footer-bottom-right">
          <Link to="#">Terms & Condition</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Help center</Link>
        </div>
      </div>
    </footer>
  );
};

export default ParentFooter;
