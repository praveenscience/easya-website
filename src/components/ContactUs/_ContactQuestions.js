import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import ArrowRight from "../../assets/arrow-right.svg";

const ContactQuestions = () => {
  return (
    <section className="ContactUs-Questions">
      {[
        {
          Title: "Have Questions?",
          Text: "Live chat with us Monday - Friday, 10am - 8pm Central.",
          LinkTo: Paths.Home,
          LinkText: (
            <>
              Launch Live Chat <img src={ArrowRight} alt="Launch Live Chat" />
            </>
          )
        },
        {
          Title: "Still Need Help?",
          Text: "Give us a call Monday - Friday, 10am - 8pm Central.",
          LinkTo: Paths.Home,
          LinkText: "Call Us: 066-579-1560"
        }
      ].map((Que, key) => (
        <div className="ContactUs-Questions-Item" key={key}>
          <h3>{Que.Title}</h3>
          <p>{Que.Text}</p>
          <Link to={Que.LinkTo}>{Que.LinkText}</Link>
        </div>
      ))}
    </section>
  );
};

export default ContactQuestions;
