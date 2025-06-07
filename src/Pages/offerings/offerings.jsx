import { Link } from "react-router-dom";
import "./offerings.css";
import ParentFooter from "../../Components/Footer/ParentFooter";
import {
  MdDirectionsCar,
  MdApartment,
  MdSchool,
  MdBusinessCenter,
  MdEvent,
  MdGroups,
} from "react-icons/md";

const Offerings = () => {
  return (
    <div className="aoun-offerings-page">
      {/* Hero Section */}
      <section className="aoun-offerings-hero">
        <div className="aoun-offerings-hero-content">
          <h1>Our Offerings</h1>
          <div className="aoun-offerings-breadcrumb">
            <Link to="/">Home</Link> / Our Offerings
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="aoun-offerings-content">
        <div className="aoun-offerings-container">
          {/* Introduction Section */}
          <div className="aoun-offerings-intro">
            <h2>Comprehensive Solutions for Every Need</h2>
            <p>
              Discover our wide range of services designed to make your journey
              easier, whether you&apos;re a student, professional, or business.
              We&apos;ve got you covered with reliable transportation,
              comfortable housing, and exciting opportunities.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="aoun-offerings-services">
            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdDirectionsCar />
              </div>
              <h3>Transportation Services</h3>
              <p>
                Safe and reliable rides for your daily commute, long-distance
                travel, and special occasions. Choose from shared rides or
                private transportation.
              </p>
              <Link to="/home" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdApartment />
              </div>
              <h3>Housing Solutions</h3>
              <p>
                Find your perfect accommodation near universities and business
                districts. Verified properties with flexible rental options for
                students and professionals.
              </p>
              <Link to="/properties" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdSchool />
              </div>
              <h3>Educational Support</h3>
              <p>
                Access study groups, tutoring sessions, and educational
                resources. Connect with peers and mentors for academic success.
              </p>
              <Link to="/activities" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdBusinessCenter />
              </div>
              <h3>Business Services</h3>
              <p>
                Corporate solutions for employee transportation and
                accommodation. Streamlined booking and management for businesses
                of all sizes.
              </p>
              <Link to="/corporates" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdEvent />
              </div>
              <h3>Events & Activities</h3>
              <p>
                Join workshops, networking events, and social gatherings. Build
                connections and enhance your skills through various activities.
              </p>
              <Link to="/activities" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="aoun-offerings-service-card">
              <div className="aoun-offerings-service-icon">
                <MdGroups />
              </div>
              <h3>Community Building</h3>
              <p>
                Connect with like-minded individuals, join clubs, and
                participate in community initiatives. Create lasting
                relationships and memories.
              </p>
              <Link to="/activities" className="aoun-offerings-service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="aoun-offerings-features">
            <h2>Why Choose Our Services?</h2>
            <div className="aoun-offerings-features-grid">
              <div className="aoun-offerings-feature-item">
                <h4>Verified & Secure</h4>
                <p>
                  All our services are thoroughly verified for your safety and
                  peace of mind.
                </p>
              </div>
              <div className="aoun-offerings-feature-item">
                <h4>24/7 Support</h4>
                <p>
                  Round-the-clock customer support to assist you with any
                  queries.
                </p>
              </div>
              <div className="aoun-offerings-feature-item">
                <h4>Easy Booking</h4>
                <p>
                  Simple and intuitive booking process for all our services.
                </p>
              </div>
              <div className="aoun-offerings-feature-item">
                <h4>Flexible Options</h4>
                <p>
                  Customizable solutions to meet your specific needs and
                  preferences.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="aoun-offerings-cta">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of satisfied users who trust Aoun for their daily
              needs.
            </p>
            <Link to="/signup" className="aoun-offerings-cta-button">
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default Offerings;
