import React from "react";
import MonthlyPricingIntro from "./_MonthlyPricingIntro";
import PricingExpertTutors from "./_PricingExpertTutors";
import PricingTrusted from "./_PricingTrusted";
import PricingMoreReasons from "./_PricingMoreReasons";

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
    </main>
  );
};

export default MonthlyPricing;
