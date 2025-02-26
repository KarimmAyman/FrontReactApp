import { Link } from "react-router-dom";
import mobile3 from "../../assets/3mobile.svg";
import calculatorImage from "../../assets/calculator.svg";
import "./Home.css";
import ParentFooter from "../../Components/Footer/ParentFooter";
import {
  MdDirectionsCar,
  MdCardTravel,
  MdApartment,
  MdSchool,
  MdBusinessCenter,
  MdLocationOn,
  MdVideocam,
  MdAccessTime,
  MdRocketLaunch,
  MdAttachMoney,
} from "react-icons/md";
import { useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const priceTexts = [
    {
      title: "Fare Calculation Formula:",
      content: "Final Price = Driver's Fare + Service Fee + Taxes",
    },
    {
      title: "System Flexibility:",
      content:
        "This system allows drivers flexibility in pricing while ensuring the app earns revenue through service charges.",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? priceTexts.length - 1 : current - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((current) =>
      current === priceTexts.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              Journey With Ease
              <span className="text-secondary">Travel</span> With Confidence
            </h1>
            <Link to="#download" className="download-btn">
              Download the app
            </Link>
          </div>
        </section>

        {/* Types of Trips */}
        <section className="trips-section">
          <h2>Types of Trips</h2>
          <div className="trips-grid">
            <div className="trip-card">
              <div className="icon">
                <MdDirectionsCar />
              </div>
              <h3>Shared Rides</h3>
              <p>Daily shared trips for short passenger travel</p>
            </div>
            <div className="trip-card">
              <div className="icon">
                <MdCardTravel />
              </div>
              <h3>Long-Distance Rides</h3>
              <p>Comfortable and affordable intercity travel</p>
            </div>
            <div className="trip-card">
              <div className="icon">
                <MdApartment />
              </div>
              <h3>Daily Commutes</h3>
              <p>Convenient rides for your everyday travel</p>
            </div>
            <div className="trip-card">
              <div className="icon">
                <MdSchool />
              </div>
              <h3>TOFEL Coaching</h3>
              <p>Plan to travel abroad for education? We&apos;ll help!</p>
            </div>
            <div className="trip-card">
              <div className="icon">
                <MdBusinessCenter />
              </div>
              <h3>Business Trips</h3>
              <p>Business transportation for corporate travelers</p>
            </div>
          </div>
        </section>

        {/* Calculate Price */}
        <section className="calculate-section">
          <div className="calculate-container">
            <img
              src={calculatorImage}
              alt="Calculator"
              className="calculator-image"
            />
            <div className="price-formula">
              <div className="quote-mark">&quot;</div>
              <h3>{priceTexts[currentSlide].title}</h3>
              <p>{priceTexts[currentSlide].content}</p>
              <div className="divider"></div>
              <div className="navigation-dots">
                <button className="dot" onClick={handlePrevSlide}>
                  ←
                </button>
                <button className="dot" onClick={handleNextSlide}>
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="features-section">
          <h2>What can you do with our app?</h2>
          <div className="features-container">
            <div className="features-list">
              <div className="feature">
                <div className="feature-icon">
                  <MdLocationOn />
                </div>
                <div className="feature-content">
                  <h3>Live tracking</h3>
                  <p>Monitor your journey progress in real-time</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <MdVideocam />
                </div>
                <div className="feature-content">
                  <h3>Camera-follow</h3>
                  <p>All trips are video recorded for your and our safety</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <MdAccessTime />
                </div>
                <div className="feature-content">
                  <h3>On Time Arrival</h3>
                  <p>Get real-time notifications on your journey status</p>
                </div>
              </div>
            </div>
            <img src={mobile3} alt="App Screenshots" className="app-screens" />
          </div>
        </section>

        {/* Captain Section */}
        <section className="captain-section">
          <h2>Are you captain?</h2>
          <div className="captain-container">
            <img src={mobile3} alt="Captain App" className="captain-screens" />
            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">
                  <MdRocketLaunch />
                </div>
                <div className="benefit-content">
                  <h3>Ease of joining</h3>
                  <p>We make your onboarding process as easy as possible</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">
                  <MdAccessTime />
                </div>
                <div className="benefit-content">
                  <h3>Efficient Time</h3>
                  <p>
                    You will enjoy your rides as much as your passengers enjoy
                    it
                  </p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">
                  <MdAttachMoney />
                </div>
                <div className="benefit-content">
                  <h3>Focused earnings</h3>
                  <p>We give incentives to captains as a good rating review</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit-icon">
                  <MdDirectionsCar />
                </div>
                <div className="benefit-content">
                  <h3>Fixed Trip</h3>
                  <p>We don&apos;t charge you until you complete your trips</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ParentFooter />
    </>
  );
}

export default Home;
