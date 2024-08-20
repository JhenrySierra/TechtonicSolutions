import React from "react";
import { Button, Input, Textarea, Typography, Card, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ContactCard = () => {
  return (
    <div
      data-aos="zoom-in"
      className="flex justify-center items-center mt-[5rem] mb-[10rem] border border-deep-orange-500 w-[98%] md-w-[100%] px-6 py-5 md:py-10 rounded-xl mx-auto flex-wrap"
    >
      <div id="portfolioCTA" className=" w-[100%]  text-left min-w-[310px] ">
        <Typography
          variant="paragraph"
          color="white"
          className="text-center font-black tracking-widest mb-5 text-deep-orange-400  tracking-[4px]  leading-snug"
        >
          GET IN TOUCH WITH US!
        </Typography>
        <Typography
          variant="h3"
          color="white"
          className="text-center w-full leading-none  tracking-widest"
        >
          Any questions? We're here to help you!
          <span className="text-deep-orange-500   leading-none tracking-widest  "></span>
        </Typography>
        <div className="flex flex-wrap">
          <div className="pl-10 w-[40%] min-w-[300px]">
            <Typography
              variant="paragraph"
              color="gray"
              className=" flex gap-3 w-full mt-5 leading-relaxed tracking-widest min-w-[300px] pt-5 pb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m-6 8h20a2 2 0 002-2V6a2 2 0 00-2-2H2a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 6l-10 7L2 6"
                />
              </svg>
              <a target="_blank" href="mailto:jhenrims@gmail.com">
                {" "}
                jhenrims@gmail.com
              </a>{" "}
            </Typography>
            <Typography
              variant="paragraph"
              color="gray"
              pb-5
              className=" flex gap-3 w-full mt-5 leading-relaxed tracking-widest min-w-[300px] pb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1111.63 7 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <a
                target="_blank"
                href="https://www.instagram.com/techtonic_solutions/?hl=en"
              >
                @TECHTONIC_Solutions
              </a>
            </Typography>
            <Typography
              variant="paragraph"
              color="gray"
              className=" flex gap-3 w-full mt-5 leading-relaxed tracking-widest min-w-[300px] pb-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.07h3.129V8.414c0-3.1 1.894-4.788 4.661-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.635h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
              <a
                target="_blank"
                href="https://www.facebook.com/people/TechTonic-Solutions/61562878084124/"
              >
                TECHTONIC Solutions
              </a>
            </Typography>
          </div>
          <Card className="w-[40%] min-w-[300px] max-w-lg mx-auto p-0 bg-black shadow-lg">
            <CardBody>
              <form
                className="space-y-3"
                action="https://formspree.io/f/mvgpbnyj"
                method="POST"
              >
                <div>
                  <Input
                    color="deep-orange"
                    variant="standard"
                    label="Name"
                    type="text"
                    className="text-white"
                    name="name"
                    required
                  />
                </div>
                <div>
                  <Input
                    color="deep-orange"
                    variant="standard"
                    label="Email"
                    type="email"
                    className="text-white"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <Input
                    color="deep-orange"
                    variant="standard"
                    label="Subject"
                    type="text"
                    className="text-white"
                    name="subject"
                  />
                </div>
                <div>
                  <Textarea
                    color="deep-orange"
                    variant="standard"
                    label="Message"
                    className="text-white"
                    rows={3}
                    name="message"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <Button color="deep-orange" type="submit" className="bg-deep-orange-500">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
