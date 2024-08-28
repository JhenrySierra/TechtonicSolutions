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
      className=" w-1/1 bg-white/0 px-0 py-0 md:px-5 md:py-5 hover:border-deep-orange-500 hover:border"
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
      <CardFooter className="pt-0 pb-0 "></CardFooter>
    </Card>
  );
};

export default ServiceCard;
