import React from "react";
import SubjectsIntro from "./_SubjectsIntro";
import SubjectBlock from "./_SubjectBlock";
import HomeParentTestimonial from "../Home/_HomeParentTestimonial";
import AboutCurious from "../About/_AboutCurious";
import _ from "../../constants/Translations/Translations";

const Subjects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { SubjectContents } = _.Subjects.Subjects;
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
