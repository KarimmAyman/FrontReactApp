import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Team from "./Pages/Team/Team";
import FAQ from "./Pages/FAQ/FAQ";
import TermsAndConditions from "./Pages/Terms/TermsAndConditions";
import Error404 from "./Pages/Error404/Error404";
import Privacy from "./Pages/Privacy/Privacy";
import Activities from "./Pages/Activities&Oppertunities/Activities/Activities";
import Dess from "./Pages/Activities&Oppertunities/Dess/Dess";
import Details from "./Pages/Activities&Oppertunities/Details/Details";
import Post from "./Pages/Activities&Oppertunities/Post/Post";
import Last from "./Pages/Activities&Oppertunities/Last/Last";
import Opportunities from "./Pages/Activities&Oppertunities/Opportunities/Opportunities";
import Properties from "./Pages/Housing/Properties";
import SignUp from "./Pages/SignUp/SignUp";
import ContactInfo from "./Pages/SignUp/ContactInfo";
import LoginInfo from "./Pages/SignUp/LoginInfo";
import Success from "./Pages/SignUp/Success";
import HousingDetails from "./Pages/Housing/HouseRouting";
import HousingPost from "./Pages/Housing/HousingPost";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import VerifyOTP from "./Pages/Auth/VerifyOTP";
import ResetPassword from "./Pages/Auth/ResetPassword";
import LandingPage from "./Pages/Landing/LandingPage";
import { AuthProvider } from "./context/AuthContext";
import ProfileSettings from "./Pages/Profile/ProfileSettings";
import Profile from "./Pages/Profile/Profile";
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/success-story" element={<SuccessStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact-info" element={<ContactInfo />} />
            <Route path="/login-info" element={<LoginInfo />} />
            <Route path="/success" element={<Success />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/dess" element={<Dess />} />
            <Route path="/details" element={<Details />} />
            <Route path="/post" element={<Post />} />
            <Route path="/last" element={<Last />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route
              path="/housing-details/:propertyId"
              element={<HousingDetails />}
            />
            <Route path="/housing-post" element={<HousingPost />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
