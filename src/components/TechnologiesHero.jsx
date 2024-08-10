import React from "react";
import { Typography } from "@material-tailwind/react";
import { Button, Badge } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TecnologiesHero = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-[5rem] mb-[10rem] flex-wrap">
      <div id="portfolioHeader" className=" w-[55%] text-center min-w-[300px]">
        <Typography
          variant="paragraph"
          color="white"
          className="font-black tracking-widest mb-5"
          data-aos="fade-down"
        >
          {"  "}
          <span className="text-deep-orange-500  tracking-[4px]  leading-snug">
            Our Cutting-Edge Technologies{" "}
          </span>
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className=" w-full leading-none tracking-widest"
          data-aos="fade-up"
        >
          Leveraging the Best Tools to Deliver{" "}
          <span className="text-deep-orange-500  tracking-[4px]  leading-snug">
            Top-Notch{" "}
          </span>
          Solutions{" "}
          <span className="text-deep-orange-500   leading-none tracking-widest"></span>
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className=" w-full mt-5 leading-relaxed tracking-widest text-left "
          data-aos="fade-right"
        >
          At TECHTONIC, we prioritize using cutting-edge technologies to deliver
          top-tier solutions. We carefully select the best tools for each
          project, ensuring optimal performance, security, and scalability. Our
          commitment to staying updated with the latest trends ensures our
          clients always get the best in web development.
        </Typography>
        <div className="flex justify-center gap-6 mt-10" data-aos="fade-left">
          <Badge content="" color="red">
            <Link
              to="https://calendar.app.google/x3tPFtCAVSf6oaBy7"
              className="text-white"
              target="_blank"
            >
              <Button
                className="tracking-widest"
                ripple={true}
                variant="outlined"
                color="white"
              >
                Free consultation
              </Button>
            </Link>
          </Badge>
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
    </div>
  );
};

export default TecnologiesHero;
