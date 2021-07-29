import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const PricingExpertTutorsListItem = ({ Image, Title, Text }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="Pricing-ExpertTutors-List-Item" data-aos="slide-down">
      <img src={Image} alt={Title} />
      <div className="Pricing-ExpertTutors-List-Item-Text"data-aos="fade-left">
        <p>
          <strong>{Title}</strong>
        </p>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default PricingExpertTutorsListItem;
