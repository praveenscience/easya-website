import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";
import Aos from "aos";
import 'aos/dist/aos.css'
const ATBTEmpathyItem = ({ Image, Title, Text, Reverse }) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className={"ATBT-Empathy-List-Item" + (Reverse ? " Reverse" : "")} data-aos="fade-left">
      <div className="ATBT-Empathy-List-Item-Image">
        <img src={Image} alt={Title} />
      </div>
      <div className="ATBT-Empathy-List-Item-Text">
        <h3>{Title}</h3>
        <p>{Text}</p>
        <div className="action-button">
          <Link className="easya-btn-nav" to={Paths.Home}>
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ATBTEmpathyItem;
