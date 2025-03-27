import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Housing');
  
  // Example data - in a real app, this would come from an API
  const userPosts = [
    {
      id: 1,
      type: 'Apartment for sale',
      status: 'Live',
      location: 'Australia',
      bedrooms: 4,
      area: '128 m²'
    },
    {
      id: 2,
      type: 'Apartment for sale',
      status: 'Canceled',
      location: 'Australia', 
      bedrooms: 4,
      area: '128 m²'
    }
  ];
  
  const userOpportunities = [
    {
      id: 1,
      type: 'Apartment for sale',
      status: 'Canceled',
      location: 'Australia',
      bedrooms: 4,
      area: '128 m²'
    },
    {
      id: 2,
      type: 'Senior UX Designer',
      status: 'Live',
      location: 'Australia',
      salary: '$30K-$35K',
      daysRemaining: 4
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="user-profile">
            <div className="user-avatar">
              {user?.profileImage ? (
                <img src={user.profileImage} alt={user?.name} />
              ) : (
                <div className="avatar-placeholder"></div>
              )}
            </div>
            <div className="user-info">
              <h2>{user?.name || "Mohamed Kord"}</h2>
              <p>{user?.email || "mohamedkord27@gmail.com"}</p>
            </div>
          </div>

          <div className="profile-tabs">
            <div
              className={`tab-item ${activeTab === "Housing" ? "active" : ""}`}
              onClick={() => setActiveTab("Housing")}
            >
              Housing
            </div>
            <div
              className={`tab-item ${
                activeTab === "Opportunities" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Opportunities")}
            >
              Opportunities
            </div>
            <div
              className={`tab-item ${
                activeTab === "Notifications" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Notifications")}
            >
              Notifications
            </div>
          </div>
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
                          {post.bedrooms ? (
                            <div className="detail-item">
                              <i className="fas fa-bed"></i>
                              <span>{post.bedrooms}</span>
                            </div>
                          ) : null}
                          {post.area ? (
                            <div className="detail-item">
                              <i className="fas fa-ruler-combined"></i>
                              <span>{post.area}</span>
                            </div>
                          ) : null}
                          {post.salary ? (
                            <div className="detail-item">
                              <i className="fas fa-dollar-sign"></i>
                              <span>{post.salary}</span>
                            </div>
                          ) : null}
                          {post.daysRemaining ? (
                            <div className="detail-item">
                              <i className="fas fa-calendar"></i>
                              <span>{post.daysRemaining} Days Remaining</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={
                        post.type.includes("Apartment")
                          ? `/housing-details/${post.id}`
                          : `/Details/`
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