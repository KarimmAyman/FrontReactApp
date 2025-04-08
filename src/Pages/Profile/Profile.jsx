import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Profile.css";

const dummyPosts = [
  {
    id: 1,
    type: "Apartment for sale",
    status: "Live",
    location: "Australia",
    bedrooms: 4,
    area: "128 m²",
  },
  {
    id: 2,
    type: "Apartment for sale",
    status: "Canceled",
    location: "Australia",
    bedrooms: 4,
    area: "128 m²",
  },
];

const dummyOpportunities = [
  {
    id: 1,
    type: "Apartment for sale",
    status: "Canceled",
    location: "Australia",
    bedrooms: 4,
    area: "128 m²",
  },
  {
    id: 2,
    type: "Senior UX Designer",
    status: "Live",
    location: "Australia",
    salary: "$30K-$35K",
    daysRemaining: 4,
  },
];

const ProfileTabs = ({ activeTab, setActiveTab }) => (
  <div className="profile-tabs">
    {["Housing", "Opportunities", "Notifications"].map((tab) => (
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
                    <Link
                      to={`/housing-details/${post.id}`}
                      className="view-button"
                    >
                      View <i className="fas fa-arrow-right"></i>
                    </Link>
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
                    <Link
                      to={
                        post.type.toLowerCase().includes("apartment")
                          ? `/housing-details/${post.id}`
                          : `/details/${post.id}`
                      }
                      className="view-button"
                    >
                      View <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="content-section">
              <h2 className="section-title">Notifications</h2>
              <div className="notification-empty">
                <p>You don&apos;t have any notifications yet.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
