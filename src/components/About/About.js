import React from "react";
import AboutIntro from "./_AboutIntro";
import AboutLearn from "./_AboutLearn";
import AboutBrains from "./_AboutBrains";
import AboutTeam from "./_AboutTeam";
import AboutCurious from "./_AboutCurious";
import AboutFeatTutors from "./_AboutFeatTutors";
import AboutGPS from "./_AboutGPS";
import Scrolltop from "../Home/_scrolltop";
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
      <AboutCurious />
      <AboutFeatTutors />
      <AboutGPS />
      <Scrolltop/>
    </main>
  );
};

export default About;
