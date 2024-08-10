import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { Button, Badge } from "@material-tailwind/react";

const IconList = () => {
  return (
    <div className="mt-5">
      <ul className="list-disc pl-6 space-y-4">
        <li className="flex items-center space-x-2">
          <i className="fas fa-check-double text-deep-orange-500"></i>
          <span className="text-white tracking-widest">
            We ensure your software functions optimally.
          </span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-check-double text-deep-orange-500"></i>
          <span className="text-white tracking-widest">
            We provide a seamless experience to your website visitors.
          </span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-check-double text-deep-orange-500"></i>
          <span className="text-white tracking-widest">
            Our team takes care of every step of the website creation process.
          </span>
        </li>
      </ul>
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
          Let's Talk
        </Button>
      </div>
    </div>
  );
};

export default IconList;
