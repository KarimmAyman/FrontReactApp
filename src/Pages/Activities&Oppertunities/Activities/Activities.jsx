import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Activities.css";
import UP from "../../../assets/UP.svg";
import Illustration from "../../../assets/Illustration.svg";
import ParentFooter from "../../../Components/Footer/ParentFooter";
import { getAllJobs } from "../../../ApiServices/JobService.js"

const Activities = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);

    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="activities-hero">
        <div className="activities-hero-content">
          <h1>Activities & Opportunities</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> /{" "}
            <Link to="/activities">Activities & Opportunities</Link>
          </div>
        </div>
      </section>

      <div className="activities-container">
        <div className="feature-section">
          <div className="feature-text">
            <h1>
              Find the Perfect Activity to Enhance Your Student Experience
            </h1>
            <p>
              Discover clubs, workshops, and events that match your interests
              and help you develop valuable skills alongside your academic
              journey.
            </p>
          </div>
          <div className="feature-image">
            <img src={Illustration} alt="Student Activities" />
          </div>
        </div>

        <div className="feature-boxes">
          <div className="feature-box">
            <div className="cardoo">
              <div className="icon-wrapper">
                <i className="fas fa-users"></i>
              </div>
              <div className="feature-content">
                <h3>Student Clubs</h3>
                <p>
                  Join student-led organizations focused on academic, cultural,
                  and recreational interests.
                </p>
              </div>
            </div>
          </div>

          <div className="feature-box">
            <div className="cardoo op">
              <div className="icon-wrapper">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="feature-content">
                <h3>Job Opportunities</h3>
                <p>
                  Find part-time jobs, internships, and career opportunities
                  tailored for students.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-header title-2">
          <h2>Featured Opportunities</h2>
          <button onClick={() => navigate("/Post")}>
            Post a Job <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="opportunities-list">
          {loading ? (
            <p>Loading opportunities...</p>
          ) : (
            jobs.map((job) => (
              <div className="opportunity-card" key={job.id}>
                <div className="card-info">
                  <div className="card-img">
                    <img src={UP} alt="Company Logo" />
                  </div>
                  <div className="card-des">
                    <div className="cd-1">
                      <h3>{job.title}</h3>
                      <p>{job.isActive ? "Live" : "Expired"}</p>
                    </div>
                    <div className="cd-2">
                      <p>
                        <i className="fas fa-map-marker-alt"></i> {job.location}
                      </p>
                      <p>
                        <i className="fas fa-dollar-sign"></i> {job.minSalary} -{" "}
                        {job.maxSalary}
                      </p>
                      <p>
                        <i className="fas fa-calendar"></i> {job.daysRemaining}{" "}
                        Days Remaining
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-button">
                  <button onClick={() => navigate("/opportunities")}>
                    View Details <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="section-header">
          <h2>Student Activities</h2>
        </div>

        <div className="activities-list">
          {[1, 2, 3].map((item) => (
            <div className="activity-card" key={item}>
              <div className="card-info">
                <div className="card-img">
                  <img src={UP} alt="Activity Logo" />
                </div>
                <div className="card-des">
                  <div className="cd-1">
                    <h3>IEEE Student Chapter</h3>
                    <p>Active</p>
                  </div>
                  <div className="cd-2">
                    <p>
                      <i className="fas fa-map-marker-alt"></i> Engineering
                      Building
                    </p>
                    <p>
                      <i className="fas fa-users"></i> 50+ Members
                    </p>
                    <p>
                      <i className="fas fa-calendar"></i> Weekly Meetings
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-button">
                <button onClick={() => navigate("/Dess")}>
                  View Details <i className="fas fa-arrow-right"></i>
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

export default Activities;
