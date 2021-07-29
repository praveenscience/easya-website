import React, { useEffect } from "react";
import ATBTEasyApplyStep from "./_ATBTEasyApplyStep";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const ATBTEasyApply = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, Steps } = _.ATBT.EasyApply;
  return (
    <section className="ATBT-EasyApply" data-aos="fade-down">
      <h2>{Title}</h2>
      <div className="ATBT-EasyApply-Steps">
        {Steps.map((step, key) => (
          <ATBTEasyApplyStep key={key} {...{ ...step, Id: key + 1 }} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEasyApply;
