import React, { useEffect } from "react";
import SubjectsBannerImg from "../../assets/subjects-banner.png";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const SubjectsIntro = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, SubjectsBannerImgAlt, Text } = _.Subjects.SubjectsIntro;
  return (
    <>
      <h1>{Title}</h1>
      <div className="Subjects-Banner" data-aos="flip-up">
        <img src={SubjectsBannerImg} alt={SubjectsBannerImgAlt} />
      </div>
      <p>{Text}</p>
    </>
  );
};

export default SubjectsIntro;
