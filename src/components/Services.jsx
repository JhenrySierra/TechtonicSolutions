import { Typography } from "@material-tailwind/react";
import ServiceCard from "./ServiceCard";
import {
  faLaptopCode,
  faAd,
  faBullseye,
  faCodeBranch,
  faShoppingCart,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";


export default function Services() {
  return (
    <div className=" mx-auto servicesSection tracking-wide">
      <div className="ourServices ">
        <Typography
          variant="h4"
          color="white"
          className="flex justify-center mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl tracking-widest"
          data-aos="fade-down"
        >
          Discover Our Services
        </Typography>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto mt-10  ">
        <ServiceCard
          icon={faLaptopCode}
          title="Design and Development"
          date="Tailored Solutions"
          category="Create and build custom websites from scratch or using our pre-made templates"
          buttonLabel="Learn More"
          color="red"
        />
        <ServiceCard
          icon={faCodeBranch}
          title="Custom Web Applications"
          date="Increase Visibility"
          category="We build web-based software applications that can help your clients automate processes, manage data, and streamline their business operations."
          buttonLabel="Learn More"
          color="orange"
        />
        <ServiceCard
          icon={faAd}
          title="SEO & Digital Marketing"
          date="Boost Your Sales"
          category="Optimize websites for search engines to improve their visibility and ranking."
          buttonLabel="Learn More"
          color="blue"
        />
        <ServiceCard
          icon={faBullseye}
          title="Website Redesign"
          date="Visually Appealing"
          category="We update outdated websites to be more modern, visually appealing, and user-friendly."
          buttonLabel="Learn More"
          color="green"
        />
        <ServiceCard
          icon={faShoppingCart}
          title="E-commerce Development"
          date="Sell Online"
          category="We build and maintain online stores for businesses that want to sell their products or services online."
          buttonLabel="Learn More"
          color="skyblue"
        />
        <ServiceCard
          icon={faPaintBrush}
          title="Website Maintenance"
          date="Increase Visibility"
          category="Provide ongoing support for websites and web applications, fix bugs, and make updates to the codebase."
          buttonLabel="Learn More"
          color="white"
        />
      </div>
    </div>
  );
}
