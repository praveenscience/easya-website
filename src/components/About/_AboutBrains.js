import React, { useEffect } from "react";
import _ from "../../constants/Translations/Translations";
import Aos from "aos";
import 'aos/dist/aos.css'
const AboutBrains = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  const { Title, Brains } = _.About.AboutBrains;
  return (
    <section className="About-Brains" data-aos="flip-up">
      <h2>{Title}</h2>
      <article className="About-Brains-Wrap">
        {Brains.map((profile, key) => (
          <div className="About-Brains-Profile" key={key}>
            <img src={profile.Image} alt={profile.Title} />
            <h3>{profile.Title}</h3>
            <p className="lead">{profile.Edu}</p>
            <p>{profile.Desc}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default AboutBrains;
