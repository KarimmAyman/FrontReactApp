import PropTypes from "prop-types";
import map from "../../../../assets/map.svg"
import "./LocationInfoStyles.css";

const LocationInformation = ({ handleNext }) => {
  return (
    <div className="location-info-container">
      <div className="location-info-content">
        <h2 className="location-info-title">Location Information</h2>
        <p className="location-info-notice">
          *All fields required unless noted.
        </p>

        <div className="location-info-map-container">
          <label className="location-info-label">*Location</label>
          <div className="location-info-map-wrapper">
            <img src={map} alt="Map" className="location-info-map-image" />
          </div>
        </div>

        <button className="location-info-next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

LocationInformation.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default LocationInformation;
