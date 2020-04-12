import React from "react";
import PricingExpertTutorsListItem from "./_PricingExpertTutorsListItem";
import Thunder from "../../assets/achievements/thunder.svg";
import Grow from "../../assets/achievements/highachiever.svg";
import Coaching from "../../assets/achievements/algebra.svg";

const List = [
  {
    Image: Thunder,
    Title: "Get setup fast",
    Text: "Using our app, you’re ready get answers in less 2 minutes."
  },
  {
    Image: Coaching,
    Title: "1:1 Coaching",
    Text: "Using our app, you’re ready get answers in less 2 minutes."
  },
  {
    Image: Grow,
    Title: "Grow smarter",
    Text: "Using our app, you’re ready get answers in less 2 minutes."
  }
];
const PricingExpertTutors = () => {
  return (
    <section className="Pricing-ExpertTutors">
      <h2>
        Our Expert Tutors have helped thousands of students grow... you’re next.
      </h2>
      <div className="Pricing-ExpertTutors-List">
        {List.map((item, key) => (
          <PricingExpertTutorsListItem key={key} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PricingExpertTutors;
