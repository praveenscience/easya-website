import React from "react";
import MonthlyPricingIntro from "./_MonthlyPricingIntro";
import PricingExpertTutors from "./_PricingExpertTutors";
import PricingTrusted from "./_PricingTrusted";
import PricingMoreReasons from "./_PricingMoreReasons";
import PricingFAQ from "./_PricingFAQ";
import Scrolltop from "../Home/_scrolltop";
const MonthlyPricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing MonthlyPricing">
      <MonthlyPricingIntro />
      <PricingExpertTutors />
      <PricingTrusted />
      <PricingMoreReasons />
      <PricingFAQ />
      <Scrolltop/>
    </main>
  );
};

export default MonthlyPricing;
