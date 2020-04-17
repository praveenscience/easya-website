import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import SubjectsBannerImg from "../../assets/subjects-banner.png";

const SubjectsIntro = () => {
  return (
    <>
      <h1>We’ve got you covered.</h1>
      <div className="Subjects-Banner">
        <img src={SubjectsBannerImg} alt="Banner" />
      </div>
      <p>
        EasyA provides students with the highest quality learning experience
        possible. All of our super tutors have scored top grades in Maths
        A-level, with many studying Maths, Engineering and Natural Science
        degrees at the graduate or undergraduate level. Head over to our{" "}
        <Link to={Paths.About}>team page</Link> to find out more about who our
        tutors are. And some more great news! Although we started out providing
        GCSE and iGCSE maths help, due to high demand, we have expanded to
        include support for 11+ maths too. See below for just some of the topics
        our super tutors cover.
      </p>
    </>
  );
};

export default SubjectsIntro;
