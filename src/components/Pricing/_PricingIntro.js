import React from "react";
import PricingIntroPlanListItem from "./_PricingIntroPlanListItem";

const List = [
  {
    BestValue: false,
    Title: "Pay per session",
    Text:
      "For starters - get first-hand experience and better gauge your needs handy payment option.",
    PricePer: (
      <>
        From <span>$25</span>/session
      </>
    ),
    Sessions: "Limited Sessions",
    ListTitle: null,
    List: [
      "1:1 Tutors",
      "Quick Matching",
      "Live Whiteboard",
      "5 session free-trial"
    ]
  },
  {
    BestValue: true,
    Title: "Monthly",
    Text:
      "For unlimited access for a month - next generation Tutor communication blended with simple experience.",
    PricePer: (
      <>
        From <span>$150</span>/mo
      </>
    ),
    Sessions: "Includes Unlimited Sessions",
    ListTitle: "Everything in Pay Per Session plus:",
    List: [
      "Priority Support",
      "Voice Notes",
      "Share Transcripts",
      "EasyA Parental Control"
    ]
  },
  {
    BestValue: false,
    Title: "Annual",
    Text:
      "For Middle School & College years - best value for long-term unlimited access.",
    PricePer: (
      <>
        From <span>$70</span>/mo
      </>
    ),
    Sessions: "Includes Unlimited Sessions",
    ListTitle: "Everything in Pay Per Session plus:",
    List: [
      "Advanced Reports",
      "Fastest Matching",
      "Premium Tutors",
      "EasyA Parental Control"
    ]
  }
];
const PricingIntro = () => {
  return (
    <section className="Pricing-Intro">
      <h1>Something for everyone</h1>
      <p>Start with 5 sessions for free. No Credit Card required.</p>
      <div className="Pricing-Intro-PlanList">
        {List.map((item, key) => (
          <PricingIntroPlanListItem {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default PricingIntro;
