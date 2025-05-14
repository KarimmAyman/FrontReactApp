// src/Pages/Properties.jsx
import "./Properties.css";
import ParentFooter from "../../Components/Footer/ParentFooter";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProperties } from "../../ApiServices/PropertyService"; // استيراد الخدمة

// Import partner logos
import segmentLogo from "../../assets/Company logo.svg";
import splunkLogo from "../../assets/Company logo (1).svg";
import hoteliaLogo from "../../assets/Company logo (2).svg";
import asomaLogo from "../../assets/Company logo (3).svg";
import cloudflairLogo from "../../assets/Company logo4.svg";
import Building from "../../assets/build.svg";
import resp from "../../assets/resp.svg";

const Properties = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        console.log("Fetched data:", data); // قم بتسجيل الاستجابة

        if (data && Array.isArray(data)) {
          setProperties(data); // في حال كانت البيانات قائمة من العقارات
        } else if (data && data.data) {
          setProperties(data.data); // في حال كانت البيانات تحتوي على خاصية "data" مع قائمة العقارات
        }
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter locations based on search query
    const filtered = properties
      .map((p) => p.location) // Assuming `location` is a property of each property object
      .filter(
        (loc, i, arr) =>
          loc?.toLowerCase().includes(query.toLowerCase()) &&
          arr.indexOf(loc) === i
      );
    setFilteredLocations(filtered);
    setShowSuggestions(query.length > 0);
  };

  const handleLocationSelect = (location) => {
    setSearchQuery(location);
    setShowSuggestions(false);
  };

  const handlePropertyClick = (propertyId) => {
    navigate(`/housing-details/${propertyId}`);
  };

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

        {/* Filter Toggle Button for Mobile */}
        <button
          className="filter-toggle-btn"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          Filter by <span>{isFilterOpen ? "▼" : "▲"}</span>
        </button>

        <div className="properties-layout">
          {/* Filters Sidebar */}
          <aside className={`filters-sidebar ${isFilterOpen ? "active" : ""}`}>
            {/* Search Section */}
            <div className="filter-group">
              <h3>Search by location name</h3>
              <div className="search-box">
                <input
                  type="text"
                  placeholder="e.g. Beach westpalm"
                  className="search-input"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                />
                <span className="search-icon">🔍</span>

                {/* Search Suggestions */}
                {showSuggestions && (
                  <div className="search-suggestions">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <div
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleLocationSelect(location)}
                        >
                          {location}
                        </div>
                      ))
                    ) : (
                      <div className="suggestion-item no-results">
                        No locations found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Budget Filter */}
            <div className="filter-group">
              <h3>Your budget per day</h3>
              <div className="budget-filters">
                <label>
                  <input type="checkbox" /> $0 - $200
                </label>
                <label>
                  <input type="checkbox" /> $200 - $500
                </label>
                <label>
                  <input type="checkbox" /> $500 - $1,000
                </label>
                <label>
                  <input type="checkbox" /> $1,000 - $2,000
                </label>
                <label>
                  <input type="checkbox" /> $2,000 - $5,000
                </label>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-group">
              <h3>Rating</h3>
              <p className="rating-text">Show only ratings more than</p>
              <div className="rating-buttons">
                <button className="rating-btn">1★</button>
                <button className="rating-btn">2★</button>
                <button className="rating-btn">3★</button>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="properties-grid">
            {properties.length > 0 ? (
              properties.map((property) => (
                <div key={property.propertyId} className="property-card">
                  <img src={property.imageUrl || resp} alt={property.title} />
                  <div className="property-info">
                    <h3>
                      {property.housingType} for {property.advertisingStatus}
                    </h3>
                    <p>{property.rooms} rooms</p>
                    <div className="property-footer">
                      <span className="price">${property.price}</span>
                      <button
                        className="view-more"
                        onClick={() => handlePropertyClick(property.propertyId)}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No properties found.</p>
            )}
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
