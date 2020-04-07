import React from "react";
import SubjectsIntro from "./_SubjectsIntro";
import SubjectBlock from "./_SubjectBlock";
import HomeParentTestimonial from "../Home/_HomeParentTestimonial";
import AboutCurious from "../About/_AboutCurious";

const SubjectContents = [
  {
    Title: "Basic Maths",
    Done: true,
    Contents: [
      "Negative Numbers: Four Operations",
      "Add and Subtract Fractions and Mixed Numbers",
      "Multiplication and Division of Fractions",
      "Negative Numbers: Four Operations",
      "Add and Subtract Fractions and Mixed Numbers",
      "Multiplication and Division of Fractions"
    ]
  },
  {
    Title: "Numbers",
    Done: false,
    Contents: [
      "Estimation and Significant Figures",
      "Basic Index Laws",
      "Fractional and Negative Index Laws",
      "Standard Form Calculation",
      "Surds: The Basics - Simplifying, Multiplying, Dividing",
      "Surds: Expanding Brackets",
      "Surds: Rationalising the Denominator"
    ]
  }
];
const Subjects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Home Subjects">
      <SubjectsIntro />
      <div className="Subjects-Blocks">
        {SubjectContents.map((sc, key) => (
          <SubjectBlock {...sc} key={key} />
        ))}
      </div>
      <HomeParentTestimonial />
      <div className="Subjects-Blocks">
        {SubjectContents.map((sc, key) => (
          <SubjectBlock {...sc} key={key} />
        ))}
      </div>
      <AboutCurious />
    </main>
  );
};

export default Subjects;
