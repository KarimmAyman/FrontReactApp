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
    birthMonth: "August",
    birthDay: "6",
    birthYear: "2003",
    timeZone: "",
    theme: "light",
    language: "Eng",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.name || "Mohamed Kord",
        email: user.email || "mohamedkord27@gmail.com",
        gender: user.gender || "Male",
        phoneNumber: user.phoneNumber || "",
        birthMonth: user.birthMonth || "August",
        birthDay: user.birthDay || "6",
        birthYear: user.birthYear || "2003",
        timeZone: user.timeZone || "",
        theme: user.theme || "light",
        language: user.language || "Eng",
      });
      setProfileImage(user.profileImage || null);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Keep your existing handleImageUpload function
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
    // Make sure your updateUserProfile function exists in your AuthContext
    if (updateUserProfile) {
      updateUserProfile({
        ...user,
        name: formData.fullName,
        email: formData.email,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        birthMonth: formData.birthMonth,
        birthDay: formData.birthDay,
        birthYear: formData.birthYear,
        timeZone: formData.timeZone,
        theme: formData.theme,
        language: formData.language,
        profileImage: profileImage || user?.profileImage,
      });
    }
    setIsEditMode(false);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 50 }, (_, i) => (2023 - i).toString());

  return (
    <div className="profile-settings-page">
      <div className="profile-settings-container">
        <div className="profile-settings-content">
          <div className="profile-user">
            <div className="profile-image-container">
              <div className="profile-image">
                {profileImage ? (
                  <img src={profileImage} alt={formData.fullName} />
                ) : (
                  <div className="image-placeholder">
                    {formData.fullName &&
                      formData.fullName.charAt(0).toUpperCase()}
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
                  <option value="Other">Other</option>
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
              <div className="form-group date-group">
                <label>Date of birth</label>
                <div className="date-inputs">
                  <select
                    name="birthMonth"
                    value={formData.birthMonth}
                    onChange={handleInputChange}
                    disabled={!isEditMode}
                  >
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleInputChange}
                    disabled={!isEditMode}
                  >
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleInputChange}
                    disabled={!isEditMode}
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleInputChange}
                  disabled={!isEditMode}
                >
                  <option value="">Your First Name</option>
                  <option value="GMT+2">GMT+2 (Cairo)</option>
                  <option value="GMT+3">GMT+3 (Riyadh)</option>
                  <option value="GMT+0">GMT+0 (London)</option>
                </select>
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
