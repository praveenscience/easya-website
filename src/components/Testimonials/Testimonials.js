import React from "react";
import TestIntro from "./_TestIntro";

const Testimonials = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Testimonials">
      <TestIntro />
    </main>
  );
};

export default Testimonials;
