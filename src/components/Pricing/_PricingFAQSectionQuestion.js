import React, { useState } from "react";
import FAQClosed from "../../assets/FAQClosed.svg";

const PricingFAQSectionQuestion = ({ Question, Answer }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div className="Pricing-FAQ-List-Section-Questions-Item">
      <p onClick={handleClick}>
        {Question}
        <img
          src={FAQClosed}
          className={IsOpen ? "Open" : null}
          alt={IsOpen ? "Close FAQ" : "Open FAQ"}
        />
      </p>
      {IsOpen && <p>{Answer}</p>}
    </div>
  );
};

export default PricingFAQSectionQuestion;
