import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Typography, Navbar } from "@material-tailwind/react";
import { Logo } from "./Logo.jsx";

export default function StickyNavBar({ activePath }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { path: "/", label: "HOME", icon: "home" },
    { path: "/portfolio", label: "PORTFOLIO", icon: "photo_library" },
    { path: "/technologies", label: "TECHNOLOGIES", icon: "code" },
    { path: "/pricing", label: "PRICING", icon: "attach_money" },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map(({ path, label }) => (
        <Typography
          as="li"
          variant="h6"
          color={activePath === path ? "deep-orange" : "white"} // Highlight active tab
          className={`p-1 font-normal ${
            activePath === path ? "font-bold" : ""
          }`}
          key={path}
        >
          <Link to={path} className="flex items-center tracking-widest">
            {label}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar className="sticky mx-auto w-[100%] top-0 z-50 bg-dark border-none shadow-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between w-[100%]">
          <Logo className="h-20 rounded-lg object-cover object-center mx-[7rem] " />
          <div className="flex items-center gap-4 hidden lg:flex">
            <div className="mr-4  ">{navList}</div>
            <Link
              to="https://calendar.app.google/x3tPFtCAVSf6oaBy7"
              className="text-white"
            >
              <Button
                ripple={true}
                variant="filled"
                color="deep-orange"
                className="tracking-widest"
                target="_blank"
              >
                FREE CONSULTATION
              </Button>
            </Link>
          </div>
        </div>
      </Navbar>

      {/* Mobile Floating NavBar */}

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#464646] py-3 flex justify-around items-center lg:hidden">
        {navItems.map(({ path, icon }) => (
          <Link to={path} key={path}>
            <IconButton
              variant="text"
              className={`text-white ${
                activePath === path ? "text-deep-orange-500" : ""
              }`}
            >
              <span className="material-icons">{icon}</span>
            </IconButton>
          </Link>
        ))}
        <IconButton
          variant="filled"
          color="deep-orange"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="material-icons">keyboard_control_key</span>
        </IconButton>
      </div>

      {/* Toggleable content for the floating button */}
      {openNav && (
        <div className="fixed bottom-14 left-0 right-0 bg-dark z-40 p-4">
          <Link to="/contact" className="text-white">
            <Button
              ripple={true}
              variant="filled"
              color="deep-orange"
              className="w-full"
              target="_blank"
            >
              FREE CONSULTATION
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
