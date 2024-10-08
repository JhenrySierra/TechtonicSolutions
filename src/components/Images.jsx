import hero from "../assets/img/heroImg.jpg";
import lightbulb from "../assets/img/lightbulb.jpeg";
import ctaIMG from "../assets/img/ctaIMG.jpeg";  
import portfolioHeader from "../assets/img/portfolioHeaderImg.jpeg";
import myPicture from "../assets/img/avatar.png";
import personalImg from "../assets/img/personalImg.png"

export  function HeroImg() {
  return (
    <img
      className=" w-full rounded-lg object-cover object-center heroImg animate__animated animate__fadeInDown "
      src={hero}
      alt="heroImg"
    />
  );
}

export  function LightbulbImg() {
  return (
    <img
      className=" w-[100%] object-cover object-center rounded-[2.5rem] min-w-[280px]"
      src={lightbulb}
      alt="lightbulb"
      
    />
  );
}

export  function CtaIMG() {
  return (
    <img
      className=" w-full object-cover object-center rounded-[2.5rem]"
      src={ctaIMG}
      alt="lightbulb"
    />
  );
}

export function PortfolioHeaderImg() {
  return (
    <img
      className=" w-full aspect-square object-cover object-center rounded-[2.5rem] min-w-[150px] "
      src={portfolioHeader}
      alt="portfolioHeader"
    />
  );
}
  export function MyPicture() {
  return (
    <img
      className=" w-full aspect-square object-cover object-center rounded-[2.5rem] justify-right "
      src={myPicture}
      alt="avatar"
    />
  );
}
  export function PersonalImg() {
  return (
    <img
      className=" w-full aspect-square object-cover object-center rounded-[2.5rem]  min-w-[100px]"
      src={personalImg}
      alt="avatar"
    />
  );
}
