import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import PortfolioHeader from "../components/PortfolioHeader";
import { Typography } from "@material-tailwind/react";

import PortfolioCTA from "../components/PortfolioCTA";

const PortfolioPage = () => {
  return (
    <>
      <PortfolioHeader />
      <div className="flex justify-center mt-40 mb-40 mx-auto animate__animated animate__fadeInDown animate__infinite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>
      <Typography
        variant="h2"
        color="white"
        className="text-center mb-20 tracking-[3px] "
        data-aos="fade-down"
      >
        {" "}
        Showcase of{" "}
        <span className="text-deep-orange-500 align-middle">Sucess </span>
      </Typography>
      <div className="flex flex-wrap gap- justify-around mx-auto max-w-[1440px]">
        <PortfolioItem
          title="TechTonic Solutions"
          shortDescription="We designed and developed the official TECHTONIC Solutions website, showcasing our innovative services, team expertise, and successful projects."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/022b459c557992e3f7f5084f92dbd64a-1715385418041/TechTonic%201.png"
          path="https://jhenrysierra.github.io/TechTonic-Solutions/"
        />
        <PortfolioItem
          title="RADIANT Medical Solutions"
          shortDescription="We collaborated as the Development team in the creation of RADIANT Medical Solutions website using the WordPress Kadence theme."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/9f07e8a92b3ce60b9c773f1ba997136b-1715385451127/radiant.png"
          path="https://www.radiantmedicalsolutions.com/"
        />
        <PortfolioItem
          title="Lifted Aesthetics"
          shortDescription="We collaborated as the Development team in the creation of Lifted Aesthetics website using the WordPress Kadence theme."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/0da386412bda948519061f3827df0cee-1715385635247/Lifted%20Aesthetics.png"
          path="https://liftedaestheticsclt.com/"
        />
        <PortfolioItem
          title="East Hill Medical Group"
          shortDescription="We collaborated as the Development team in the creation of East Hill Medical Group website using the WordPress Kadence theme."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/a2ad5ed94a5641d7cb2242836ede4995-1715385657072/East%20Hill.png"
          path="https://easthillmedicalgroup.com/"
        />
        <PortfolioItem
          title="River City Aesthetics"
          shortDescription="We collaborated as the Development team in the creation of River City Aesthetics website using the WordPress Kadence theme."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/a0366c09bb5887989ae79c681ecc04be-1715385839421/River%20City%20Aesthetics.png"
          path="https://rivercityaesthetics.com/"
        />
        <PortfolioItem
          title="Vibrant Health & Beauty"
          shortDescription="We collaborated as the Development team in the creation of Vibrant Health & Beauty website using the WordPress Kadence theme."
          img="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/31a754b2434745466cc1551238f8275a-1715385760753/Vibrant%20Health%20_%20Beauty.png"
          path="https://www.vibranthealthandbeauty.com/"
        />
      </div>
      <PortfolioCTA />
    </>
  );
};

export default PortfolioPage;
