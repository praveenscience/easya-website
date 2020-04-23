import React from "react";
import HIWIntro1 from "../../../assets/HowItWorks-1.svg";
import HIWIntro2 from "../../../assets/HowItWorks-2.svg";
import HIWIntro3 from "../../../assets/HowItWorks-3.svg";
import HIW1 from "../../../assets/HIW-1.png";
import HIW2 from "../../../assets/HIW-2.png";
import HIW3 from "../../../assets/HIW-3.png";

export default {
  Intro: {
    Title: "EasyA is a modern student tutor platform.",
    Steps: [
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
    ]
  },
  Steps: {
    HIWSteps: [
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
    ]
  }
};
