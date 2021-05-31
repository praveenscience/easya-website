import React from "react";
import PricingIntro from "./_PricingIntro";
import PricingExpertTutors from "./_PricingExpertTutors";
import PricingTrusted from "./_PricingTrusted";
import PricingMoreReasons from "./_PricingMoreReasons";
import PricingFAQ from "./_PricingFAQ";
import Scrolltop from "../Home/_scrolltop";
const Pricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing">
      <PricingIntro />
      <PricingExpertTutors />
      <PricingTrusted />
      <PricingMoreReasons />
      <PricingFAQ />
      <Scrolltop/>

    </main>
  );
};

export default Pricing;
