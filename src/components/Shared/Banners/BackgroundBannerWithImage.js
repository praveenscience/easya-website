import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const BackgroundBannerWithImage = ({
  Image,
  children,
  Position,
  className
}) => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section className={"BackgroundBannerWithImage " + className} data-aos="slide-left">
      {children}
      {Image && (
        <img
          src={Image}
          className={"BackgroundBannerWithImage-Img " + Position}
          alt="Background"
        />
      )}
    </section>
  );
};

export default BackgroundBannerWithImage;
