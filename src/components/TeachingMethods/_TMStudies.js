import React from "react";
import _ from "../../constants/Translations/Translations";

const TMStudies = () => {
  const { Title, Text1, Text2, Text3, Text4 } = _.TeachingMethods.TMStudies;
  return (
    <section className="TeachingMethods-Studies">
      <h3>{Title}</h3>
      <p>{Text1}</p>
      <p>{Text2}</p>
      <p>{Text3}</p>
      <p>{Text4}</p>
    </section>
  );
};

export default TMStudies;
