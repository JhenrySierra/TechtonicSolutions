import React from "react";
import { Typography } from "@material-tailwind/react";
import { Button, Badge } from "@material-tailwind/react";
import { CtaIMG } from "../components/Images.jsx";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <div className="flex justify-center gap-20 items-center mt-[5rem] mb-[5rem] flex-wrap mx auto flex-wrap-reverse">
      <div
        id="pictureCaseStudy"
        className=" md:w-[20%] min-w-[300px]"
      >
        <CtaIMG />
      </div>
      <div id="HomeCTA" className=" md:w-[40%] min-w-[300px] p-3" >
        <Typography
          variant="paragraph"
          color="white"
          className="font-black tracking-widest mb-5"
        >
          {"  "}
          <span className="text-deep-orange-500  tracking-[4px]  leading-snug">
            CLAIM YOUR FREE CONSULTATION
          </span>
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className=" w-full leading-none tracking-widest"
        >
          Expert Guidance for Your Website {"  "}
          <span className="text-deep-orange-500   leading-none tracking-widest"></span>
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className=" w-full mt-5 leading-relaxed tracking-widest  "
        >
          Our team of experts is here to provide personalized solutions tailored
          to your business needs. Whether you're looking for a free consultation
          or want to get in touch with us directly, we’re here to help.
        </Typography>
        <div className="flex justify-center gap-6 mt-10">
          <Link
            to="/portfolio"
            className="animate__animated animate__infinite animate__pulse"
          >
            <Badge content="6" color="deep-orange">
              <Button
                className="tracking-widest"
                ripple={true}
                variant="outlined"
                color="white"
              >
                View Portfolio
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
    </div>
  );
};

export default HomeCTA;
