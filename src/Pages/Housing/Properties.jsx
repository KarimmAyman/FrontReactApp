import "./Properties.css";
import ParentFooter from "../../Components/Footer/ParentFooter";

// Import partner logos
import segmentLogo from "../../assets/Company logo.svg";
import splunkLogo from "../../assets/Company logo (1).svg";
import hoteliaLogo from "../../assets/Company logo (2).svg";
import asomaLogo from "../../assets/Company logo (3).svg";
import cloudflairLogo from "../../assets/Company logo4.svg";
import Building from "../../assets/build.svg";
import resp from "../../assets/resp.svg";

const Properties = () => {
  return (
    <div className="properties-container">
      {/* properities Section */}
      <section className="properities-section">
        <div className="properities-content">
          <div className="properities-text">
            <h1>
              Find Your Place
              <br />
              Of Dream
            </h1>
          </div>
          <div className="properities-image">
            <img src={Building} alt="Dream Building" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-title">
          <span>SOME OF OUR PARTNERS</span>
        </div>
        <div className="partners-logos">
          <img src={segmentLogo} alt="Segment" />
          <img src={splunkLogo} alt="Splunk" />
          <img src={hoteliaLogo} alt="Hotelia" />
          <img src={asomaLogo} alt="Asoma" />
          <img src={cloudflairLogo} alt="Cloudflair" />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="featured-section">
        <div className="section-title">
          <span>FEATURED RENTAL</span>
        </div>

        <div className="properties-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-group">
              <h3>Filter by</h3>
              <div className="price-filters">
                <label>
                  <input type="checkbox" /> $0 - $500
                </label>
                <label>
                  <input type="checkbox" /> $501 - $1000
                </label>
                <label>
                  <input type="checkbox" /> $1001 - $1500
                </label>
                <label>
                  <input type="checkbox" /> $1501 - $2000
                </label>
                <label>
                  <input type="checkbox" /> $2001 - $2500
                </label>
              </div>
            </div>

            <div className="filter-group">
              <h3>Rating</h3>
              <div className="rating-filters">
                <label>
                  <input type="checkbox" /> ⭐⭐⭐⭐⭐
                </label>
                <label>
                  <input type="checkbox" /> ⭐⭐⭐⭐
                </label>
                <label>
                  <input type="checkbox" /> ⭐⭐⭐
                </label>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="properties-grid">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="property-card">
                <img src={resp} alt="Apartment" />
                <div className="property-info">
                  <h3>Apartment for sale</h3>
                  <p>
                    Beautiful apartment with modern amenities and great location
                  </p>
                  <div className="property-footer">
                    <span className="price">$849</span>
                    <button className="view-more">→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </section>

      <ParentFooter />
    </div>
  );
};

export default Properties;
