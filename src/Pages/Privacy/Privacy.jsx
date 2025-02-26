import { Link } from "react-router-dom";
import "./Privacy.css";
import ParentFooter from "../../Components/Footer/ParentFooter";

const Privacy = () => {
  return (
    <>
      <div className="privacy-container">
        {/* Header Section */}
        <div className="privacy-header">
          <div className="header-content">
            <h1>Privacy Policy</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>&gt;</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Understanding Our Commitment to Your Privacy</h2>
            <p>
              Auan Inc., its respective subsidiaries, affiliates, associated
              companies, and jointly controlled entities (collectively Auan, we,
              our, us) are committed to protecting and respecting your personal
              data and are committed to protecting and respecting the privacy of
              all persons who contact us, visit our domains and websites,
              download our mobile applications, use our services, or otherwise
              communicate with us.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Purpose of the Privacy Policy</h2>
            <p>
              This Privacy Policy explains how we collect, use, disclose and
              protect your Personal Data both actively and passively through the
              use of Auan Apps and Websites including all mobile applications
              and websites operated by Auan (respectively Apps and Websites),
              products, features, and other services globally (collectively
              Services ).
            </p>
          </section>

          <section className="privacy-section">
            <h2>User Acknowledgment of This Policy</h2>
            <p>
              By using the services or registering, downloading, or visiting the
              websites and/or the apps, you acknowledge that you are or have had
              the opportunity to become aware of this policy, including the
              processing (including collection, use, disclosure, retaining, or
              disposing) of your information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Types of Information We Collect</h2>
            <div className="info-list">
              <h3>(i) Personal and Anonymous Information</h3>
              <p>
                Auan collects both Personal Information and Anonymous
                Information about you. Personal Information is information that
                can be used to identify you, such as your full name, email
                address, phone number, payment method, payment details, and
                profile information.
              </p>

              <h3>(ii) Device and Location Information</h3>
              <p>
                We collect information from your device, such as IP address,
                screen resolution information, geographic location, Wi-Fi
                information, browser information, unique device identifier
                (UDID) when applicable and/or your mobile operating system.
              </p>

              <h3>(iii) Voluntarily Submitted Information</h3>
              <p>
                Information you provide when registering for or using the apps,
                including your full name, email address, phone number, payment
                method, billing information, profile picture, and profile
                information.
              </p>
            </div>
          </section>
        </div>
      </div>
      <ParentFooter />
    </>
  );
};

export default Privacy;
