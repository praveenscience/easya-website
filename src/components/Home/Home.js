import React,{useEffect} from "react";
import HomeBanner from "./_HomeBanner";
import Child247 from "./_Child247";
import BackedByBanner from "./_BackedByBanner";
import HomeSubjects from "./_HomeSubjects";
import HomeParentTestimonial from "./_HomeParentTestimonial";
import HomePlans from "./_HomePlans";
import Scrolltop from "./_scrolltop";
import Aos from "aos";
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
    <main className="Home" data-aos="fade-up">
      <HomeBanner />
      <Child247 />
      <BackedByBanner />
      <HomeSubjects />
      <HomeParentTestimonial />
      <HomePlans />
    </main>
    <Scrolltop/>
    </>
  );
};

export default Home;
