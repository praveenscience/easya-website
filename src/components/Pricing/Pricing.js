import React from "react";
import PricingIntro from "./_PricingIntro";

const Pricing = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Pricing">
      <PricingIntro />
    </main>
  );
};

export default Pricing;
