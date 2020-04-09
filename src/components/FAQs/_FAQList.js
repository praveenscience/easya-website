import React from "react";
import FAQItem from "./_FAQItem";

const FAQList = ({ List }) => {
  return (
    <section className="FAQs-List">
      {List.map((item, key) => (
        <FAQItem {...item} key={key} />
      ))}
    </section>
  );
};

export default FAQList;
