import React from "react";
import HIWIntro from "./_HIWIntro";
import HIWSteps from "./_HIWSteps";
import AceTestWithEasyA from "../Shared/Banners/AceTestWithEasyA";

const HowItWorks = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="HowItWorks">
      <HIWIntro />
      <HIWSteps />
      <AceTestWithEasyA />
    </main>
  );
};

export default HowItWorks;
