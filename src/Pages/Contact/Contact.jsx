import { Link } from "react-router-dom";
import "./Contact.css";
import man from "../../assets/man.svg"; // Adjust path as needed

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> / Contact Us
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-image">
          <img src={man} alt="Contact illustration" />
        </div>

        <div className="contact-form-section">
          <h2>
            We are always here <br />
            for you
          </h2>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
            </div>

            <div className="form-group">
              <input type="text" placeholder="Your Address" />
            </div>

            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
