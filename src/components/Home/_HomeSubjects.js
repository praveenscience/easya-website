import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeSubjectsItem from "./_HomeSubjectsItem";
import Paths from "../../constants/Paths";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const HomeSubjects = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Subjects, Title, Text, AllSubjects } = _.Home.HomeSubjects;
  return (
    <section className="Home-Subjects" data-aos="fade-left">
      <h2>{Title}</h2>
      <ul className="Home-Subjects-List">
        {Subjects.map((sub, key) => (
          <HomeSubjectsItem key={key} {...sub} />
        ))}
      </ul>
      <p>{Text}</p>
      <div className="action-button">
        <Link to={Paths.Subjects} className="easya-btn-nav">
          {AllSubjects}
        </Link>
      </div>
    </section>
  );
};

export default HomeSubjects;
