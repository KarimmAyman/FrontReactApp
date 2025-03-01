import { useState } from "react";
import PropTypes from "prop-types";
import "./AdvertiseFeaturesStyles.css"; // تغيير اسم ملف CSS لتجنب التداخل

const AdvertiseFeatures = ({ handleNext }) => {
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [externalFeatures, setExternalFeatures] = useState([]);

  const handleInteriorChange = (event) => {
    const { value, checked } = event.target;
    setInteriorFeatures((prev) =>
      checked ? [...prev, value] : prev.filter((feature) => feature !== value)
    );
  };

  const handleExternalChange = (event) => {
    const { value, checked } = event.target;
    setExternalFeatures((prev) =>
      checked ? [...prev, value] : prev.filter((feature) => feature !== value)
    );
  };

  return (
    <div className="advertise-features-container">
      <h2 className="advertise-features-title">Advertise Features</h2>
      <p className="advertise-features-notice">
        *All fields required unless noted.
      </p>

      <div className="advertise-features-section">
        <h3>Interior Features</h3>
        <div className="advertise-features-list">
          {[
            "ADSL",
            "Alarm",
            "Balcony",
            "Built-in Kitchen",
            "Barbecue",
            "Furnished",
            "Laundry Room",
            "Air Conditioning",
            "Wallpaper",
            "Dressing Room",
            "Video Intercom",
            "Jacuzzi",
            "Shower",
            "TV Satellite",
            "Laminate",
            "Panel Door",
            "Marble Floor",
            "Blinds",
            "Sauna",
            "Parent Bathroom",
            "Parquet",
            "Satin Plaster",
            "Satin Color",
            "Ceramic Floor",
            "Spotlight",
            "Fireplace",
            "Terrace",
            "Cloakroom",
            "Underfloor Heating",
            "Double Glazing",
          ].map((feature) => (
            <label key={feature}>
              <input
                className="advInput"
                type="checkbox"
                value={feature}
                onChange={handleInteriorChange}
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      <div className="advertise-features-section">
        <h3>External Features</h3>
        <div className="advertise-features-list">
          {[
            "Elevator",
            "Gardened",
            "Fitness",
            "Security",
            "Thermal Insulation",
            "Generator",
            "Doorman",
            "Car Park",
            "Playground",
            "PVC",
            "Siding",
            "Water Tank",
            "Tennis Court",
            "Fire Escape",
            "Swimming Pool",
            "Football Field",
            "Basketball Field",
            "Market",
          ].map((feature) => (
            <label key={feature}>
              <input
                className="advInput"
                type="checkbox"
                value={feature}
                onChange={handleExternalChange}
              />
              {feature}
            </label>
          ))}
        </div>
      </div>

      <button className="advertise-features-next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

AdvertiseFeatures.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default AdvertiseFeatures;
