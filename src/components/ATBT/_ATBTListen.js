import React from "react";
import TeacherSlider from "../Shared/Banners/TeacherSlider";
import _ from "../../constants/Translations/Translations";

const SliderSettings = {
  arrows: true
};
const ATBTListen = () => {
  const { Title } = _.ATBT.EasyListen;
  return (
    <section className="ATBT-Listen easya-bgc-trans-seance">
      <h2>{Title}</h2>
      <div className="ATBT-Listen-Slides">
        <TeacherSlider ExtraSettings={SliderSettings} />
      </div>
    </section>
  );
};

export default ATBTListen;
