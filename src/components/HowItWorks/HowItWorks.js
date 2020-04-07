import React from "react";
import HIWIntro from "./_HIWIntro";

const HowItWorks = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="HowItWorks">
      <HIWIntro />
    </main>
  );
};

export default HowItWorks;
