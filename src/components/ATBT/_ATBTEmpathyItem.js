import React from "react";
import { Link } from "react-router-dom";
import Paths from "../../constants/Paths";

const ATBTEmpathyItem = ({ Image, Title, Text, Reverse }) => {
  return (
    <div className={"ATBT-Empathy-List-Item" + (Reverse ? " Reverse" : "")}>
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
