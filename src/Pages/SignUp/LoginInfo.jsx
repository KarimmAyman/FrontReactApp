import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginInfo.css";
import logo from "../../assets/mainAou.svg";

const LoginInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Check if previous steps data exists
    const savedData = localStorage.getItem("signupData");
    if (!savedData) {
      navigate("/signup"); // Redirect if no previous data
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get existing data and merge with password data
    const existingData = JSON.parse(localStorage.getItem("signupData") || "{}");
    const finalData = { ...existingData, password: formData.password };

    // Here you would typically make an API call to create the account
    console.log("Final form data:", finalData);

    // Navigate to success page
    navigate("/success");
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
          <div className="step completed">
            <span className="step-dot"></span>
            <span className="step-text">Contact info</span>
          </div>
          <div className="step active">
            <span className="step-dot"></span>
            <span className="step-text">Login info</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-sections">
            <div className="section completed">
              <span className="section-dot"></span>
              <span className="section-text">Basic info</span>
            </div>
            <div className="section completed">
              <span className="section-dot"></span>
              <span className="section-text">Contact info</span>
            </div>
            <div className="section active">
              <span className="section-dot"></span>
              <span className="section-text">Login info</span>
            </div>
          </div>

          <p className="required-text">*All fields required unless noted.</p>

          <div className="form-group">
            <label htmlFor="password">*Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">*Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your password"
            />
          </div>

          <button type="submit" className="create-account">
            Create account
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

export default LoginInfo;
