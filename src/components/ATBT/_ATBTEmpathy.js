import React, { useEffect } from "react";
import ATBTEmpathyItem from "./_ATBTEmpathyItem";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const ATBTEmpathy = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, List } = _.ATBT.Empathy;
  return (
    <section className="ATBT-Empathy" data-aos="fade-up">
      <h2>{Title}</h2>
      <div className="ATBT-Empathy-List">
        {List.map((item, key) => (
          <ATBTEmpathyItem {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEmpathy;
