import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/LoginPage/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import Contact from "./Pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Team from "./pages/Team/Team";
import FAQ from "./pages/FAQ/FAQ";
import TermsAndConditions from "./Pages/Terms/TermsAndConditions";
import Error404 from "./Pages/Error404/Error404";
import Privacy from "./Pages/Privacy/Privacy";
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

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/login-info" element={<LoginInfo />} />
          <Route path="/success" element={<Success />} />
          <Route path="/properties" element={<Properties />} />
          <Route
            path="/housing-details/:propertyId"
            element={<HousingDetails />}
          />
          <Route path="/housing-post" element={<HousingPost />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
