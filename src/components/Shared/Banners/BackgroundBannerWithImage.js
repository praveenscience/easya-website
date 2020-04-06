import React from "react";

const BackgroundBannerWithImage = ({
  Image,
  children,
  Position,
  className
}) => {
  return (
    <section className={"BackgroundBannerWithImage " + className}>
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
