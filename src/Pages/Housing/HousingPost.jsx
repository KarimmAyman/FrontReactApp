import { useState } from "react";
import { Link } from "react-router-dom";
import "./HousingPost.css";
import GeneralInformation from "./Components/GeneralInformation/GeneralInformation";
import ParentFooter from "../../Components/Footer/ParentFooter";
import LocationInformation from "./Components/LocationInformation/LocationInformation";
import PostingPhotos from "./Components/PostingPhotos/PostingPhotos";
import AdvertiseFeatures from "./Components/AdvertiseFeatures/AdvertiseFeatures";
import SuccessMessage from "./Components/SuccessMessage/SuccessMessage";

const HousingPost = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    advertiseStatus: "",
    availableForLoan: "",
    furnished: "",
    housingShape: "",
    warmingType: "",
    front: "",
    floorLocation: "",
    livingNumber: "",
    gross: "",
    netM2: "",
    rentalIncome: "",
    dues: "",
    explanation: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => (prev < 6 ? prev + 1 : prev));
  };

  // If we're on step 2 (GeneralInformation), render without header/footer
  if (currentStep === 2) {
    return (
      <div className="housing-post">
        <div className="stepper-container">
          <div className="stepper">
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <span className="step-text">Category</span>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <span className="step-text">General Information</span>
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span className="step-text">Location Information</span>
            </div>
            <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
              <div className="step-number">4</div>
              <span className="step-text">Posting Photos</span>
            </div>
            <div className={`step ${currentStep >= 5 ? "active" : ""}`}>
              <div className="step-number">5</div>
              <span className="step-text">Advertise Features</span>
            </div>
          </div>
        </div>
        <div className="form-container">
          <GeneralInformation
            formData={formData}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        </div>
      </div>
    );
  }

  // For other steps, render with header/footer
  return (
    <>
      <div className="housing-post">
        <div className="housing-post-header">
          <h1>Housing Post</h1>
          <div className="breadcrumb">
            <Link to="/properties">Housing</Link> / Housingpost
          </div>
        </div>

        <div className="stepper-container">
          <div className="stepper">
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <span className="step-text">Category</span>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <span className="step-text">General Information</span>
            </div>
            <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span className="step-text">Location Information</span>
            </div>
            <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
              <div className="step-number">4</div>
              <span className="step-text">Posting Photos</span>
            </div>
            <div className={`step ${currentStep >= 5 ? "active" : ""}`}>
              <div className="step-number">5</div>
              <span className="step-text">Advertise Features</span>
            </div>
          </div>
        </div>

        <div className="form-container">
          {currentStep === 1 && (
            <div className="category-section">
              <h2>Category</h2>
              <p className="required-notice">
                *All fields required unless noted
              </p>

              <div className="form-group">
                <label>*Housing</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="category"
                      value="apartment-sale"
                      checked={formData.category === "apartment-sale"}
                      onChange={handleInputChange}
                    />
                    <span>Apartment for sale</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="category"
                      value="apartment-rent"
                      checked={formData.category === "apartment-rent"}
                      onChange={handleInputChange}
                    />
                    <span>Apartment for rent</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">*Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter title"
                />
              </div>

              <button className="next-btn" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
          {currentStep === 3 && <LocationInformation handleNext={handleNext} />}
          {currentStep === 4 && <PostingPhotos handleNext={handleNext} />}
          {currentStep === 5 && <AdvertiseFeatures handleNext={handleNext} />}
          {currentStep === 6 && <SuccessMessage />}
        </div>
      </div>
      <ParentFooter />
    </>
  );
};

export default HousingPost;
