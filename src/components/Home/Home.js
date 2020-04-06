import React from "react";
import HomeBanner from "./_HomeBanner";
import Child247 from "./_Child247";
import BackedByBanner from "./_BackedByBanner";
import HomeSubjects from "./_HomeSubjects";

const Home = () => {
  return (
    <main className="Home">
      <HomeBanner />
      <Child247 />
      <BackedByBanner />
      <HomeSubjects />
    </main>
  );
};

export default Home;
