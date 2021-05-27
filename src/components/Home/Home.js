import React from "react";
import HomeBanner from "./_HomeBanner";
import Child247 from "./_Child247";
import BackedByBanner from "./_BackedByBanner";
import HomeSubjects from "./_HomeSubjects";
import HomeParentTestimonial from "./_HomeParentTestimonial";
import HomePlans from "./_HomePlans";
import Scrolltop from "./_scrolltop";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Home">
      <HomeBanner />
      <Child247 />
      <BackedByBanner />
      <HomeSubjects />
      <HomeParentTestimonial />
      <HomePlans />
      <Scrolltop/>
    </main>
  );
};

export default Home;
