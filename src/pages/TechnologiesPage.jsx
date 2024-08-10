import React from "react";
import TechnologiesItem from "../components/TechnologiesItem";
import TechnologiesHero from "../components/TechnologiesHero";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";
import { DefaultAccordion } from "../components/Accordion";

const TechnologiesPage = () => {
  return (
    <>
      <TechnologiesHero />
      <Typography
        variant="h3"
        color="white"
        className="text-center"
        data-aos="fade-up"
      >
        Core Technologies
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto mt-10">
        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256"
          title="JavaScript"
          date="Interactive Web Development"
          category="JavaScript powers dynamic content, form validations, and complex web applications, making it essential for interactive web development."
          buttonLabel="Learn More"
          color="yellow"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/react-9305891-7694090.png?f=webp&w=256"
          title="React.js"
          date="Reusable Components"
          category="React.js promotes the creation of reusable components, improving development efficiency and application performance."
          buttonLabel="Learn More"
          color="blue"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=256"
          title="Node.js"
          date="Scalable Server-Side Scripting"
          category="Node.js enables server-side scripting, allowing developers to create scalable and high-performance web applications."
          buttonLabel="Learn More"
          color="green"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/express-js-5379348-4492470.png?f=webp&w=256"
          title="Express.js"
          date="Simplified Web Development"
          category="Express.js simplifies the development of web applications by providing robust features for routing, middleware, and server management."
          buttonLabel="Learn More"
          color="green"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256"
          title="MongoDB"
          date="Scalable NoSQL Database"
          category="MongoDB stores data in a JSON-like format, making it ideal for modern web applications that handle large volumes of data."
          buttonLabel="Learn More"
          color="green"
        />
      </div>
      <Typography
        variant="h3"
        color="white"
        className="text-center"
        data-aos="fade-right"
      >
        Supporting Technologies
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto mt-10">
        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/html-2752158-2284975.png?f=webp&w=256"
          title="HTML5"
          date="Enhanced Multimedia"
          category="HTML5 provides enhanced support for multimedia, improved performance, and better integration with modern web applications."
          buttonLabel="Learn More"
          color="blue"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=webp&w=256"
          title="CSS3"
          date="Advanced Styling"
          category="CSS3 enables more advanced styling and animations, allowing for responsive design, making web pages look great on any device."
          buttonLabel="Learn More"
          color="blue"
        />
        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/wordpress-2752021-2284838.png?f=webp&w=256"
          title="WordPress"
          date="Popular Content Management System"
          category="WordPress is a versatile content management system that allows for easy website creation, customization, and management, supporting a wide range of themes and plugins."
          buttonLabel="Learn More"
          color="blue"
        />
        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/premium/png-512-thumb/php-2752101-2284918.png?f=webp&w=256"
          title="PHP"
          date="Server-Side Scripting Language"
          category="PHP is a widely-used open-source server-side scripting language designed for web development but also used as a general-purpose language. It is known for its flexibility, ease of integration with databases, and widespread use in building dynamic websites."
          buttonLabel="Learn More"
          color="blue"
        />
        <TechnologiesItem
          icon="https://www.svgrepo.com/show/374118/tailwind.svg"
          title="Tailwind CSS"
          date="Utility-First CSS Framework"
          category="Tailwind CSS is a utility-first CSS framework for creating custom designs quickly and efficiently without having to leave your HTML."
          buttonLabel="Learn More"
          color="blue"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=webp&w=256"
          title="Bootstrap CSS"
          date="Popular Front-End Framework"
          category="Bootstrap is a powerful, mobile-first front-end framework for developing responsive and visually appealing websites and applications with ease using pre-designed components and utilities."
          buttonLabel="Learn More"
          color="blue"
        />
      </div>
      <Typography
        variant="h3"
        color="white"
        className="text-center"
        data-aos="fade-right"
      >
        Tools and Platforms
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto mt-10">
        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256"
          title="Git"
          date="Version Control"
          category="Git is a distributed version control system that facilitates collaboration, enabling multiple developers to work on the same project simultaneously."
          buttonLabel="Learn More"
          color="orange"
        />

        <TechnologiesItem
          icon="https://cdn.iconscout.com/icon/free/png-512/free-github-159-721954.png?f=webp&w=256"
          title="GitHub"
          date="Version Control and Collaboration"
          category="GitHub hosts Git repositories, provides tools for issue tracking, and supports project management, making it a key platform for collaboration."
          buttonLabel="Learn More"
          color="black"
        />
      </div>
      <DefaultAccordion />
    </>
  );
};

export default TechnologiesPage;
