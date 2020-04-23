import React from "react";
import _ from "../../constants/Translations/Translations";

const TMStudies = () => {
  const { Title, Text } = _.TeachingMethods.TMStudies;
  return (
    <section className="TeachingMethods-Studies">
      <h3>{Title}</h3>
      {Text && Text.map((text, key) => <p key={key}>{text}</p>)}
    </section>
  );
};

export default TMStudies;
