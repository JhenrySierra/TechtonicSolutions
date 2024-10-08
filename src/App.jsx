import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import StickyNavBar from "./components/StickyNavbar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import PricingPage from "./pages/PricingPage";
import { FooterWithSitemap } from "./components/Footer";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import "../src/index.css"
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactUs from "./pages/ContactUs"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  AOS.init()
    return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <StickyNavBar activePath={currentPath} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/jhenrysierra" element={<PersonalPortfolio />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <FooterWithSitemap />
    </div>
  );
}

export default App;
