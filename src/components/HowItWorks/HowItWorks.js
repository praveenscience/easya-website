import React from "react";
import HIWIntro from "./_HIWIntro";
import HIWSteps from "./_HIWSteps";

const HowItWorks = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="HowItWorks">
      <HIWIntro />
      <HIWSteps />
    </main>
  );
};

export default HowItWorks;
