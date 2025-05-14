import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./HouseRouting.css";
import map from "../../assets/map.svg";
import ParentFooter from "../../Components/Footer/ParentFooter";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { getPropertyById } from "../../ApiServices/PropertyService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HouseRouting = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const imageBaseUrl = "https://studentpathapitest.runasp.net";

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(id);
        console.log("Fetched Property Data:", data);
        setProperty(data);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  const handlePostHousing = () => {
    navigate("/housing-post");
  };

  if (!property) return <div>Loading...</div>;

  const interiorFeatures =
    property.features?.filter((f) => f.category === "Interior") || [];
  const externalFeatures =
    property.features?.filter((f) => f.category === "Exterior") || [];

  return (
    <div className="house-page">
      {/* Hero Section */}
      <section className="house-hero">
        <div className="house-hero-Housing Details">
          <h1>{property.title || "Housing Details"}</h1>
          <div className="breadcrumb">
            <Link to="/properties">Housing</Link> &gt; Housing Details
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container">
        {/* Basic Property Info */}
        <section className="apartment">
          <div className="location">
            <div className="located">
              <h2>
                {property.advertisingStatus} - {property.housingType}
              </h2>
              <div className="location-1">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  {property.locations?.[0]?.street || "No Street"},{" "}
                  {property.locations?.[0]?.city || "No City"}
                </p>
              </div>
            </div>
            <div className="price">
              <h2>
                {property.currency === "GBP" ? "£" : "$"}
                {property.price}
                <span>/mo</span>
              </h2>
            </div>
          </div>

          {/* Image Slider */}
          <div className="img-sec">
            {property.images?.length > 0 ? (
              <Swiper spaceBetween={10} slidesPerView={1}>
                {property.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={`${imageBaseUrl}${img.imageUrl}`}
                      alt={`Property image ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p>No images available</p>
            )}
          </div>

          {/* Listed Info */}
          <div className="des">
            <div className="des-1">
              <i className="fa-regular fa-user"></i>
              <p>Listed by Owner</p>
            </div>
            <div className="des-2">
              <i className="fa-solid fa-calendar-days"></i>
              <p>
                {property.publishedDate
                  ? new Date(property.publishedDate).toLocaleDateString()
                  : "Unknown Date"}
              </p>
            </div>
          </div>

          {/* Profile Card */}
          <ProfileCard />

          {/* Post New Housing Button */}
          <div className="post-housing-button-container">
            <button className="post-housing-btn" onClick={handlePostHousing}>
              <i className="fa-solid fa-plus"></i> Post New Housing
            </button>
          </div>
        </section>

        {/* General Information Section */}
        <section className="info">
          <div className="general-information">
            <h2>General Information</h2>
            <div className="info-grid">
              <div className="info-column">
                <div className="info-item">
                  <span className="info-label">Room + Living</span>
                  <span className="info-value">
                    {property.rooms} + {property.livingRooms ?? 0}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">
                    {property.grossArea} / {property.netArea} m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explanation Section */}
        <section className="explanation">
          <h2>Explanation</h2>
          <p>{property.description}</p>
        </section>

        {/* Feature Tags Section */}
        <div className="features-container">
          <section className="feature-section">
            <h2>Interior Features</h2>
            <div className="feature-tags">
              {interiorFeatures.length > 0 ? (
                interiorFeatures.map((f, i) => (
                  <span key={i} className="feature-tag">
                    {f.name}
                  </span>
                ))
              ) : (
                <p>No interior features</p>
              )}
            </div>
          </section>

          <section className="feature-section">
            <h2>External Features</h2>
            <div className="feature-tags">
              {externalFeatures.length > 0 ? (
                externalFeatures.map((f, i) => (
                  <span key={i} className="feature-tag">
                    {f.name}
                  </span>
                ))
              ) : (
                <p>No external features</p>
              )}
            </div>
          </section>
        </div>

        {/* Map Image */}
        <div className="location-img">
          <h2>Location Information</h2>
          <img src={map} alt="map" />
        </div>
      </div>

      {/* Footer */}
      <ParentFooter />
    </div>
  );
};

export default HouseRouting;
