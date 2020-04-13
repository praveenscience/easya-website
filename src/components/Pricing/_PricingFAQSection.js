import React from "react";
import PricingFAQSectionQuestion from "./_PricingFAQSectionQuestion";

const PricingFAQSection = ({ Title, FAQs }) => {
  return (
    <div className="Pricing-FAQ-List-Section">
      <h3>{Title}</h3>
      <div className="Pricing-FAQ-List-Section-Questions">
        {FAQs.map((faq, key) => (
          <PricingFAQSectionQuestion {...faq} key={key} />
        ))}
      </div>
    </div>
  );
};

export default PricingFAQSection;
