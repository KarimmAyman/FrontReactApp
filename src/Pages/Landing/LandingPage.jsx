import "./LandingPage.css";
import framelanding from "../../assets/Frameland.svg";
import segmentLogo from "../../assets/Company logo.svg";
import splunkLogo from "../../assets/Company logo (1).svg";
import hoteliaLogo from "../../assets/Company logo (2).svg";
import asomaLogo from "../../assets/Company logo (3).svg";
import cloudflairLogo from "../../assets/Company logo4.svg";
import reg1 from "../../assets/Rectangle 2738.svg";
import reg2 from "../../assets/Rectangle 2739.svg";
import reg3 from "../../assets/Rectangle 2765.svg";
import illustration from "../../assets/Illustration.svg";
import testimonialImage from "../../assets/man.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ParentFooter from "../../Components/Footer/ParentFooter";

import { useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Your Trip, Your Adventure,
              <br />
              Your Accommodation –<br />
              Everything In One Place!
            </h1>
            <button className="download-btn">Download The App</button>
          </div>
          <div className="logo-container">
            <img src={framelanding} alt="Aoun Logo" />
          </div>
        </section>

        {/* Our Services */}
        <section className="services-section" id="services">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-card" onClick={() => navigate("/home")}>
              <div className="service-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>Safe & Easy Rides</h3>
              <p>
                Travel with ease and comfort! The app allows you to join
                reliable rides, where you can book your seat in advance, pay the
                fare securely, and avoid the hassle of searching for daily
                transportation.
              </p>
            </div>
            <div
              className="service-card"
              onClick={() => navigate("/properties")}
            >
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Find Nearby Housing</h3>
              <p>
                Find the perfect accommodation near your university! Explore
                exclusive offers from property owners, and book your apartment
                effortlessly, with complete security at every step of the
                booking process.
              </p>
            </div>
            <div
              className="service-card"
              onClick={() => navigate("/activities")}
            >
              <div className="service-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3>Activities & Opportunities</h3>
              <p>
                Participate in student activities, attend educational sessions
                to help you with challenging subjects, or start a business
                opportunity alongside your studies! The app is here to support
                our students every step of the way.
              </p>
            </div>
          </div>
        </section>
        {/* Move, Explore, Stay Section */}
        <section className="explore-section" id="how-it-works">
          <div className="explore-content">
            <div className="explore-grid">
              <div className="explore-images">
                <div className="experience-badge">
                  <span className="experience-number">1</span>
                  <div className="experience-text">
                    Years Of
                    <br />
                    experience
                  </div>
                </div>
                <div className="image-container image-main">
                  <img src={reg2} alt="Smiling driver in car" />
                </div>
                <div className="image-container image-housing">
                  <img src={reg1} alt="Housing aerial view" />
                </div>
                <div className="image-container image-students">
                  <img src={reg3} alt="Students studying together" />
                </div>
              </div>
              <div className="explore-features">
                <div className="why-choose">Why Choose Us</div>
                <h3>Move, Explore, Stay All in One Place!</h3>

                <p className="platform-description">
                  Our platform is designed to cater to all your needs, whether
                  you&apos;re looking for a ride, planning an activity, or
                  finding a place to stay. With a user-friendly interface,
                  secure transactions, and verified users, we ensure a
                  hassle-free experience from start to finish.
                </p>

                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-car"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Seamless Mobility</h4>
                      <ul className="feature-list">
                        <li>
                          <i className="fas fa-check"></i> Find or offer rides
                          with ease
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Transparent pricing
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Exciting Activities</h4>
                      <ul className="feature-list">
                        <li>
                          <i className="fas fa-check"></i> Instant booking
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Tailored adventures
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-home"></i>
                    </div>
                    <div className="feature-content">
                      <h4>Comfortable Stays</h4>
                      <ul className="feature-list">
                        <li>
                          <i className="fas fa-check"></i> Instant booking
                        </li>
                        <li>
                          <i className="fas fa-check"></i> Tailored adventures
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="explore-actions">
                  <button className="read-more-btn">
                    Read More <i className="fas fa-arrow-right"></i>
                  </button>
                  <div className="contact-info">
                    <span className="need-help">Need help?</span>
                    <a href="tel:+201337651" className="phone-number">
                      <div className="phone-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      +20 010 1337 9651
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section" id="stats">
          <h2>STATISTICS</h2>
          <div className="stats-layout">
            <div className="stats-image">
              <img src={illustration} alt="Statistics illustration" />
            </div>
            <div className="statistics-container">
              <div className="statistics-heading">
                <h3>Experiencing Traditions and Customs</h3>
                <p className="statistics-subtext">
                  Lorem ipsum is simply dummy text for printing and typeset.
                  Lorem ipsum has been the industry&apos;s standard!
                </p>
              </div>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="stat-content">
                    <h4>2000+</h4>
                    <p>Travelers</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-content">
                    <h4>5000+</h4>
                    <p>Verified Users</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="stat-content">
                    <h4>300+</h4>
                    <p>Activities & trips</p>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="fas fa-thumbs-up"></i>
                  </div>
                  <div className="stat-content">
                    <h4>95%</h4>
                    <p>Positive Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section" id="partners">
          <div className="partners-container">
            <div className="partner-logo">
              <img src={segmentLogo} alt="Partner 1" />
            </div>
            <div className="partner-logo">
              <img src={splunkLogo} alt="Partner 2" />
            </div>
            <div className="partner-logo">
              <img src={hoteliaLogo} alt="Partner 3" />
            </div>
            <div className="partner-logo">
              <img src={asomaLogo} alt="Partner 4" />
            </div>
            <div className="partner-logo">
              <img src={cloudflairLogo} alt="Partner 5" />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section" id="testimonials">
          <div className="testimonial-container">
            <div className="testimonial-image">
              <img src={testimonialImage} alt="Student Testimonial" />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">
                &ldquo;Aoun has been a game-changer in my university life! I
                found perfect accommodation near campus, use the app daily for
                rides, and have benefited greatly from their educational
                activities. It's truly an all-in-one solution for every
                student's needs!&rdquo;
              </p>
              <button className="testimonial-btn">
                Learn More
                <i
                  className="fas fa-arrow-right"
                  style={{ marginLeft: "8px" }}
                ></i>
              </button>
            </div>
          </div>
        </section>

        {/* Getaways Section */}
        <section className="getaways-section" id="getaways">
          <div className="getaways-header">
            <span className="section-subtitle">OUR OFFERINGS</span>
            <h2>
              Unforgettable Getaways
              <br />
              Escaping Routine
            </h2>
          </div>
          <div className="offerings-container">
            <div className="offering-card">
              <div className="offering-number">01</div>
              <h3>Exclusive Discounts</h3>
              <p>Enjoy special promotions on trips and stays.</p>
            </div>

            <div className="offering-card">
              <div className="offering-number">02</div>
              <h3>Cashback & Rewards</h3>
              <p>Earn points and cashback on every booking.</p>
            </div>

            <div className="offering-card">
              <div className="offering-number">03</div>
              <h3>Referral Bonuses</h3>
              <p>Invite friends and get rewarded with discounts.</p>
            </div>
          </div>
        </section>
      </div>
      <ParentFooter />
    </>
  );
};

export default LandingPage;
