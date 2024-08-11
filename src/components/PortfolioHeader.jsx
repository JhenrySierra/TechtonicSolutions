import React from "react";
import { Typography } from "@material-tailwind/react";
import { Button, Badge } from "@material-tailwind/react";
import { PortfolioHeaderImg } from "./Images.jsx";
import { Link } from "react-router-dom";

const PortfolioHeader = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-[5rem] mb-[10rem] flex-wrap">
      <div
        id="portfolioHeader"
        className=" w-[40%] min-w-[310px]"
        data-aos="fade-right"
      >
        <Typography
          variant="paragraph"
          color="white"
          className="font-black tracking-widest mb-5"
        >
          {"  "}
          <span className="text-deep-orange-500  tracking-[4px]  leading-snug">
            REVIEW OUR WORK
          </span>
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className=" w-full leading-none tracking-widest"
        >
          Transforming Ideas Into Reality {"  "}
          <span className="text-deep-orange-500   leading-none tracking-widest"></span>
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className=" w-full mt-5 leading-relaxed tracking-widest "
        >
          Discover how we transform ideas into reality. Browse through our
          portfolio to see the innovative and impactful web solutions we've
          created for our clients. Let our success stories inspire your next
          project.
        </Typography>
        <div className="flex justify-center gap-6 mt-10">
            <Link
              to="https://calendar.app.google/x3tPFtCAVSf6oaBy7"
              className="text-white animate__animated animate__infinite animate__pulse"
              target="_blank"
            >
          <Badge content="" color="red">
              <Button
                className="tracking-widest"
                ripple={true}
                variant="outlined"
                color="white"
              >
                FREE CONSULTATION
              </Button>
          </Badge>
            </Link>
          <Button
            className="tracking-widest"
            ripple={true}
            variant="filled"
            color="deep-orange"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div id="pictureCaseStudy" className=" w-[40%]" >
        <PortfolioHeaderImg />
      </div>
    </div>
  );
};

export default PortfolioHeader;
