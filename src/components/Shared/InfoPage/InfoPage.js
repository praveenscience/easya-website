import React from "react";

const InfoPage = ({ children, Heading }) => {
  return (
    <section className="InfoPage">
      <h1>{Heading}</h1>
      <article>{children}</article>
    </section>
  );
};

export default InfoPage;
