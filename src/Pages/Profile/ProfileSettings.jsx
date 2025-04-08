import { useState, useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import ParentFooter from "../../Components/Footer/ParentFooter";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const { user, updateUserProfile } = useAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "Male",
    phoneNumber: "",
    age: "",
    timeZone: "",
    theme: "light",
    language: "Eng",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const getInitials = (name) => {
    if (!name) return "U";
    const names = name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.userName || "Mohamed Kord",
        email: user.email || "mohamedkord27@gmail.com",
        gender: user.gender || "Male",
        phoneNumber: user.phoneNumber || "",
        age: user.age || "",
        timeZone: user.timeZone || "",
        theme: user.theme || "light",
        language: user.language || "Eng",
      });
      setProfileImage(user.imgUrl || null);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - parseInt(formData.age, 10);

    if (updateUserProfile) {
      updateUserProfile({
        ...user,
        name: formData.fullName,
        email: formData.email,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        birthYear: birthYear.toString(),
        timeZone: formData.timeZone,
        theme: formData.theme,
        language: formData.language,
        profileImage: profileImage || user?.profileImage,
      });
    }
    console.log("Updated user profile:", {
      name: formData.fullName,
      email: formData.email,
      token: user.token, // التأكد من وجود الـ token هنا
    });
    setIsEditMode(false);
  };

  return (
    <div className="profile-settings-page">
      <div className="profile-settings-container">
        <div className="profile-settings-content">
          <div className="profile-user">
            <div className="profile-image-container">
              <div className="profile-image">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={formData.fullName}
                    onError={(e) => {
                      e.target.src =
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    {getInitials(formData.fullName)}
                  </div>
                )}
                <div className="status-indicator"></div>
              </div>
              <div className="profile-info">
                <h2>{formData.fullName}</h2>
                <p>{formData.email}</p>
              </div>
            </div>
            <button className="edit-button" onClick={toggleEditMode}>
              {isEditMode ? "Cancel" : "Edit"}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  {/* <option value="Other">Other</option> */}
                </select>
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+20 11064090103"
                  disabled={!isEditMode}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={!isEditMode}
                />
              </div>
            </div>

            <div className="email-section">
              <h3>My email Address</h3>
              <div className="email-item">
                <div className="email-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="email-content">
                  <p>{formData.email}</p>
                  <span>3 month ago</span>
                </div>
              </div>
            </div>

            <div className="form-row preferences">
              <div className="form-group">
                <label>Theme</label>
                <select
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div className="form-group">
                <label>Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                >
                  <option value="Eng">Eng</option>
                  <option value="Ar">Arabic</option>
                  <option value="Fr">French</option>
                </select>
              </div>
              <div className="form-group notification-group">
                <label>Notification</label>
                <select
                  name="notification"
                  disabled={!isEditMode}
                  defaultValue="allow"
                >
                  <option value="allow">Allow</option>
                  <option value="deny">Deny</option>
                </select>
              </div>
            </div>

            {isEditMode && (
              <div className="form-actions">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>

      <ParentFooter />
    </div>
  );
};

export default ProfileSettings;
