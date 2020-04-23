import React from "react";
import ATBTEmpathyItem from "./_ATBTEmpathyItem";
import _ from "../../constants/Translations/Translations";

const ATBTEmpathy = () => {
  const { Title, List } = _.ATBT.Empathy;
  return (
    <section className="ATBT-Empathy">
      <h2>{Title}</h2>
      <div className="ATBT-Empathy-List">
        {List.map((item, key) => (
          <ATBTEmpathyItem {...item} key={key} />
        ))}
      </div>
    </section>
  );
};

export default ATBTEmpathy;
