import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { ChipWithAvatar } from "./Chip";
const HoverCard = ({ img, title, shortDescription, path }) => {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer min-w-[310px]"
      className=" w-1/4 min-w-[310px]"
    >
      <Card className="mt-6  bg-transparent transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 hover:bg-opacity-50 hover:border hover:border-deep-orange-500 ">
        <CardHeader color="transparent" className="relative h-100">
          <img src={img} alt="card-image" className="rounded-t-lg" />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="white"
            className="mb-2 tracking-[2px]"
          >
            {title}
          </Typography>
          <Typography
            color=""
            className="text-[15px] leading-[17px] tracking-[2px] color-gray-600"
          >
            {shortDescription}
            <span className="text-sm">
              <br />
              <br />
              <ChipWithAvatar />
            </span>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mt-[-20px]">
          <Button
            className="tracking-widest"
            ripple={true}
            variant="outlined"
            color="deep-orange"
          >
            View Site
          </Button>
        </CardFooter>
      </Card>
    </a>
  );
};

export default HoverCard;
