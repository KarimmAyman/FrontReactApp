import { useEffect } from "react";
import { Link } from "react-router-dom";
import logoActivities from "../../../assets/LogoActivities.svg";
import "./Last.css";
import ParentFooter from "../../../Components/Footer/ParentFooter";

const Last = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
  }, []);

  return (
    <>
      <section className="activity-detail-hero">
        <div className="activity-detail-hero-content">
          <h1>Activity details</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/activities">/ Activities & Opportunities</Link>
            <Link to="/Dess">/ Activities</Link>/ Activity details
          </div>
        </div>
      </section>

      <div className="activity-detail-container">
        <div className="organizer-card">
          <div className="organizer-logo-wrapper">
            <div className="organizer-logo">
              <img src={logoActivities} alt="IEEE logo" />
            </div>
          </div>
          <div className="organizer-details">
            <h2 className="organizer-name">IEEE</h2>
            <div className="organizer-contact">
              <div className="contact-entry">
                <i className="fas fa-link"></i>
                <a href="https://instagram.com" className="contact-link">
                  https://instagram.com
                </a>
              </div>
              <div className="contact-entry">
                <i className="fas fa-phone"></i>
                <span>(406) 555-0120</span>
              </div>
              <div className="contact-entry">
                <i className="fas fa-envelope"></i>
                <a href="mailto:career@instagram.com" className="contact-link">
                  career@instagram.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="activity-content">
          <div className="activity-section">
            <h3 className="section-title">Activity Description</h3>
            <div className="section-content">
              <p>
                Integer aliquet pretium consequat. Donec et sapien id leo
                accumsan pellentesque eget maximus tellus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Vestibulum vel sapien eget
                urna tincidunt varius ac a erat.
              </p>
              <p>
                Nam dapibus consectetur erat in euismod. Cras urna augue, mollis
                venenatis augue sed, porttitor aliquet nibh. Fusce scelerisque
                laoreet purus ac ultrices. Nam sit amet eros at risus pharetra
                faucibus non at metus.
              </p>
            </div>
          </div>

          <div className="activity-section share-section">
            <span className="share-label">Share this activity:</span>
            <div className="social-buttons">
              <a href="#" className="social-button facebook">
                Facebook
              </a>
              <a href="#" className="social-button twitter">
                Twitter
              </a>
              <a href="#" className="social-button pinterest">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="activity-info-cards">
          <div className="info-card">
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <i className="far fa-calendar"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">ACTIVITY POSTED:</span>
                  <span className="info-value">14 June, 2021</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-stopwatch"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">EXPIRES IN:</span>
                  <span className="info-value">14 July, 2021</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">LOCATION:</span>
                  <span className="info-value">New York, USA</span>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <div className="info-content">
                  <span className="info-label">ACTIVITY TYPE:</span>
                  <span className="info-value">Technology</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card social-card">
            <p>Follow us on:</p>
            <div className="social-icons">
              <a href="#" className="social-icon-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon-link">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <ParentFooter />
    </>
  );
};

export default Last;
