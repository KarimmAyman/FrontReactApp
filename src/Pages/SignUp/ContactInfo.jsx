import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactInfo.css";
import logo from "../../assets/mainAou.svg";

const ContactInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  // Get existing data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("signupData");
    if (!savedData) {
      navigate("/signup"); // Redirect if no basic info
      return;
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!formData.phoneNumber) {
      alert("Please enter your phone number");
      return;
    }

    // Get existing data and merge with new data
    const existingData = JSON.parse(localStorage.getItem("signupData") || "{}");
    const updatedData = { ...existingData, ...formData };
    localStorage.setItem("signupData", JSON.stringify(updatedData));

    // Navigate to login info page
    navigate("/login-info");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="Logo" className="signup-logo" />

        <h1>Sign up</h1>
        <p className="signup-description">
          Our platform is a multifunctional hub that connects users with
          seamless transportation, housing, and activity services. Whether you
          need a ride, a place to stay, or exciting experiences, our app ensures
          convenience, security, and efficiency. With user-friendly navigation
          and verified listings, we make everyday mobility and exploration
          effortless.
        </p>

        <div className="progress-steps">
          <div className="step completed">
            <span className="step-dot"></span>
            <span className="step-text">Basic info</span>
          </div>
          <div className="step active">
            <span className="step-dot"></span>
            <span className="step-text">Contact info</span>
          </div>
          <div className="step">
            <span className="step-dot"></span>
            <span className="step-text">Login info</span>
          </div>
        </div>

        <form onSubmit={handleNext} className="signup-form">
          <div className="form-sections">
            <div className="section completed">
              <span className="section-dot"></span>
              <span className="section-text">Basic info</span>
            </div>
            <div className="section active">
              <span className="section-dot"></span>
              <span className="section-text">Contact info</span>
            </div>
          </div>

          <p className="required-text">*All fields required unless noted.</p>

          <div className="form-group">
            <label htmlFor="phoneNumber">*Phone number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit" className="next-btn">
            Next
          </button>
        </form>

        <footer className="signup-footer">
          <a href="/help">Help</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </footer>
      </div>
    </div>
  );
};

export default ContactInfo;
