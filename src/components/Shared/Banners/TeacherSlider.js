import React from "react";
import Slider from "react-slick";

const SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};
const TeacherSlider = ({ ExtraSettings = {} }) => {
  return (
    <div className="TeacherSlider">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...{ ...SliderSettings, ...ExtraSettings }}>
        {[
          {
            Text:
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge. When he’s not tutoring, he’s using his mathematical abilities to understand the financial markets.",
            Author: "Jonathan Lee",
            Role: "Trigonometry Teacher, Cambridge University.",
            Image: "https://i.imgur.com/EV26kc1.png"
          },
          {
            Text:
              "Phil is currently studying towards a Master’s Degree in Maths at Cambridge. When he’s not tutoring, he’s using his mathematical abilities to understand the financial markets.",
            Author: "Phil Lee",
            Role: "Trigonometry Teacher, Cambridge University.",
            Image: "https://i.imgur.com/EV26kc1.png"
          },
          {
            Text:
              "Dom is currently studying towards a Master’s Degree in Maths at Cambridge. When he’s not tutoring, he’s using his mathematical abilities to understand the financial markets.",
            Author: "Dom Lee",
            Role: "Trigonometry Teacher, Cambridge University.",
            Image: "https://i.imgur.com/EV26kc1.png"
          }
        ].map((slide, key) => (
          <div className="TeacherSlider-Slide" key={key}>
            <div className="TeacherSlider-Slide-Text">
              <h3>{slide.Text}</h3>
              <h4>{slide.Author}</h4>
              <p>{slide.Role}</p>
            </div>
            <div className="TeacherSlider-Slide-Image">
              <img src={slide.Image} alt={slide.Author} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeacherSlider;
