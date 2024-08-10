import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { HeroImg } from "./Images.jsx";

function HeroSection16() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <div className=" hero grid mt-20 mb-[5rem] md:mb-[25rem] min-h-[42vh] w-full lg:h-[40rem] md:h-[34rem]   bg-top bg-contain bg-no-repeat">
        <div className="container mx-auto px-4 text-center ">
          <HeroImg />

          <Typography
            variant="paragraph"
            color="white"
            className="font-black tracking-[3px] mt-[7rem] md:mt-[3.5rem] lg:mt-10 xl:mt-0 animate__animated animate__fadeInDown"
          >
            TOP{"  "}
            <span className="text-deep-orange-500   leading-snug align-middle">
              WEBSITE AGENCY
            </span>{" "}
            IN LATAM{""}.
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mx-auto my-20 mt-10 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl tracking-widest animate__animated animate__fadeInLeft"
          >
            Your Next-Level{"  "}
            <span className="text-deep-orange-500   leading-snug ">
              Website
            </span>{" "}
            Starts Here{""}.
          </Typography>
          <Typography
            variant="h5"
            color="gray"
            className=" w-3/4 mx-auto tracking-widest my-5 animate__animated animate__fadeInRight"
          >
            WHY SETTLE FOR ORDINARY?
          </Typography>
          <div className="flex justify-center gap-6 animate__animated animate__fadeInRight">
            <Link
              to="/portfolio"
              className="animate__animated animate__infinite animate__pulse"
            >
              <Badge content="6" color="deep-orange">
                <Button
                  className="tracking-widest "
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
              Learn More
            </Button>
          </div>
          <div className="flex justify-center mt-40 mx-auto animate__animated animate__fadeInDown animate__infinite">
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
        </div>
      </div>
    </>
  );
}

export default HeroSection16;
