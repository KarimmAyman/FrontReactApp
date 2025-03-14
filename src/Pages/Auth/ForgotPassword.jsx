import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // إرسال طلب OTP
      await axios.post(
        "https://studentpathapitest.runasp.net/api/Accounts/send-otp-for-password-reset",
        { email }
      );

      // الانتقال إلى صفحة التحقق من OTP
      navigate("/verify-otp", { state: { email } });
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Reset Code"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
