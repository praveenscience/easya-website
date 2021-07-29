import React, { useEffect } from "react";
import Whiz from "../../assets/achievements/whiz.svg";
import PricingMoreReasonsListItem from "./_PricingMoreReasonsListItem";
import Aos from "aos";
import 'aos/dist/aos.css'
const List = [
  {
    Icon: "Heart",
    Title: "First 5 sessions are free",
    Text:
      "Enjoy the first 5 sessions of EasyA completely free with full all of features."
  },
  {
    Icon: "Spade",
    Title: "Switch or cancel anytime",
    Text:
      "Feel free to switch between plans or cancel your subscription at any time"
  },
  {
    Icon: "Umbrella",
    Title: "Privacy is everything",
    Text:
      "We value your privacy and keep a very high level of security. Check Terms of "
  },
  {
    Icon: "Carpet",
    Title: "Billing per student",
    Text:
      "Freely add or remove members in your family according to your family size."
  }
];
const PricingMoreReasons = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section className="Pricing-MoreReasons easya-bgc-trans-seance"data-aos="fade-right">
      <div className="Pricing-MoreReasons-Col">
        <img src={Whiz} alt="Even more reasons you’ll love EasyA" />
        <h2>Even more reasons you’ll love EasyA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="Pricing-MoreReasons-Col">
        {List &&
          List.map((item, key) => (
            <PricingMoreReasonsListItem {...item} key={key} />
          ))}
      </div>
    </section>
  );
};

export default PricingMoreReasons;
