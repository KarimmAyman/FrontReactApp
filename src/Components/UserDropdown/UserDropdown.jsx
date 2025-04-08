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
          {user?.imgUrl ? (
            <img
              src={user.imgUrl}
              alt={user?.userName || "User"}
              onError={(e) => {
                e.target.src =
                  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
              }}
            />
          ) : (
            <div className="avatar-placeholder">
              {user?.userName ? user.userName[0].toUpperCase() : "U"}
            </div>
          )}
        </div>
        <div className="user-info">
          <h3>{user?.userName || "Guest User"}</h3>
          <p>{user?.email || "noemail@example.com"}</p>
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
