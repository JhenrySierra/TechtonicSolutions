import logo from "../assets/img/logo.png"

export function Logo({className}) {
  return (
    <>
    <a href="/">
    <img
      className={className}
      src={logo}
      alt="TechTonic"
      />
      </a>
    </>
  );
}
