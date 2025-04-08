import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import logo from "../../assets/mainAou.svg";
import heart from "../../assets/heart.svg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // تجهيز البيانات للإرسال
    const loginData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("/api/Accounts/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (!response.ok || data.successed === false) {
        // معالجة الأخطاء
        if (data.errors && Array.isArray(data.errors)) {
          throw new Error(data.errors[0]);
        } else if (data.message) {
          throw new Error(data.message);
        }
        throw new Error("Invalid credentials");
      }

      // نجاح تسجيل الدخول
      const userData = {
        email: formData.email,
        name: data.fullName || "",
        token: data.token || "",
        // إضافة أي معلومات أخرى تحتاجها
      };

      login(userData);

      // حفظ التوكن في localStorage إذا تم اختيار "تذكرني"
      if (formData.rememberMe && data.token) {
        localStorage.setItem("token", data.token);
      }

      // التوجيه للصفحة الشخصية
      navigate("/profile", { state: { user: userData } });
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.message || "An error occurred during login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // مسح رسالة الخطأ عند الكتابة
    if (error) setError("");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <h1 className="sign-in-title">Sign in</h1>

          {error && <div className="error-message">{error}</div>}

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
                required
                disabled={isLoading}
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
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-button"
                  disabled={isLoading}
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
                  disabled={isLoading}
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

            <button
              type="submit"
              className={`login-button ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Log in"}
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
    </>
  );
}

export default Login;
