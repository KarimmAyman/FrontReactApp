import "./Success.css"; // Import the CSS file for styling
import logo from "../../assets/mainAou.svg"; // Adjust the path if necessary

const Success = () => {
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
          <p className="success-thank-you">Thank you for using our service!</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
