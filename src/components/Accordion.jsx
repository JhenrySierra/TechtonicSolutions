import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
 
export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <div className="w-[70%] mx-auto mb-[10rem] mt-[10rem] flex-wrap min-w-[310px]">
        <Typography
          color="white"
          variant="h3"
          className="text-center mb-10 tracking-widest"
        >
          Frequently Asked Questions
        </Typography>

        <Accordion open={open === 1}>
          <AccordionHeader
            className="text-white accordionHeader tracking-widest font-thin hover:text-deep-orange"
            onClick={() => handleOpen(1)}
          >
            What's the process for creating a website with your agency?
          </AccordionHeader>
          <AccordionBody className="tracking-wide text-xl">
            We start with an initial consultation to discuss your needs and
            goals. Then we create a design concept and develop the website.
            Finally, we revise the website and launch it.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            className="text-white accordionHeader tracking-widest font-thin hover:text-deep-orange"
            onClick={() => handleOpen(2)}
          >
            Do you offer website maintenance and hosting services?
          </AccordionHeader>
          <AccordionBody className="tracking-wide text-xl">
            Yes, we offer website maintenance and hosting services for a monthly
            fee.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            className="text-white accordionHeader tracking-widest font-thin hover:text-deep-orange"
            onClick={() => handleOpen(3)}
          >
            How long does it take to complete a website project?
          </AccordionHeader>
          <AccordionBody className="tracking-wide text-xl">
            The timeline for a website project depends on the complexity of the
            website and the scope of the project. We will provide you with an
            estimated timeline during our initial consultation.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            className="text-white accordionHeader tracking-widest font-thin hover:text-deep-orange"
            onClick={() => handleOpen(4)}
          >
            Will my website be optimized for search engines?
          </AccordionHeader>
          <AccordionBody className="tracking-wide text-xl">
            Yes, we include basic search engine optimization in all of our
            website development projects. Advanced search engine optimization is
            available as an add-on service.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader
            className="text-white accordionHeader tracking-widest font-thin hover:text-deep-orange"
            onClick={() => handleOpen(5)}
          >
            Do you offer e-commerce integration services?
          </AccordionHeader>
          <AccordionBody className="tracking-wide text-xl">
            Yes, we offer e-commerce integration services for businesses that
            want to sell their products or services online.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}