import React from "react";
import ATBTEmp1 from "../../assets/ATBTEmp-1.png";
import ATBTEmp2 from "../../assets/ATBTEmp-2.png";
import ATBTEmp3 from "../../assets/ATBTEmp-3.png";
import ATBTEmpathyItem from "./_ATBTEmpathyItem";

const List = [
  {
    Image: ATBTEmp1,
    Title: "Set your own hours",
    Text:
      "We leave old-timey clock-in and clock-out schedules behind. You decide when and how often you tutor.",
    Reverse: false
  },
  {
    Image: ATBTEmp2,
    Title: "Get paid fast",
    Text:
      "We leave old-timey clock-in and clock-out schedules behind. You decide when and how often you tutor.",
    Reverse: false
  },
  {
    Image: ATBTEmp3,
    Title: "Get help at every step",
    Text:
      "We leave old-timey clock-in and clock-out schedules behind. If there’s anything that you need, you can reach us anytime.",
    Reverse: false
  }
];
const ATBTEmpathy = () => {
  return (
    <section className="ATBT-Empathy">
      <h2>A holistic tutoring platform with empathy and action.</h2>
      <div className="ATBT-Empathy-List">
        {List.map((item, key) => (
          <ATBTEmpathyItem {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEmpathy;
