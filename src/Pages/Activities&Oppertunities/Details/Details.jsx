import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ParentFooter from "../../../Components/Footer/ParentFooter";
import { getJobById } from "../../../ApiServices/JobService"; // استدعاء الخدمة
import "./Details.css";




const Details = () => {
  const { id } = useParams(); // جلب ID من URL
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
      } catch (error) {
        console.error("Failed to fetch job:", error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <>
      <section className="opportunity-hero">
        <div className="opportunity-hero-content">
          <h1>Opportunities details</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <Link to="/activities">/ Activities & Opportunities</Link>
            <Link to="/opportunities">/ Opportunities</Link>
            <Link to={`/details/${id}`}>/ Opportunities details</Link>
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
              <h2>{job.title}</h2>
              <div className="opportunity-tags">
                <span className="tag featured">Featured</span>
                <span className="tag full-time">{job.jobType}</span>
              </div>
            </div>

            <div className="company-contact">
              <div className="contact-item">
                <i className="fas fa-link"></i>
                <a href={job.companyWebsite} className="contact-link">
                  {job.companyWebsite}
                </a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>{job.companyPhone}</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${job.companyEmail}`} className="contact-link">
                  {job.companyEmail}
                </a>
              </div>
            </div>
          </div>

          <div className="opportunity-action">
            <button className="apply-button" onClick={() => navigate("/")}>
              Apply Now
            </button>
            <p className="expiry-info">
              Job expires on{" "}
              <span className="expiry-date">
                {job.expiryDate?.split("T")[0]}
              </span>
            </p>
          </div>
        </div>

        <div className="opportunity-description">
          <h3>Job Description</h3>
          <div className="description-content">
            <p>{job.description}</p>
            <p>{job.responsibilities}</p>
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
                <span className="detail-value">
                  {job.postedDate?.split("T")[0]}
                </span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">JOB EXPIRE IN:</span>
                <span className="detail-value">
                  {job.expiryDate?.split("T")[0]}
                </span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">LOCATION:</span>
                <span className="detail-value">{job.location}</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="detail-info">
                <span className="detail-label">JOB TYPE:</span>
                <span className="detail-value">{job.jobType}</span>
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
