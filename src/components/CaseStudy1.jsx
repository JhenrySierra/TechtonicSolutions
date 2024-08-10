import React from "react";
import { Typography } from "@material-tailwind/react";

import IconList from "./IconList";

import { LightbulbImg } from "./Images.jsx";

const CaseStudy1 = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-[10rem] mb-[10rem] flex-wrap">
      <div
        id="caseStudy1"
        className=" md:w-[40%] min-w-[300px] p-2"
        data-aos="fade-right"
      >
        <Typography
          variant="paragraph"
          className="tracking-[4px] text-deep-orange-500 font-extrabold "
        >
          BEST WEBSITE AGENCY IN LATAM
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className=" w-full leading-none tracking-widest"
        >
          We help your business {"  "}
          <span className="text-deep-orange-500   leading-none tracking-widest">
            Level-Up
          </span>
        </Typography>
        <Typography
          variant="paragraph"
          color="white"
          className=" w-full mt-5 leading-relaxed tracking-widest "
        >
          We're a web development agency that takes care of every step of the
          website creation process, from design to deployment and maintenance.
          Our team of experts is dedicated to delivering high-quality websites
          that meet the unique needs of our clients.
        </Typography>
        <IconList />
      </div>
      <div
        id="pictureCaseStudy"
        className=" w-[40%] min-w-[300px]"
      >
        <LightbulbImg />
      </div>
    </div>
  );
};

export default CaseStudy1;