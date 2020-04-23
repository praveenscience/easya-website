import React from "react";
import _ from "../../constants/Translations/Translations";

const HIWIntro = () => {
  const { Title, Steps } = _.HowItWorks.Intro;
  return (
    <section className="HowItWorks-Intro easya-bgc-supernova">
      <h1>{Title}</h1>
      <div className="HowItWorks-Intro-Steps">
        {Steps.map((step, key) => (
          <div className="HowItWorks-Intro-Steps-Step" key={key}>
            <img src={step.Image} alt={step.Title} />
            <h3>{step.Title}</h3>
            <p>{step.Desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HIWIntro;
