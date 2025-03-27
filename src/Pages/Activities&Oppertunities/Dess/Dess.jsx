import { useEffect } from "react";
import "./Dess.css";
import UP from "../../../assets/UP.svg";
import { Link, useNavigate } from "react-router-dom";
import logoActivities from "../../../assets/LogoActivities.svg";
import ParentFooter from "../../../Components/Footer/ParentFooter";

const Dess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <section className="activity-hero">
        <div className="activity-hero-content">
          <h1>Activities</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/activities">
              / Activities & Opportunities 
            </Link>
          </div>
        </div>
      </section>

      <div className="activity-details-container">
        <div className="activity-organizer">
          <div className="organizer-logo">
            <img src={logoActivities} alt="logo" />
          </div>
          <div className="organizer-info">
            <h3>IEEE</h3>
            <p>Kafrelsheikh University</p>
          </div>
        </div>

        <div className="activity-items-list">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="activity-item-card" key={item}>
              <div className="activity-item-info">
                <div className="activity-item-img">
                  <img src={UP} alt="UP" />
                </div>
                <div className="activity-item-details">
                  <div className="activity-item-header">
                    <h3>Senior UX Designer</h3>
                    <p>Live</p>
                  </div>
                  <div className="activity-item-meta">
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Australia
                    </p>
                    <p>
                      <i className="fas fa-dollar-sign"></i>$30K-$35K
                    </p>
                    <p>
                      <i className="fas fa-calendar"></i>4 Days Remaining
                    </p>
                  </div>
                </div>
              </div>
              <div className="activity-item-action">
                <button onClick={() => navigate("/Last")}>
                  Apply Now <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ParentFooter />
    </>
  );
};

export default Dess;
