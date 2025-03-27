import { Link } from "react-router-dom";
import "./AboutUs.css";
import logo from "../../assets/mainAou.svg";
import ParentFooter from "../../Components/Footer/ParentFooter";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / About Us
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          {/* Mission Section */}
          <div className="about-section">
            <h2>
              Seamless Mobility, Exciting Activities, and Comfortable Stays –
              All in One Place!
            </h2>
            <p>
              Welcome to Aoun, your one-stop destination for affordable travel,
              exploration, and accommodations. Whether you need a ride, want to
              explore new experiences, or are searching for the perfect place to
              stay, we are here to make your journey seamless and enjoyable.
            </p>
            <img src={logo} alt="Aoun Logo" className="about-logo" />
          </div>

          {/* What We Offer */}
          <div className="offers-section">
            <h2>What We Offer</h2>
            <div className="offers-grid">
              <div className="offer-card">
                <h3>Hassle-free Rides</h3>
                <p>Daily local rides within your city or passenger rides.</p>
              </div>
              <div className="offer-card">
                <h3>Exciting Activities</h3>
                <p>Discover and book amazing experiences and activities.</p>
              </div>
              <div className="offer-card">
                <h3>Comfortable Stays</h3>
                <p>
                  Access quality accommodations to suit your needs and
                  preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="vision-section">
            <h2>Our Vision</h2>
            <p>
              We aim to create a connected platform where people can travel
              freely, explore new destinations, and find the perfect stay with a
              seamless, secure, and user-friendly way.
            </p>
          </div>

          {/* Join Us Section */}
          <div className="join-section">
            <h2>Join Us Today!</h2>
            <p>
              Be part of our growing community and experience the future of
              travel and accommodation services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                in
              </a>
              <a href="#" className="social-link">
                𝕏
              </a>
              <a href="#" className="social-link">
                ▶
              </a>
            </div>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default AboutUs;
