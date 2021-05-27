import React from "react";
import ContactIntro from "./_ContactIntro";
import ContactHelp from "./_ContactHelp";
import ContactFAQ from "./_ContactFAQ";
import ContactQuestions from "./_ContactQuestions";
import Scrolltop from "../Home/_scrolltop";
const ContactUs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="ContactUs">
      <ContactIntro />
      <ContactHelp />
      <ContactFAQ />
      <ContactQuestions />
      <Scrolltop/>
    </main>
  );
};

export default ContactUs;
