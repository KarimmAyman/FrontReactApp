import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
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
import Properties from "./Pages/Properties/Properties";
import SignUp from "./Pages/SignUp/SignUp";
import ContactInfo from "./Pages/SignUp/ContactInfo";
import LoginInfo from "./Pages/SignUp/LoginInfo";
import Success from "./Pages/SignUp/Success";
import "./App.css";

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
          <Route path="/properties" element={<Properties />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact-info" element={<ContactInfo />} />
          <Route path="/login-info" element={<LoginInfo />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
