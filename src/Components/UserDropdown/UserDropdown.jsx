import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./UserDropdown.css";

function UserDropdown() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-dropdown">
      <div className="user-header">
        <div className="user-image">
          {user?.profileImage ? (
            <img src={user.profileImage} alt={user?.name} />
          ) : (
            <div className="avatar-placeholder"></div>
          )}
        </div>
        <div className="user-info">
          <h3>{user?.name || "Mohamed Kord"}</h3>
          <p>{user?.email || "mor@gmail.com"}</p>
        </div>
      </div>

      <div className="user-menu">
        <Link to="/Profile" className="menu-item">
          <i className="fas fa-user"></i>
          <span>My Profile</span>
        </Link>

        <Link to="/profile-settings" className="menu-item">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </Link>

        <button onClick={handleLogout} className="menu-item logout">
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default UserDropdown;
