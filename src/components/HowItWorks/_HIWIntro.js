import React, { useEffect } from "react";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const HIWIntro = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, Steps } = _.HowItWorks.Intro;
  return (
    <section className="HowItWorks-Intro easya-bgc-supernova" data-aos="fade-up">
      <h1>{Title}</h1>
      <div className="HowItWorks-Intro-Steps" data-aos="fade-up-left">
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
