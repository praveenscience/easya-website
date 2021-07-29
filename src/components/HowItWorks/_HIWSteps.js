import React, { useEffect } from "react";
import HIWStep from "./_HIWStep";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const HIWSteps = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { HIWSteps } = _.HowItWorks.Steps;
  return (
    <section className="HowItWorks-Steps"data-aos="fade-down-right">
      {HIWSteps.map((step, key) => (
        <HIWStep {...step} key={key} />
      ))}
    </section>
  );
};

export default HIWSteps;
