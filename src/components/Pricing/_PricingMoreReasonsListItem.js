import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const PricingMoreReasonsListItem = ({ Icon, Title, Text }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="Pricing-MoreReasons-ListItem" data-aos="flip-down">
      <i className={"ReasonsIcon ReasonsIcon-" + Icon} />
      <div className="Pricing-MoreReasons-ListItem-Text">
        <h3>{Title}</h3>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default PricingMoreReasonsListItem;
