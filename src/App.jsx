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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            {/* الصفحات العامة (غير محمية) */}
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
            <Route
              path="/verify-otp"
              element={
                <PublicRoute>
                  <VerifyOTP />
                </PublicRoute>
              }
            />
            <Route
              path="/reset-password"
              element={
                <PublicRoute>
                  <ResetPassword />
                </PublicRoute>
              }
            />

            {/* الصفحات المحمية */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutUs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success-story"
              element={
                <ProtectedRoute>
                  <SuccessStory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/team"
              element={
                <ProtectedRoute>
                  <Team />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faq"
              element={
                <ProtectedRoute>
                  <FAQ />
                </ProtectedRoute>
              }
            />
            <Route
              path="/terms"
              element={
                <ProtectedRoute>
                  <TermsAndConditions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/privacy"
              element={
                <ProtectedRoute>
                  <Privacy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact-info"
              element={
                <ProtectedRoute>
                  <ContactInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login-info"
              element={
                <ProtectedRoute>
                  <LoginInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route
              path="/activities"
              element={
                <ProtectedRoute>
                  <Activities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dess"
              element={
                <ProtectedRoute>
                  <Dess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/details"
              element={
                <ProtectedRoute>
                  <Details />
                </ProtectedRoute>
              }
            />
            <Route
              path="/post"
              element={
                <ProtectedRoute>
                  <Post />
                </ProtectedRoute>
              }
            />
            <Route
              path="/last"
              element={
                <ProtectedRoute>
                  <Last />
                </ProtectedRoute>
              }
            />
            <Route
              path="/opportunities"
              element={
                <ProtectedRoute>
                  <Opportunities />
                </ProtectedRoute>
              }
            />
            <Route
              path="/properties"
              element={
                <ProtectedRoute>
                  <Properties />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile-settings"
              element={
                <ProtectedRoute>
                  <ProfileSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/housing-details/:propertyId"
              element={
                <ProtectedRoute>
                  <HousingDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/housing-post"
              element={
                <ProtectedRoute>
                  <HousingPost />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
