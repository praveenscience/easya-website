import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const HIWStep = ({
  Order,
  Title,
  Desc,
  Image,
  Heading,
  Text,
  BGC,
  Reverse
}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={"HowItWorks-Steps-Step" + (Reverse ? " Reverse" : "")} data-aos="fade-up-right">
      <hr className="hr"></hr>
      <div className="StepRow">
        <div className="Heading">
          <h2>
            <span>{Order}.</span>
            {Title}
          </h2>
          <p className="desc">{Desc}</p>
        </div>
      </div>
      <div className="StepRow">
        <div className="ImgContainer">
          <img src={Image} alt={Heading} />
        </div>
        <div className={"BGContainer " + BGC}>
          <h3>{Heading}</h3>
          <p className="subdesc">{Text}</p>
        </div>
      </div>
    </div>
  );
};

export default HIWStep;
