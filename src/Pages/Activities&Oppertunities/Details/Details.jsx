import { useEffect } from "react";
import "./Details.css";
import { Link, useNavigate } from "react-router-dom";
import ParentFooter from "../../../Components/Footer/ParentFooter";

const Details = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <section className="opportunity-hero">
        <div className="opportunity-hero-content">
          <h1>Opportunities details</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/activities">/ Activities & Opportunities</Link>
            <Link to="/opportunities">/ Opportunities </Link>
            <Link to="/details">/ Opportunities details</Link>
          </div>
        </div>
      </section>

      <div className="opportunity-details-container">
        <div className="opportunity-card">
          <div className="company-logo">
            <div className="logo-inner">
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <div className="opportunity-info">
            <div className="opportunity-title">
              <h2>Senior UX Designer</h2>
              <div className="opportunity-tags">
                <span className="tag featured">Featured</span>
                <span className="tag full-time">Full Time</span>
              </div>
            </div>

            <div className="company-contact">
              <div className="contact-item">
                <i className="fas fa-link"></i>
                <a href="https://instagram.com" className="contact-link">
                  https://instagram.com
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(406) 555-0120</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:career@instagram.com" className="contact-link">
                  career@instagram.com
                </a>
              </div>
            </div>
          </div>

          <div className="opportunity-action">
            <button className="apply-button" onClick={() => navigate("/")}>
              Apply Now
            </button>
            <p className="expiry-info">
              Job expires on <span className="expiry-date">June 30, 2021</span>
            </p>
          </div>
        </div>

        <div className="opportunity-description">
          <h3>Job Description</h3>
          <div className="description-content">
            <p>
              We&apos;re looking for a passionate UX Designer to design
              intuitive and engaging digital products. You will be responsible
              for creating user-centered designs across all of our platforms.
              This role combines design thinking, user research, and a deep
              understanding of user needs to craft exceptional experiences.
            </p>
            <p>
              As part of our design team, you&apos;ll collaborate closely with
              product managers, engineers, and other stakeholders to ensure our
              products deliver a seamless and cohesive user experience.
            </p>
          </div>
        </div>

        <div className="opportunity-share">
          <span>Share this job:</span>
          <div className="share-buttons">
            <a href="#" className="share-button facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="share-button twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="share-button linkedin">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="opportunity-details-card">
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">
                <i className="far fa-calendar"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">JOB POSTED:</span>
                <span className="detail-value">14 June, 2021</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">JOB EXPIRE IN:</span>
                <span className="detail-value">14 July, 2021</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">LOCATION:</span>
                <span className="detail-value">New York, USA</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">JOB TYPE:</span>
                <span className="detail-value">Full Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ParentFooter />
    </>
  );
};

export default Details;
