import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ icon, title, date, category, buttonLabel, color }) => {
  return (
    <Card
      className=" w-1/1 bg-white/0 px-0 py-0 md:px-5 md:py-5 "
      data-aos="fade-right"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-[50px] h-[50px] ml-5"
        color={color}
      />
      <CardBody className="p-3 md:p-6">
        <Typography
          variant="h6"
          color="white"
          className="tracking-widest mb-0 p-0"
        >
          {title}
        </Typography>
        <Typography color="deep-orange" className="mb-2">
          {date}
        </Typography>
        <Typography color="gray">{category}</Typography>
      </CardBody>
      <CardFooter className="pt-0 pb-0 ">
        <Button variant="text" className="flex items-center gap-2 text-white ">
          Learn More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
