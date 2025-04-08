import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // ✅ التحقق من صحة المدخلات
    if (!email.includes("@")) {
      setErrorMessage("Please enter a valid email.");
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmedNewPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    console.log("🔹 Sending request:", {
      email,
      newPassword,
      confirmedNewPassword,
    });

    try {
      const response = await fetch(`/api/Accounts/reset-password-with-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, newPassword, confirmedNewPassword }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Unexpected server response.");
      }

      console.log("🔹 Server Response:", data);

      if (!response.ok) {
        const errorMsg =
          data.message ||
          data.errors?.[Object.keys(data.errors)[0]]?.[0] ||
          "Error resetting password.";
        throw new Error(errorMsg);
      }

      alert("✅ Password reset successfully!");
      navigate("/success", {
        state: {
          message: "Password reset successfully!",
          redirectTo: "/login",
        },
      });
    } catch (error) {
      console.error("❌ API Error:", error);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmedNewPassword}
            onChange={(e) => setConfirmedNewPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
