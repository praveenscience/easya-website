import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import ArrowRight from "../../assets/arrow-right.svg";
import ContactForm from "../ContactUs/_ContactForm";

const FAQHelp = () => {
  return (
    <section className="FAQs-Help">
      <h2>We’re here to help.</h2>
      <div className="FAQs-Help-Cols">
        <div className="FAQs-Help-Cols-Text">
          {[
            {
              Title: "Have Questions?",
              Text: "Live chat with us Monday - Friday, 10am - 8pm Central.",
              LinkTo: Paths.Home,
              LinkText: "Launch Live Chat"
            },
            {
              Title: "Still Need Help?",
              Text: "Give us a call Monday - Friday, 10am - 8pm Central.",
              LinkTo: Paths.Home,
              LinkText: "Call Us Now"
            }
          ].map((Que, key) => (
            <div className="Questions" key={key}>
              <h3>{Que.Title}</h3>
              <p>{Que.Text}</p>
              <Link to={Que.LinkTo}>
                {Que.LinkText} <img src={ArrowRight} alt="Launch Live Chat" />
              </Link>
            </div>
          ))}
        </div>
        <div className="FAQs-Help-Cols-Form">
          <ContactForm action={Paths.Home} />
        </div>
      </div>
    </section>
  );
};

export default FAQHelp;
