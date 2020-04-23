import React from "react";
import SubjectsBannerImg from "../../assets/subjects-banner.png";
import _ from "../../constants/Translations/Translations";

const SubjectsIntro = () => {
  const { Title, SubjectsBannerImgAlt, Text } = _.Subjects.SubjectsIntro;
  return (
    <>
      <h1>{Title}</h1>
      <div className="Subjects-Banner">
        <img src={SubjectsBannerImg} alt={SubjectsBannerImgAlt} />
      </div>
      <p>{Text}</p>
    </>
  );
};

export default SubjectsIntro;
