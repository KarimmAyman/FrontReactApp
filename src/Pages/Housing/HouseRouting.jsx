import { Link } from "react-router-dom";
import "./HouseRouting.css";
import "../../Components/ProfileCard/ProfileCard";
import apartment from "../../assets/apartment.svg";
import map from "../../assets/map.svg";
import ParentFooter from "../../Components/Footer/ParentFooter";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const HouseRouting = () => {
  return (
    <div className="house-page">
      <section className="house-hero">
        <div className="house-hero-Housing Details">
          <h1>Housing Details</h1>
          <div className="breadcrumb">
            <Link to="/properties">Housing</Link> &gt; Housing Details
          </div>
        </div>
      </section>
      <div className="sticky-wrapper"></div>
      <div className="container">
        <section className="apartment">
          <div className="location">
            <div className="located">
              <h2>Apartment for sale</h2>
              <div className="location-1">
                <i className="fa-solid fa-location-dot"></i>
                <p> London, John Ruskin St.</p>
              </div>
            </div>
            <div className="price">
              <h2>
                $1.200<span>/mo</span>
              </h2>
            </div>
          </div>
          <div className="img-sec">
            <img src={apartment} alt="apartment" />
            <div className="house-image-arrows">
              <i className="fa-solid fa-circle-chevron-left house-image-arrow"></i>
              <i className="fa-solid fa-circle-chevron-right house-image-arrow"></i>
            </div>
          </div>
          <div className="card"></div>
          <div className="des">
            <div className="des-1">
              <i className="fa-regular fa-user"></i>
              <p>Mohamed Sokar </p>
            </div>
            <div className="des-2">
              <i className="fa-solid fa-calendar-days"></i>
              <p>November 26, 2024</p>
            </div>
          </div>
          <ProfileCard />
        </section>
        <section className="info">
          <div className="general-information">
            <h2>General Information</h2>
            <div className="info-grid">
              <div className="info-column">
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Advertise No</span>
                  <span className="info-value sp-1">0-1234</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Published Date</span>
                  <span className="info-value">26 November 2024</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Advertise Status</span>
                  <span className="info-value">Sale</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Housing Shape</span>
                  <span className="info-value">Apartment</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Room + Living Number</span>
                  <span className="info-value">3 + 1</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Gross / Net M²</span>
                  <span className="info-value">150 M² / 135 M²</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Warming Type</span>
                  <span className="info-value">Natural Gas</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Building Age</span>
                  <span className="info-value">5</span>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Floor Location</span>
                  <span className="info-value">10</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Available for Loan</span>
                  <span className="info-value">Appropriate</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Furnished</span>
                  <span className="info-value">Not</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Dues</span>
                  <span className="info-value">1.200 $</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Swap</span>
                  <span className="info-value">Not</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Front</span>
                  <span className="info-value">Northwest</span>
                </div>
                <div className="info-item">
                  <svg
                    className="check-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="info-label">Rental Income</span>
                  <span className="info-value">3.000 $</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="explanation">
          <h2>Explanation</h2>
          <p>
            Aliquam eros justo, posuere lobortis viverra blandit non id diam
            congue posuere viverra. Aliquam eros justo, posuere lobortis viverra
            blandit augue mattis finibus ullamcorper. Aliquam eros justo,
            posuere lobortis viverra blandit non id diam congue posuere viverra
            mattis finibus ullamcorper. Aliquam eros justo, posuere lobortis
            viverra blandit non id diam congue posuere viverra mattis finibus
            ullamcorper. Aliquam eros justo, posuere lobortis viverra blandit
            augue mattis finibus ullamcorper.
          </p>
        </section>
        <div className="features-container">
          <section className="feature-section">
            <div className="ex-1">
              <h2>Interior Features</h2>
              <div className="feature-tags">
                <span className="feature-tag">ADSL</span>
                <span className="feature-tag">Alarm</span>
                <span className="feature-tag">Shower</span>
                <span className="feature-tag">Sauna</span>
                <span className="feature-tag">Panel Door</span>
                <span className="feature-tag">Balcony</span>
                <span className="feature-tag">Balcony</span>
                <span className="feature-tag">Blinds</span>
                <span className="feature-tag">Laminate</span>
                <span className="feature-tag">Steel Color</span>
                <span className="feature-tag">Ceramic Floor</span>
              </div>
            </div>
          </section>

          <section className="feature-section">
            <div className="ex">
              <h2>External Features</h2>
              <div className="feature-tags">
                <span className="feature-tag">Elevator</span>
                <span className="feature-tag">Gardened</span>
                <span className="feature-tag">Fitness</span>
                <span className="feature-tag">Security</span>
                <span className="feature-tag">Thermal Insulation</span>
                <span className="feature-tag">Decorative</span>
                <span className="feature-tag">PVC</span>
                <span className="feature-tag">Laminate</span>
                <span className="feature-tag">Market</span>
                <span className="feature-tag">Car Park</span>
                <span className="feature-tag">Basketball Field</span>
              </div>
            </div>
          </section>
        </div>
        <div className="location-img">
          <h2>Location Information</h2>
          <img src={map} alt="map" />
        </div>
      </div>
      <ParentFooter />
    </div>
  );
};

export default HouseRouting;
