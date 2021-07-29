import React, { useEffect } from "react";
import HIWIntro from "./_HIWIntro";
import HIWSteps from "./_HIWSteps";
import AceTestWithEasyA from "../Shared/Banners/AceTestWithEasyA";
import Scrolltop from "../Home/_scrolltop";
import Aos from "aos";
import 'aos/dist/aos.css'
const HowItWorks = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <main className="HowItWorks" data-aos="flip-left">
      <HIWIntro />
      <HIWSteps />
      <AceTestWithEasyA />
    </main>
    <Scrolltop/>
    </>
  );
};

export default HowItWorks;
