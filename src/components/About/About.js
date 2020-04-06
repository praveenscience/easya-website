import React from "react";

const About = () => {
  React.useEffect(() => {
    console.log("Loaded");
    window.scrollTo(0, 0);
  }, []);
  return <main className="About"></main>;
};

export default About;
