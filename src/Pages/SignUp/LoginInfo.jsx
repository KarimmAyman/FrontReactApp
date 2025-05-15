import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../ApiServices/RegisterService";
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

    const age = parseInt(existingData.age, 10);
    if (isNaN(age) || age < 5 || age > 120) {
      setError("Age must be between 5 and 120");
      setIsLoading(false);
      return;
    }
    const registrationData = {
      FullName: `${existingData.firstName} ${existingData.lastName}`,
      Email: existingData.email,
      Password: formData.password,
      ConfirmedPassword: formData.confirmPassword,
      PhoneNumber: existingData.phoneNumber,
      UserType: 0, // User عادي
      Gender: existingData.gender === "Male" ? 1 : 2,
      Age: age,
      ImgUrlFile: existingData.ImgUrlFile || null,

      // أرسل النص وليس كائن
      locations: [
        {
          City: existingData.address || "Unknown",
          Country: "Egypt",
          Latitude: 0,
          Longitude: 0,
        },
      ],
      vehicleInfoJson: [],
      // نص JSON فارغ لأن المستخدم ليس سائق
    };

    try {
      const response = await registerUser(registrationData);

      if (!response || response.successed === false) {
        const message =
          response?.errors?.length > 0
            ? response.errors.join(", ")
            : "Registration failed. Please try again.";
        throw new Error(message);
      }

      localStorage.removeItem("signupData");
      navigate("/success");
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "An unexpected error occurred.");
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
              minLength={6}
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
              minLength={6}
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
