import { Link } from "react-router-dom";
import "./TermsAndConditions.css";
import ParentFooter from "../../Components/Footer/ParentFooter";

const TermsAndConditions = () => {
  return (
    <>
      <div className="terms-container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Terms & Conditions</span>
          </div>
        </div>

        <div className="terms-content">
          <section>
            <h2>Contractual Relationship</h2>
            <p>
              These Terms of Use (&quot;Terms&quot;) govern the access or use by
              you, an individual, from within any country in the world
              (excluding the United States and its territories and possessions
              and Mainland China) of applications, websites, content, call
              center, technology platform or payment services, products, and
              services (collectively, the &quot;Auan Services&quot;).
            </p>
          </section>

          <section>
            <h2>The Auan Services</h2>
            <p>
              The Auan Services constitute a technology platform that enables
              users of Auan&apos;s mobile applications or websites provided as
              part of the Auan Services to arrange and schedule transportation
              services with independent third-party providers of such services.
            </p>
          </section>
          <section>
            <h2>License</h2>
            <ul>
              <li>
                Access and use the Applications on your personal device solely
                in connection with your use of the Auan Services
              </li>
              <li>
                Access and use any content, information and related materials
                provided through Auan
              </li>
            </ul>
          </section>
          {/* Add more sections as needed */}
        </div>
      </div>
      <ParentFooter />
    </>
  );
};

export default TermsAndConditions;
