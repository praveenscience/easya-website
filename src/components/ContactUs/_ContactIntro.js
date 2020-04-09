import React from "react";
import ContactUsImg from "../../assets/ContactUsImg.png";

const ContactIntro = () => {
  return (
    <section className="ContactUs-Intro">
      <img src={ContactUsImg} alt="Contact Us" />
      <h1>Contact Us</h1>
      <p>
        We're available 10:00am - 8:00pm
        <br />
        Central, Monday through Friday.
      </p>
    </section>
  );
};

export default ContactIntro;
