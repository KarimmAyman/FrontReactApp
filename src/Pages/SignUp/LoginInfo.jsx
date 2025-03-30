import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginInfo.css";
import logo from "../../assets/mainAou.svg";

const LoginInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    const existingData = JSON.parse(localStorage.getItem("signupData") || "{}");

    const registrationData = {
      fullName: `${existingData.firstName} ${existingData.lastName}`,
      email: existingData.email,
      password: formData.password,
      confirmedPassword: formData.confirmPassword,
      imgUrl: "",
      userType: 0,
      age: parseInt(existingData.age),
      gender: existingData.gender === "Male" ? 0 : 1,
      phoneNumber: existingData.phoneNumber,
      registrationDate: new Date().toISOString(),
      drivingLicense: "",
      vehicleinfo: [],
      locations: [
        {
          city: existingData.address || "Unknown",
          country: "Egypt",
          latitude: 0,
          longitude: 0,
        },
      ],
    };

    try {
      console.log("Sending registration data:", registrationData);

      const response = await fetch("/api/Accounts/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok || data.successed === false) {
        if (data.errors && Array.isArray(data.errors)) {
          throw new Error(data.errors[0]);
        }
        throw new Error("Registration failed. Please try again.");
      }

      localStorage.removeItem("signupData");
      navigate("/success");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="Logo" className="signup-logo" />
        <h1>Sign up</h1>

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
          {error && <div className="error-message">{error}</div>}

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
              disabled={isLoading}
              minLength="6"
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
              disabled={isLoading}
              minLength="6"
            />
          </div>

          <button type="submit" className="create-account" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create account"}
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
