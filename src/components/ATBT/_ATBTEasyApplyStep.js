import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const ATBTEasyApplyStep = ({ Id, Title, Time, Text }) => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[])
  return (
    <div className="ATBT-EasyApply-Steps-Item" data-aos="fade-up">
      <div className="ATBT-EasyApply-Steps-Item-Index">{Id}</div>
      <h3>
        {Title}
        <br />
        {Time}
      </h3>
      <p>{Text}</p>
    </div>
  );
};

export default ATBTEasyApplyStep;
