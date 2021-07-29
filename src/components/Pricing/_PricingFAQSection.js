import React, { useEffect } from "react";
import PricingFAQSectionQuestion from "./_PricingFAQSectionQuestion";
import Aos from "aos";
import 'aos/dist/aos.css'
const PricingFAQSection = ({ Title, FAQs }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="Pricing-FAQ-List-Section">
      <h3>{Title}</h3>
      <div className="Pricing-FAQ-List-Section-Questions"data-aos="flip-up">
        {FAQs.map((faq, key) => (
          <PricingFAQSectionQuestion {...faq} key={key} />
        ))}
      </div>
    </div>
  );
};

export default PricingFAQSection;
