import { Link } from "react-router-dom";
import "./Card.css";
import UP from "../../assets/UP.svg";

function Card() {
  return (
    <div className="job-card">
      <div className="job-card-content">
        <div className="job-card-info">
          <div className="job-card-logo">
            <img src={UP} alt="Company Logo" />
          </div>
          <div className="job-card-details">
            <div className="job-card-header">
              <h3 className="job-title">Senior UX Designer</h3>
              <div className="job-status">
                <span className="status-badge">Live</span>
              </div>
            </div>
            <div className="job-card-meta">
              <div className="job-meta-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Australia</span>
              </div>
              <div className="job-meta-item">
                <i className="fas fa-dollar-sign"></i>
                <span>$30K-$35K</span>
              </div>
              <div className="job-meta-item">
                <i className="fas fa-calendar"></i>
                <span>4 days remaining</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-card-action">
          <Link to="/Details" className="job-view-btn">
            View Details <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
