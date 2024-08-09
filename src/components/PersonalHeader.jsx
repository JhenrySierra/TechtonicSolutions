import React from "react";
import { Typography } from "@material-tailwind/react";
import { Button, Badge } from "@material-tailwind/react";
import { PersonalImg } from "./Images.jsx";
import { HashLink as Link } from "react-router-hash-link";

const PersonalHeader = () => {
  return (
    <div className="flex justify-center flex-wrap flex-wrap-reverse gap-20 items-center mt-[5rem] mb-[10rem]  ">
      <div id="personalHeader" className=" w-[40%] min-w-[320px]">
        <Typography
          variant="paragraph"
          color="white"
          className="font-black tracking-widest mb-5 text-right"
        >
          {"  "}
          <span className="text-deep-orange-500  tracking-[4px] text-right  leading-snug">
            FullStack Web Developer{" "}
          </span>
        </Typography>
        <Typography
          variant="h5"
          color="white"
          className=" w-full leading-none tracking-widest text-right"
        >
          Jhenry Sierra {"  "}
          <span className="text-deep-orange-500 leading-none text-right tracking-widest"></span>
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className=" w-full mt-5 leading-relaxed tracking-widest text-right"
        >
          Web Developer | Full-Stack Developer | React.js | WordPress |
          JavaScript | TypeScript | NodeJs | Techtonic Solutions
        </Typography>
        <div className="flex justify-center gap-6 mt-10">
          <Badge content="" color="red">
            <Link to="/jhenrysierra#portfolioItems" className="text-white">
              <Button
                className="tracking-widest"
                ripple={true}
                variant="outlined"
                color="white"
              >
                VIEW MY WORK
              </Button>
            </Link>
          </Badge>
          <Button
            className="tracking-widest"
            ripple={true}
            variant="filled"
            color="deep-orange"
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div id="pictureCaseStudy" className=" w-[40%]">
        <PersonalImg />
      </div>
    </div>
  );
};

export default PersonalHeader;
