import React from "react";
import MonthlyPricingIntro from "./_MonthlyPricingIntro";

const MonthlyPricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing MonthlyPricing">
      <MonthlyPricingIntro />
    </main>
  );
};

export default MonthlyPricing;
