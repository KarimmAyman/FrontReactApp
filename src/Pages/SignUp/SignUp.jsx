import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../../assets/mainAou.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    age: "",
    address: "",
    city: "",
    country: "Egypt",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(""); // Clear error when user types
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.gender ||
      !formData.age
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // التحقق من العمر
    const age = parseInt(formData.age);
    if (age < 5 || age > 120) {
      setError("Age must be between 5 and 120 years");
      return;
    }

    // تخزين البيانات مع fullName
    const dataToSave = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
    };

    localStorage.setItem("signupData", JSON.stringify(dataToSave));
    navigate("/contact-info");
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
          <div className="step active">
            <span className="step-dot"></span>
            <span className="step-text">Basic info</span>
          </div>
          <div className="step">
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
            <label htmlFor="firstName">*First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              placeholder="Enter your first name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">*Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              placeholder="Enter your last name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">*Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>*What is your gender?</label>
            <div className="gender-options">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleInputChange}
                  required
                />
                <span>Female</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleInputChange}
                  required
                />
                <span>Male</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="age">*What is your age?</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              min="5"
              max="120"
              placeholder="Enter your age"
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

          <div className="form-group">
            <label htmlFor="city">*City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              placeholder="Enter your city"
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

export default SignUp;
