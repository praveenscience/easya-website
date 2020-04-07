import React from "react";
import AboutIntro from "./_AboutIntro";
import AboutLearn from "./_AboutLearn";
import AboutBrains from "./_AboutBrains";
import AboutTeam from "./_AboutTeam";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="About">
      <AboutIntro />
      <AboutLearn />
      <AboutBrains />
      <AboutTeam />
    </main>
  );
};

export default About;
