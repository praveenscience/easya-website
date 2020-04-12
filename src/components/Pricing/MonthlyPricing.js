import React from "react";
import MonthlyPricingIntro from "./_MonthlyPricingIntro";
import PricingExpertTutors from "./_PricingExpertTutors";
import PricingTrusted from "./_PricingTrusted";

const MonthlyPricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing MonthlyPricing">
      <MonthlyPricingIntro />
      <PricingExpertTutors />
      <PricingTrusted />
    </main>
  );
};

export default MonthlyPricing;
