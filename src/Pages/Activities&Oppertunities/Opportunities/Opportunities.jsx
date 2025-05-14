import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Opportunities.css";
import Card from "../../../Components/Card/Card";
import ParentFooter from "../../../Components/Footer/ParentFooter";
import { getAllJobs } from "../../../ApiServices/JobService";

const Opportunities = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);

    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <section className="opportunity-hero">
        <div className="opportunity-hero-content">
          <h1>Opportunities</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> /{" "}
            <Link to="/activities">Activities & Opportunities</Link> /
            <Link to="/opportunities">Opportunities</Link>
          </div>
        </div>
      </section>

      <div className="opportunities-container">
        <div className="job-search-wrapper">
          <div className="job-search-bar">
            <div className="search-field">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Job title, Keyword..."
                aria-label="Search Job Title"
              />
            </div>

            <div className="search-field">
              <i className="fa-solid fa-location-dot"></i>
              <input
                type="text"
                placeholder="Location"
                aria-label="Search Location"
              />
            </div>

            <div className="search-field">
              <i className="fa-solid fa-layer-group"></i>
              <input
                type="text"
                placeholder="Select Category"
                aria-label="Select Job Category"
              />
            </div>

            <div className="search-dropdown">
              <button className="card-toggle" onClick={toggleDropdown}>
                <i className="fa-solid fa-caret-down"></i> Advance Filter
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    Experience Level
                  </a>
                  <a href="#" className="dropdown-item">
                    Salary Range
                  </a>
                  <a href="#" className="dropdown-item">
                    Job Type
                  </a>
                </div>
              )}
            </div>

            <div className="search-button">
              <button>Find Job</button>
            </div>
          </div>
        </div>

        <div className="job-list">
          {loading ? (
            <p>Loading jobs...</p>
          ) : jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            jobs.map((job) => <Card key={job.id} job={job} />)
          )}
        </div>
      </div>

      <ParentFooter />
    </>
  );
};

export default Opportunities;
