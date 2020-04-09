import React from "react";
import TMIntro from "./_TMIntro";
import TMStudies from "./_TMStudies";
import TMReviews from "./_TMReviews";
import AboutCurious from "../About/_AboutCurious";

const TeachingMethods = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="TeachingMethods">
      <TMIntro />
      <TMStudies />
      <TMReviews />
      <AboutCurious />
    </main>
  );
};

export default TeachingMethods;
