import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import PersonalHeader from "../components/PersonalHeader";
import { Typography } from "@material-tailwind/react";

import TechnologiesItem from "../components/TechnologiesItem";

const PersonalPortfolio = () => {
  return (
    <>
      <PersonalHeader />
      <div>
        <Typography variant="h3" color="white" className="text-center">
          My Expertise{" "}
          <span className="text-deep-orange-500 align-middle">
            / Core Technologies
          </span>
        </Typography>
        <div className="flex justify-around mx-auto mt-10 mb-[-4rem] max-w-[1080px] flex-wrap min-w-[300px]">
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256" />

          <TechnologiesItem icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/react-9305891-7694090.png?f=webp&w=256" />

          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-5379348-4492470.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/wordpress-2752021-2284838.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/php-2752101-2284918.png?f=webp&w=256" />
          <TechnologiesItem icon="https://www.svgrepo.com/show/374118/tailwind.svg" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256" />
          <TechnologiesItem icon="https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256" />
        </div>
      </div>
      <div
        className="flex justify-center mt-20 mb-20 mx-auto animate__animated animate__infinite animate__bounce"
        id="portfolioItems"
      >
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
      <div className="flex flex-wrap justify-center mx-auto">
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
        <PortfolioItem
          title="Portfolio / CV Ing. Juan Sierra"
          shortDescription="We collaborated as the Design & Development team in the creation of Portfolio / CV for Civil Engineer Juan Sierra, this was made using Bootstrap."
          img="https://freelancer-bucket.s3.us-east-2.amazonaws.com/projects/66bf7d222550762e446d9804-Captura de pantalla 2024-09-09 132750.png"
          path="https://jhenrysierra.github.io/ingjuansierra/"
        />
        <PortfolioItem
          title="Jasper Stone Barbers & Spa"
          shortDescription="We collaborated as the Design & Development team to redisgn of the barbershop' website, providing a fresher and more modern look, as well as implementing new features, this was made using Squarespace."
          img="https://freelancer-bucket.s3.us-east-2.amazonaws.com/projects/Captura+de+pantalla+2024-09-15+142649.png"
          path="https://www.jsbarberspa.com/"
        />
      </div>
    </>
  );
};

export default PersonalPortfolio;
