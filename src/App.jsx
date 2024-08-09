import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import StickyNavBar from "./components/StickyNavBar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import PricingPage from "./pages/PricingPage";
import { FooterWithSitemap } from "./components/Footer";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import "../src/index.css"

function App() {
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/jhenrysierra" element={<PersonalPortfolio />} />
      </Routes>
      <FooterWithSitemap />
    </div>
  );
}

export default App;
