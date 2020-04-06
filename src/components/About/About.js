import React from "react";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <main className="About"></main>;
};

export default About;
