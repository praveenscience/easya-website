import React from "react";
import TMIntro from "./_TMIntro";
import TMStudies from "./_TMStudies";
import TMReviews from "./_TMReviews";
import AboutCurious from "../About/_AboutCurious";
import WhizImg from "../../assets/achievements/whiz.svg";
import Paths from "../../constants/Paths";

const TeachingMethods = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="TeachingMethods">
      <TMIntro />
      <TMStudies />
      <TMReviews />
      <AboutCurious
        Image={WhizImg}
        Title="Still wondering if EasyA is right for your family?"
        Action="View pricing"
        ActionLink={Paths.Home}
      />
    </main>
  );
};

export default TeachingMethods;
