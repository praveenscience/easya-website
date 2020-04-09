import React, { useState } from "react";
import FAQClosed from "../../assets/FAQClosed.svg";
import FAQOpen from "../../assets/FAQOpen.svg";

const FAQItem = ({ Question, Answer, defaultOpen }) => {
  const [IsOpen, setIsOpen] = useState(defaultOpen ? defaultOpen : false);
  const handleClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div className={"FAQs-List-Item" + (IsOpen ? " Open" : "")}>
      <h3 onClick={handleClick}>
        {Question}
        <img
          src={IsOpen ? FAQOpen : FAQClosed}
          alt={IsOpen ? "Close FAQ" : "Open FAQ"}
        />
      </h3>
      {IsOpen && <p>{Answer}</p>}
    </div>
  );
};

export default FAQItem;
