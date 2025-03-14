import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // التحقق من صحة OTP
      await axios.post(
        "https://studentpathapitest.runasp.net/api/Accounts/verify-otp",
        { email, otp }
      );

      // الانتقال إلى صفحة تعيين كلمة المرور الجديدة
      navigate("/reset-password", { state: { email, otp } });
    } catch (error) {
      console.error("Error:", error);
      alert("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify Code</h2>
      <p>Please enter the verification code sent to your email</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Verification Code</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify Code"}
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
