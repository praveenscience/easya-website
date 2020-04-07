import React from "react";
import HIWIntro1 from "../../assets/HowItWorks-1.svg";
import HIWIntro2 from "../../assets/HowItWorks-2.svg";
import HIWIntro3 from "../../assets/HowItWorks-3.svg";

const HIWIntro = () => {
  return (
    <section className="HowItWorks-Intro easya-bgc-supernova">
      <h1>EasyA is a modern student tutor platform.</h1>
      <div className="HowItWorks-Intro-Steps">
        {[
          {
            Image: HIWIntro1,
            Title: "Submit",
            Desc: (
              <>
                Students open the app, <br />
                click and ready to go
              </>
            )
          },
          {
            Image: HIWIntro2,
            Title: "Connect",
            Desc: (
              <>
                Our app connects you <br />
                with a tutor
              </>
            )
          },
          {
            Image: HIWIntro3,
            Title: "Ask",
            Desc: (
              <>
                Use the virtual classroom <br />
                experience to resolve your doubts
              </>
            )
          }
        ].map((step, key) => (
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
