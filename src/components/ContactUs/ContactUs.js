import React from "react";
import ContactIntro from "./_ContactIntro";
import ContactHelp from "./_ContactHelp";
import ContactFAQ from "./_ContactFAQ";

const ContactUs = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="ContactUs">
      <ContactIntro />
      <ContactHelp />
      <ContactFAQ />
    </main>
  );
};

export default ContactUs;
