import React from "react";
import ATBTEasyApplyStep from "./_ATBTEasyApplyStep";

const Steps = [
  {
    Title: "Submit application",
    Time: "(~15 min)",
    Text:
      "Fill a role-specific application that includes some basic information."
  },
  {
    Title: "Take the Math challenge",
    Time: "(~60 min)",
    Text:
      "Take a Math quiz that will prove your knowledge. Because we value your skills, not your CV."
  },
  {
    Title: "Tutor mimic session",
    Time: "(~10 min)",
    Text: "Do a test drive and see how students ask you questions."
  },
  {
    Title: "Receive questions!",
    Time: "(as long as you want)",
    Text:
      "Become visible to all students and get matches with the relevant ones."
  }
];
const ATBTEasyApply = () => {
  return (
    <section className="ATBT-EasyApply">
      <h2>It’s easy to apply</h2>
      <div className="ATBT-EasyApply-Steps">
        {Steps.map((step, key) => (
          <ATBTEasyApplyStep key={key} {...{ ...step, Id: key + 1 }} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEasyApply;
