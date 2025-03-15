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

import HouseRouting from "./Pages/HouseRouting/HouseRouting";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import Card from "./Components/Card/Card";
import Activities from "./Pages/ACTIVITIES/ACTIVITIES.JSX";
import Opportunities from "./Pages/Opportunities/Opportunities";
import Details from "./Pages/Details/Details";
import Post from "./Pages/Post/Post";
import Dess from "./Pages/Dess/Dess";
import Last from "./Pages/Last/Last";










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

          <Route path="/HouseRouting" element={<HouseRouting />} />
          <Route path="/ProfileCard" element={<ProfileCard />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Opportunities" element={<Opportunities />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Dess" element={<Dess />} />
          <Route path="/Last" element={<Last />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
