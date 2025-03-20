import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import logo from "../../assets/mainAou.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    dateOfBirth: {
      month: "",
      day: "",
      year: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: {
        ...prev.dateOfBirth,
        [name]: value,
      },
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.gender ||
      !formData.dateOfBirth.month ||
      !formData.dateOfBirth.day ||
      !formData.dateOfBirth.year
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Store data and navigate to contact info page
    localStorage.setItem("signupData", JSON.stringify(formData));
    navigate("/contact-info");
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
          <p className="required-text">*All fields required unless noted</p>

          <div className="form-group">
            <label htmlFor="fullName">*Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
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
            <label>*What is your date of birth?</label>
            <div className="date-selects">
              <select
                name="month"
                value={formData.dateOfBirth.month}
                onChange={handleDateChange}
                required
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                name="day"
                value={formData.dateOfBirth.day}
                onChange={handleDateChange}
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                name="year"
                value={formData.dateOfBirth.year}
                onChange={handleDateChange}
                required
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
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
