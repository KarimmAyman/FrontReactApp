
import { Link } from "react-router-dom";
import "./Error404.css";
import errorImage from "../../assets/Frame.svg";
import ParentFooter from "../../Components/Footer/ParentFooter";

const Error404 = () => {
  return (
    <div className="error-container">
      {/* Header Section */}
      <div className="error-header">
        <div className="header-content">
          <h1>404 Error</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>404 Error</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="error-content">
        <div className="error-message">
          <h2>
            Oopps! Check Your Connection
            <br />
            and Try Again
          </h2>
          <p>
            Error ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus nulla
          </p>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Back Home Button */}
        <Link to="/" className="back-home">
          Back to Home
        </Link>

        {/* Error Illustration */}
        <div className="error-illustration">
          <img src={errorImage} alt="Error Illustration" />
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default Error404;
