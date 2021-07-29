import React, { useEffect } from "react";
import PricingFAQSection from "./_PricingFAQSection";
import Aos from "aos";
import 'aos/dist/aos.css'
const Answer =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati a ipsa natus veniam esse odit facilis quibusdam animi voluptates qui. Optio rerum in expedita tenetur laborum consequatur, inventore atque officia.";
const Data = [
  {
    Title: "Support",
    FAQs: [
      {
        Question: "What does the term “per session” mean in the License?",
        Answer
      },
      {
        Question: "What’s included in Upgrades?",
        Answer
      },
      {
        Question: "Is Parental Control included?",
        Answer
      }
    ]
  },
  {
    Title: "Pricing Methods",
    FAQs: [
      {
        Question: "What does the term “per session” mean in the License?",
        Answer
      },
      {
        Question: "What’s included in Upgrades?",
        Answer
      },
      {
        Question: "Is Parental Control included?",
        Answer
      }
    ]
  }
];
const PricingFAQ = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section className="Pricing-FAQ" data-aos="slide-right">
      <h2>Frequently asked questions.</h2>
      <div className="Pricing-FAQ-List">
        {Data.map((section, key) => (
          <PricingFAQSection {...section} key={key} />
        ))}
        <div className="Pricing-FAQ-List-Section">
          <h3>Wait, what - you have more questions?</h3>
          <div className="Pricing-FAQ-List-Section-Questions">
            <div className="Pricing-FAQ-List-Section-Questions-Item NoQuestion">
              <p>
                If you still have more questions, that’s cool. We understand
                that it may get a little complicated. Please reach out to our
                community and one of our friendly &amp; nerdy support team
                members will get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
