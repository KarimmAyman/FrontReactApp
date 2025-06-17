import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Profile.css";
import PropTypes from "prop-types";

const dummyPosts = [
  {
    id: 1,
    type: "Apartment for sale",
    status: "Live",
    location: "Sydney, Australia",
    bedrooms: 4,
    area: "128 m²",
    price: "$450,000",
  },
  {
    id: 2,
    type: "Villa for rent",
    status: "Live",
    location: "Melbourne, Australia",
    bedrooms: 5,
    area: "200 m²",
    price: "$3,500/mo",
  },
  {
    id: 3,
    type: "Penthouse for sale",
    status: "Live",
    location: "Brisbane, Australia",
    bedrooms: 3,
    area: "150 m²",
    price: "$650,000",
  },
  {
    id: 4,
    type: "Studio Apartment",
    status: "Canceled",
    location: "Perth, Australia",
    bedrooms: 1,
    area: "45 m²",
    price: "$250,000",
  },
  {
    id: 5,
    type: "Townhouse for rent",
    status: "Live",
    location: "Adelaide, Australia",
    bedrooms: 3,
    area: "120 m²",
    price: "$2,800/mo",
  },
];

const dummyOpportunities = [
  {
    id: 1,
    type: "Senior UX Designer",
    status: "Live",
    location: "Sydney, Australia",
    salary: "$90K-$120K",
    daysRemaining: 15,
    company: "Tech Solutions Inc.",
  },
  {
    id: 2,
    type: "Full Stack Developer",
    status: "Live",
    location: "Melbourne, Australia",
    salary: "$100K-$130K",
    daysRemaining: 7,
    company: "Digital Innovations",
  },
  {
    id: 3,
    type: "Product Manager",
    status: "Live",
    location: "Brisbane, Australia",
    salary: "$110K-$140K",
    daysRemaining: 20,
    company: "Growth Tech",
  },
  {
    id: 4,
    type: "Data Scientist",
    status: "Canceled",
    location: "Perth, Australia",
    salary: "$95K-$125K",
    daysRemaining: 0,
    company: "AI Solutions",
  },
  {
    id: 5,
    type: "DevOps Engineer",
    status: "Live",
    location: "Adelaide, Australia",
    salary: "$105K-$135K",
    daysRemaining: 12,
    company: "Cloud Systems",
  },
];

