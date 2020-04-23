import React from "react";
import TestIntro from "./_TestIntro";
import TMReviews from "../TeachingMethods/_TMReviews";
import Paths from "../../constants/Paths";
import AboutCurious from "../About/_AboutCurious";
import WhizImg from "../../assets/achievements/whiz.svg";
import _ from "../../constants/Translations/Translations";

const Testimonials = () => {
  const { Title, Action } = _.Testimonials.Testimonials;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="Testimonials">
      <TestIntro />
      <TMReviews />
      <AboutCurious
        Image={WhizImg}
        Title={Title}
        Action={Action}
        ActionLink={Paths.TeachingMethods}
      />
    </main>
  );
};

export default Testimonials;
