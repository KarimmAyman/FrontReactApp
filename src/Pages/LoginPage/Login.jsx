import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import heart from "../../assets/heart.png";
import Footer from "../../Components/Footer/Footer";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <h1 className="sign-in-title">Sign in</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input-field"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••"
                  className="input-field"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-button"
                >
                  👁️
                </button>
              </div>
            </div>

            <div className="remember-forgot">
              <label className="remember-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forget your password
              </Link>
            </div>

            <p className="terms-text">
              By continuing, you agree to the{" "}
              <Link to="/terms">Terms of use</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </p>

            <button type="submit" className="submit-button">
              Log in
            </button>

            <p className="signup-text">
              Don&apos;t have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>

          <div className="heart-wrapper">
            <img src={heart} alt="Heart" className="heart" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