const ProfileTabs = ({ activeTab, setActiveTab }) => (
  <div className="profile-tabs">
    {["Housing", "Opportunities"].map((tab) => (
      <div
        key={tab}
        className={`tab-item ${activeTab === tab ? "active" : ""}`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </div>
    ))}
  </div>
);

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Housing");
  const [userPosts] = useState(dummyPosts);
  const [userOpportunities] = useState(dummyOpportunities);
  const [selectedPost, setSelectedPost] = useState(null);

  // دالة لإنشاء الأحرف الأولى من الاسم
  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const userData = location.state?.user || user;
  const isAuth = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  const PostDetailsModal = ({ post, onClose }) => {
    if (!post) return null;

    return (
      <div className="post-details-modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>

          <div className="modal-header">
            <h2>{post.type}</h2>
            <span className={`status-badge ${post.status.toLowerCase()}`}>
              {post.status}
            </span>
          </div>

          <div className="modal-body">
            <div className="details-grid">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{post.location}</span>
              </div>
              {post.bedrooms && (
                <div className="detail-item">
                  <i className="fas fa-bed"></i>
                  <span>{post.bedrooms} Bedrooms</span>
                </div>
              )}
              {post.area && (
                <div className="detail-item">
                  <i className="fas fa-ruler-combined"></i>
                  <span>{post.area}</span>
                </div>
              )}
              {post.price && (
                <div className="detail-item">
                  <i className="fas fa-dollar-sign"></i>
                  <span>{post.price}</span>
                </div>
              )}
              {post.salary && (
                <div className="detail-item">
                  <i className="fas fa-dollar-sign"></i>
                  <span>{post.salary}</span>
                </div>
              )}
              {post.daysRemaining && (
                <div className="detail-item">
                  <i className="fas fa-calendar"></i>
                  <span>{post.daysRemaining} Days Remaining</span>
                </div>
              )}
            </div>

            <div className="description-section">
              <h3>Description</h3>
              <p>
                {post.type.toLowerCase().includes("apartment")
                  ? "This beautiful property offers modern living spaces with excellent amenities. Located in a prime area, it provides easy access to transportation and local attractions."
                  : "This exciting opportunity offers a great chance to advance your career. Join a dynamic team in a growing company with competitive benefits and a positive work environment."}
              </p>
            </div>

            <div className="features-section">
              <h3>Features</h3>
              <div className="features-grid">
                {post.type.toLowerCase().includes("apartment") ? (
                  <>
                    <span className="feature-tag">Modern Kitchen</span>
                    <span className="feature-tag">Balcony</span>
                    <span className="feature-tag">Parking</span>
                    <span className="feature-tag">Security</span>
                    <span className="feature-tag">Gym Access</span>
                  </>
                ) : (
                  <>
                    <span className="feature-tag">Remote Work</span>
                    <span className="feature-tag">Health Insurance</span>
                    <span className="feature-tag">Flexible Hours</span>
                    <span className="feature-tag">Career Growth</span>
                    <span className="feature-tag">Team Events</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  PostDetailsModal.propTypes = {
    post: PropTypes.shape({
      type: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      bedrooms: PropTypes.number,
      area: PropTypes.string,
      price: PropTypes.string,
      salary: PropTypes.string,
      daysRemaining: PropTypes.number,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="user-profile">
            <div className="user-avatar">
              {userData?.imgUrl ? (
                <img
                  src={userData.imgUrl}
                  alt={userData?.userName || "Profile"}
                  onError={(e) => {
                    e.target.src =
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                  }}
                />
              ) : (
                <div className="avatar-placeholder">
                  {getInitials(userData?.userName)}
                </div>
              )}
            </div>
            <div className="user-info">
              <h2>{userData?.userName || "Mohamed Kord"}</h2>
              <p>{userData?.email || "mohamedkord27@gmail.com"}</p>
            </div>
          </div>

          <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="profile-content">
          {activeTab === "Housing" && (
            <div className="content-section">
              <h2 className="section-title">Your posts</h2>
              <div className="posts-list">
                {userPosts.map((post) => (
                  <div className="post-card" key={post.id}>
                    <div className="post-left">
                      <div className="post-icon">
                        <div className="icon-bg">
                          <span>UP</span>
                        </div>
                      </div>
                      <div className="post-info">
                        <div className="post-header">
                          <h3>{post.type}</h3>
                          <span
                            className={`status-badge ${post.status.toLowerCase()}`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <div className="post-details">
                          <div className="detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{post.location}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-bed"></i>
                            <span>{post.bedrooms}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-ruler-combined"></i>
                            <span>{post.area}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="view-button"
                      onClick={() => setSelectedPost(post)}
                    >
                      View <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Opportunities" && (
            <div className="content-section">
              <h2 className="section-title">Your opportunities</h2>
              <div className="posts-list">
                {userOpportunities.map((post) => (
                  <div className="post-card" key={post.id}>
                    <div className="post-left">
                      <div className="post-icon">
                        <div className="icon-bg">
                          <span>UP</span>
                        </div>
                      </div>
                      <div className="post-info">
                        <div className="post-header">
                          <h3>{post.type}</h3>
                          <span
                            className={`status-badge ${post.status.toLowerCase()}`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <div className="post-details">
                          <div className="detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{post.location}</span>
                          </div>
                          {post.bedrooms && (
                            <div className="detail-item">
                              <i className="fas fa-bed"></i>
                              <span>{post.bedrooms}</span>
                            </div>
                          )}
                          {post.area && (
                            <div className="detail-item">
                              <i className="fas fa-ruler-combined"></i>
                              <span>{post.area}</span>
                            </div>
                          )}
                          {post.salary && (
                            <div className="detail-item">
                              <i className="fas fa-dollar-sign"></i>
                              <span>{post.salary}</span>
                            </div>
                          )}
                          {post.daysRemaining && (
                            <div className="detail-item">
                              <i className="fas fa-calendar"></i>
                              <span>{post.daysRemaining} Days Remaining</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      className="view-button"
                      onClick={() => setSelectedPost(post)}
                    >
                      View <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {selectedPost && (
        <PostDetailsModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default Profile;
