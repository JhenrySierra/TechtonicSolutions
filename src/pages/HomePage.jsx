import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import HeroSection16 from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import CaseStudy1 from "../components/CaseStudy1.jsx";
import { DefaultAccordion } from "../components/Accordion.jsx";
import HomeCTA from "../components/HomeCTA.jsx";

function HomePage() {
  return (
    <div>
      <HeroSection16 />
      <Services />
      <CaseStudy1 />
      <HomeCTA />
      <DefaultAccordion />
    </div>
  );
}

export default HomePage;
