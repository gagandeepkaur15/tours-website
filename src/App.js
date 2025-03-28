import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Regions from "./components/Regions";
import TravelDestinations from "./components/TravelDestinations";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContactUs from "./ContactUs";
import RegionInfo from "./components/RegionInfo";
import regionsData from "./data/RegionsData";

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

const Home = () => (
  <div>
    <HeroSection />
    <Regions />
    <div id="travel-destinations">
      <TravelDestinations />
    </div>
    <div id="services">
      <Services />
    </div>
  </div>
);

const RegionInfoWrapper = () => {
  const { regionName } = useParams();
  const regionData = regionsData[regionName];

  if (!regionData) {
    return <div>Region not found</div>;
  }

  return <RegionInfo {...regionData} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route 
          path="/contact-us" 
          element={
            <Layout>
              <ContactUs />
            </Layout>
          } 
        />
        <Route 
          path="/region/:regionName" 
          element={
            <Layout>
              <RegionInfoWrapper />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;