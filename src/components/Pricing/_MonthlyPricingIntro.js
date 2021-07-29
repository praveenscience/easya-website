import React, { useEffect } from "react";
import Check from "../../assets/check-trans.png";
import Aos from "aos";
import 'aos/dist/aos.css'
const List = [
  "Priority Support",
  "Voice Notes",
  "Share Transcripts",
  "EasyA Parental Control"
];
const MonthlyPricingIntro = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <section className="Pricing-Intro MonthlyPricing-Intro" data-aos="flip-up">
      <h1>Something for everyone</h1>
      <p>Start with 5 sessions for free. No Credit Card required.</p>
      <div className="Pricing-Intro-PlanList">
        <div className="Pricing-Intro-PlanList-Item BestValue">
          <div className="BestValue-Banner">Best value</div>
          <div className="easya-bgc-white">
            <h3>Monthly</h3>
            <p>
              For unlimited access for a month - next generation Tutor
              communication blended with simple experience.
            </p>
            <p>Everything in Pay Per Session plus:</p>
            <ul>
              {List &&
                List.map((item, key) => (
                  <li key={key}>
                    <img src={Check} alt="Check" /> {item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="Pricing-Intro-PlanList-Item-Features">
            <h4>
              From <span>$150</span>/mo
            </h4>
            <p>Includes Unlimited Sessions</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPricingIntro;
