import React from "react";
import HIWStep from "./_HIWStep";
import _ from "../../constants/Translations/Translations";

const HIWSteps = () => {
  const { HIWSteps } = _.HowItWorks.Steps;
  return (
    <section className="HowItWorks-Steps">
      {HIWSteps.map((step, key) => (
        <HIWStep {...step} key={key} />
      ))}
    </section>
  );
};

export default HIWSteps;
