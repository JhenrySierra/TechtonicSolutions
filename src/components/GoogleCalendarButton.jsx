import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const GoogleCalendarButton = () => {
  useEffect(() => {
    const target = document.querySelector("#google-calendar-button");

    const loadCalendarButton = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3g0GDuu8-yNbQS_uX7EB7hXbo8gRHPSjhqlH3WfVj7NqrE9GwtJ1B_dslgpt2NH8PU6xJ4Cdtf?gv=true",
          color: "#EF6C00",
          label: "Book an appointment",
          target,
        });
      }
    };

    // Check if the script has already loaded
    if (window.calendar) {
      loadCalendarButton();
    } else {
      // Add event listener for script load
      window.addEventListener("load", loadCalendarButton);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("load", loadCalendarButton);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <link
          href="https://calendar.google.com/calendar/scheduling-button-script.css"
          rel="stylesheet"
        />
        <script
          src="https://calendar.google.com/calendar/scheduling-button-script.js"
          async
        ></script>
      </Helmet>
      <div id="google-calendar-button"></div>
    </div>
  );
};

export default GoogleCalendarButton;
