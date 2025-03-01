import PropTypes from "prop-types";
import "./GeneralInformation.css";

const GeneralInformation = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className="general-information-container">
      <div className="general-information-form-group">
        <label>Advertise Status</label>
        <div className="general-information-radio-group">
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="advertiseStatus"
              value="sale"
              checked={formData.advertiseStatus === "sale"}
              onChange={handleInputChange}
            />
            <span>Sale</span>
          </label>
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="advertiseStatus"
              value="rent"
              checked={formData.advertiseStatus === "rent"}
              onChange={handleInputChange}
            />
            <span>Rent</span>
          </label>
        </div>
      </div>

      <div className="general-information-form-group">
        <label>Available for Loan</label>
        <div className="general-information-radio-group">
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="availableForLoan"
              value="suitable"
              checked={formData.availableForLoan === "suitable"}
              onChange={handleInputChange}
            />
            <span>Suitable</span>
          </label>
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="availableForLoan"
              value="unsuitable"
              checked={formData.availableForLoan === "unsuitable"}
              onChange={handleInputChange}
            />
            <span>Unsuitable</span>
          </label>
        </div>
      </div>

      <div className="general-information-form-group">
        <label>Furnished</label>
        <div className="general-information-radio-group">
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="furnished"
              value="yes"
              checked={formData.furnished === "yes"}
              onChange={handleInputChange}
            />
            <span>Yes</span>
          </label>
          <label className="general-information-radio-label">
            <input
              type="radio"
              name="furnished"
              value="no"
              checked={formData.furnished === "no"}
              onChange={handleInputChange}
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div className="general-information-form-group">
        <label>Housing Shape</label>
        <div className="general-information-radio-grid">
          {[
            "Apartment",
            "Penthouse",
            "Villa",
            "Chalet",
            "Duplex",
            "Triplex",
            "Loft",
            "Twin House",
          ].map((shape) => (
            <label key={shape} className="general-information-radio-label">
              <input
                type="radio"
                name="housingShape"
                value={shape.toLowerCase().replace(" ", "")}
                checked={
                  formData.housingShape === shape.toLowerCase().replace(" ", "")
                }
                onChange={handleInputChange}
              />
              <span>{shape}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="general-information-form-group">
        <label>Warming Type</label>
        <div className="general-information-radio-grid">
          {[
            "Natural Gas",
            "Central",
            "Wood or Coal",
            "Solar",
            "Diesel",
            "Electric",
            "Underfloor",
          ].map((type) => (
            <label key={type} className="general-information-radio-label">
              <input
                type="radio"
                name="warmingType"
                value={type.toLowerCase().replace(/ /g, "")}
                checked={
                  formData.warmingType === type.toLowerCase().replace(/ /g, "")
                }
                onChange={handleInputChange}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="general-information-form-group">
        <label>Front</label>
        <div className="general-information-radio-grid">
          {[
            "North",
            "South",
            "East",
            "West",
            "Northeast",
            "Southwest",
            "Southeast",
            "Northwest",
          ].map((direction) => (
            <label key={direction} className="general-information-radio-label">
              <input
                type="radio"
                name="front"
                value={direction.toLowerCase()}
                checked={formData.front === direction.toLowerCase()}
                onChange={handleInputChange}
              />
              <span>{direction}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="general-information-form-row">
        <div className="general-information-form-group">
          <label>Floor Location</label>
          <select
            className="general-information-select"
            name="floorLocation"
            value={formData.floorLocation}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {[...Array(50)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Building Age</label>
          <select
            className="general-information-select"
            name="buildingAge"
            value={formData.buildingAge}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {[...Array(100)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Room</label>
          <select
            className="general-information-select"
            name="room"
            value={formData.room}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="general-information-form-row">
        <div className="general-information-form-group">
          <label>Living Number</label>
          <select
            className="general-information-select"
            name="livingNumber"
            value={formData.livingNumber}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Rental Income</label>
          <select
            className="general-information-select"
            name="rentalIncome"
            value={formData.rentalIncome}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Gross</label>
          <select
            className="general-information-select"
            name="gross"
            value={formData.gross}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
          </select>
        </div>
      </div>

      <div className="general-information-form-row">
        <div className="general-information-form-group">
          <label>Net M²</label>
          <select
            className="general-information-select"
            name="netM2"
            value={formData.netM2}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Rental Income</label>
          <select
            className="general-information-select"
            name="rentalIncome2"
            value={formData.rentalIncome2}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
          </select>
        </div>

        <div className="general-information-form-group">
          <label>Dues</label>
          <select
            className="general-information-select"
            name="dues"
            value={formData.dues}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
          </select>
        </div>
      </div>

      <button className="general-information-next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

GeneralInformation.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default GeneralInformation;
