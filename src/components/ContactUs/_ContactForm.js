import React from "react";
import ContactFormElement from "./_ContactFormElement";

const FormElements = [
  {
    Type: "text",
    Label: "Your Full Name",
    Name: "full-name"
  },
  {
    Type: "email",
    Label: "Your Email Address",
    Name: "email"
  },
  {
    Type: "select",
    Label: "Admission",
    Name: "admission",
    Options: ["Student", "Parent"]
  },
  {
    Type: "textarea",
    Label: "Your Comment",
    Name: "comment"
  }
];
const ContactForm = ({ action }) => {
  return (
    <form className="ContactUs-Form" action={action}>
      {FormElements.map((fe, key) => (
        <ContactFormElement {...fe} key={key} />
      ))}
      <button type="submit" className="easya-btn-nav">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
