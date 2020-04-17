import React from "react";
import HIWStep from "./_HIWStep";
import HIW1 from "../../assets/HIW-1.png";
import HIW2 from "../../assets/HIW-2.png";
import HIW3 from "../../assets/HIW-3.png";

const Steps = [
  {
    Order: 1,
    Title: "Submit your question",
    Desc:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    Image: HIW1,
    Heading: "Click a picture and you’re rolling",
    Text:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want. Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    BGC: "easya-bgc-trans-seance",
    Reverse: false
  },
  {
    Order: 2,
    Title: "Connect with the tutor",
    Desc:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    Image: HIW2,
    Heading: "Send your click and sit back",
    Text:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want. Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    BGC: "easya-bgc-trans-tango",
    Reverse: true
  },
  {
    Order: 3,
    Title: "Submit your question",
    Desc:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    Image: HIW3,
    Heading: "It’s easy as A, B, C",
    Text:
      "Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want. Collecting feedback is critical for the maturation of your product. Stay ahead of the competition by listening to what your Users really want.",
    BGC: "easya-bgc-trans-supernova right",
    Reverse: false
  }
];
const HIWSteps = () => {
  return (
    <section className="HowItWorks-Steps">
      {Steps.map((step, key) => (
        <HIWStep {...step} key={key} />
      ))}
    </section>
  );
};

export default HIWSteps;
