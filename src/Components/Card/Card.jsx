import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";
import UP from "../../assets/UP.svg";

function Card({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-content">
        <div className="job-card-info">
          <div className="job-card-logo">
            <img src={UP} alt="Company Logo" />
          </div>
          <div className="job-card-details">
            <div className="job-card-header">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-status">
                <span className="status-badge">Live</span>
              </div>
            </div>
            <div className="job-card-meta">
              <div className="job-meta-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{job.location}</span>
              </div>
              <div className="job-meta-item">
                <i className="fas fa-dollar-sign"></i>
                <span>{job.salary}</span>
              </div>
              <div className="job-meta-item">
                <i className="fas fa-calendar"></i>
                <span>{job.expiryDate?.split("T")[0]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="job-card-action">
          <Link to={`/details/${job.id}`} className="job-view-btn">
            View Details <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Card;
