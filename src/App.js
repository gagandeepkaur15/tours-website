import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Regions from "./components/Regions";
import TravelDestinations from "./components/TravelDestinations";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactUs from "./ContactUs";

const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <Regions />
    <div id="travel-destinations">
      <TravelDestinations />
    </div>
    <div id="services">
      <Services />
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;