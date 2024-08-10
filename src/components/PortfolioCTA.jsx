import React from "react";
import { Typography } from "@material-tailwind/react";
import { Button, Badge } from "@material-tailwind/react"; 
import { Link } from "react-router-dom";

const PortfolioCTA = () => {
  return (
    <div
      data-aos="zoom-in"
      className="flex justify-center items-center mt-[5rem] mb-[10rem] border border-deep-orange-500 w-[98%] md-w-[100%] py-5 md:py-10 rounded-xl mx-auto flex-wrap"
    >
      <div id="portfolioCTA" className=" w-[60%]  text-center min-w-[310px] ">
        <Typography
          variant="paragraph"
          color="white"
          className="text-center font-black tracking-widest mb-5"
        >
          {"  "}
          <span className="text-deep-orange-400  tracking-[4px]  leading-snug">
            SCHEDULE A FREE CONSULTATION
          </span>
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className="text-center w-full leading-none tracking-widest"
        >
          We can help you too {"  "}
          <span className="text-deep-orange-500   leading-none tracking-widest  "></span>
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className=" w-full mt-5 leading-relaxed tracking-widest min-w-[300px]"
        >
          Take adventage of our 15 min free consultation where we can discuss
          about the solution your business really needs.
          <br />
          <br />
          Whether you're looking to revamp your website, optimize your online
          presence, or build a new digital strategy from scratch, TECHTONIC is
          here to assist you every step of the way.
        </Typography>
        <div className="flex justify-center gap-6 mt-10 ">
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
                target="_blank"
              >
                Schedule Free consultation
              </Button>
          </Badge>
            </Link>
          <Button
            className="tracking-widest"
            ripple={true}
            variant="filled"
            color="deep-orange"
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCTA;
