import React from "react";
import PricingIntro from "./_PricingIntro";
import PricingExpertTutors from "./_PricingExpertTutors";
import PricingTrusted from "./_PricingTrusted";

const Pricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing">
      <PricingIntro />
      <PricingExpertTutors />
      <PricingTrusted />
    </main>
  );
};

export default Pricing;
