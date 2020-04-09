import React from "react";
import ContactForm from "./_ContactForm";

const ContactHelp = () => {
  return (
    <section className="ContactUs-Help">
      <div className="ContactUs-Help-Text">
        <h3>We’re here to help.</h3>
        <p>
          We're available 10:00am - 8:00pm Central, Monday through Friday. We do
          our best to respond to each request with a personalized reply within{" "}
          <strong>24-48 business hours.</strong>
        </p>
        <h4>Connect with us</h4>
        <p>
          <strong>Headquarters:</strong> 71-75 Shelton Street, London, Greater
          London, United Kingdom, WC2H 9JQ
        </p>
        <p>
          <strong>Email:</strong> hello@easya.io
        </p>
      </div>
      <div className="ContactUs-Help-Form">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactHelp;
