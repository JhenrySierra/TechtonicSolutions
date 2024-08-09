import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const TechnologiesItem = ({ icon, title, date, category, buttonLabel, color }) => {
  return (
    <Card className="w-1/1 bg-white/0 px-5 py-5 ">
      <img
        src={icon}
        alt={title}
        className="w-[50px] h-[50px] ml-5"
      />
      <CardBody>
        <Typography variant="h6" color="white" className="tracking-widest mb-0">
          {title}
        </Typography>
        <Typography color="deep-orange" className="mb-2">
          {date}
        </Typography>
        <Typography color="gray">{category}</Typography>
      </CardBody>
    </Card>
  );
};

export default TechnologiesItem;
