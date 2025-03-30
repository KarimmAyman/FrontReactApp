import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Success.css"; // Import the CSS file for styling
import logo from "../../assets/mainAou.svg"; // Adjust the path if necessary

const Success = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    // Get signup data from localStorage
    const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

    // Auto-redirect to profile after 3 seconds
    const timer = setTimeout(() => {
      // Set user as logged in
      if (signupData.email) {
        login({
          user: {
            name: signupData.fullName,
            email: signupData.email,
            phone: signupData.phoneNumber,
          },
          token: "dummy-token-for-testing", // In a real app, this would come from the backend
        });

        // Clear signup data from localStorage
        localStorage.removeItem("signupData");

        // Navigate to profile page
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, login]);

  return (
    <div className="success-container">
      <div className="success-card">
        <img src={logo} alt="Logo" className="success-logo" />

        <h1>Sign up</h1>

        <div className="success-content">
          <div className="checkmark-circle">
            <div className="checkmark">✓</div>
          </div>

          <p className="success-message">
            Your account has been created successfully!
          </p>
          <p className="success-details">
            Please check your email and activate your account using the link
            sent to you. If you do not see the email, please check your spam
            folder.
          </p>
          <p className="success-thank-you">
            Thank you for using our service! Redirecting to your profile...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
