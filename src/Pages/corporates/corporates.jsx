import { Link } from "react-router-dom";
import "./corporates.css";
import ParentFooter from "../../Components/Footer/ParentFooter";
import {
  MdBusinessCenter,
  MdSecurity,
  MdSpeed,
  MdSupport,
} from "react-icons/md";

const Corporates = () => {
  return (
    <div className="corporates-page">
      {/* Hero Section */}
      <section className="corporates-hero">
        <div className="corporates-hero-content">
          <h1>Corporate Solutions</h1>
          <div className="corporates-breadcrumb">
            <Link to="/">Home</Link> / Corporates
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="corporates-content">
        <div className="corporates-container">
          {/* Introduction Section */}
          <div className="corporates-intro">
            <h2>Empower Your Business with Aoun</h2>
            <p>
              Streamline your corporate transportation and accommodation needs
              with our comprehensive solutions. We provide reliable, efficient,
              and cost-effective services tailored to your business
              requirements.
            </p>
          </div>

          {/* Features Grid */}
          <div className="corporates-features">
            <div className="corporates-feature-card">
              <div className="corporates-feature-icon">
                <MdBusinessCenter />
              </div>
              <h3>Business Travel</h3>
              <p>
                Seamless transportation solutions for your employees&apos;
                business trips, ensuring punctuality and comfort throughout
                their journey.
              </p>
            </div>

            <div className="corporates-feature-card">
              <div className="corporates-feature-icon">
                <MdSecurity />
              </div>
              <h3>Secure Platform</h3>
              <p>
                Enterprise-grade security with verified drivers and properties,
                ensuring the safety of your employees and assets.
              </p>
            </div>

            <div className="corporates-feature-card">
              <div className="corporates-feature-icon">
                <MdSpeed />
              </div>
              <h3>Efficient Management</h3>
              <p>
                Centralized booking and management system with detailed
                reporting and analytics for better resource allocation.
              </p>
            </div>

            <div className="corporates-feature-card">
              <div className="corporates-feature-icon">
                <MdSupport />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Dedicated corporate support team available round the clock to
                assist with any queries or emergencies.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="corporates-benefits">
            <h2>Why Choose Aoun for Your Business?</h2>
            <div className="corporates-benefits-grid">
              <div className="corporates-benefit-item">
                <h4>Cost-Effective</h4>
                <p>
                  Optimize your travel budget with our competitive pricing and
                  flexible payment options.
                </p>
              </div>
              <div className="corporates-benefit-item">
                <h4>Time-Saving</h4>
                <p>
                  Automated booking and management processes to save valuable
                  time for your team.
                </p>
              </div>
              <div className="corporates-benefit-item">
                <h4>Customizable</h4>
                <p>
                  Tailored solutions that adapt to your specific business needs
                  and requirements.
                </p>
              </div>
              <div className="corporates-benefit-item">
                <h4>Reliable Service</h4>
                <p>
                  Consistent and dependable service delivery across all our
                  transportation and accommodation solutions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="corporates-cta">
            <h2>Ready to Transform Your Business Travel?</h2>
            <p>
              Contact our corporate team today to discuss your requirements and
              get started.
            </p>
            <Link to="/contact" className="corporates-cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default Corporates;
