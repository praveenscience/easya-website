import React from "react";
import TestIntro from "./_TestIntro";
import TMReviews from "../TeachingMethods/_TMReviews";

const Testimonials = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Testimonials">
      <TestIntro />
      <TMReviews />
    </main>
  );
};

export default Testimonials;
