import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactInfo.css";
import logo from "../../assets/mainAou.svg";

const ContactInfo = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("signupData");
    if (!savedData) {
      navigate("/signup");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!formData.phoneNumber || !formData.address) {
      setError("Please fill in all required fields");
      return;
    }

    // التحقق من صحة رقم الهاتف
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setError("Please enter a valid phone number (11 digits)");
      return;
    }

    // تحديث البيانات المخزنة
    const existingData = JSON.parse(localStorage.getItem("signupData") || "{}");
    const updatedData = { ...existingData, ...formData };
    localStorage.setItem("signupData", JSON.stringify(updatedData));
    navigate("/login-info");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h1>Sign up</h1>
        <p className="signup-description">
          Our platform is a multifunctional hub that connects users with
          seamless transportation, housing, and activity services.
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
          {error && <div className="error-message">{error}</div>}

          <p className="required-text">*All fields required unless noted</p>

          <div className="form-group">
            <label htmlFor="phoneNumber">*Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              pattern="\d{11}"
              title="Please enter a valid 11-digit phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">*Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter your address"
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
