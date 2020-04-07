import React from "react";

const AboutBrains = () => {
  return (
    <section className="About-Brains">
      <h2>Get to know the brains behind EasyA</h2>
      <article className="About-Brains-Wrap">
        {[
          {
            Title: "Phil, CEO & Co-founder",
            Edu: "Cambridge University",
            Desc:
              "Phil graduated from Cambridge University with First Class Honours in Law. He sailed right though his degree, never achieving less than a first in his end-of-year exams. Indeed, he topped his year in many of his papers, winning the Falcon Chambers Prize, One Chancery Lane Prize, Ziegler Prize, Ginsberg Prize, Peter de Somogyi Prize, Henry Arthur Thomas Exhibition, to name a few! And Cambridge, including College, Foundation, and Squire Scholarships.",
            Image: "https://i.imgur.com/EwN7oUK.png"
          },
          {
            Title: "Dom, COO & Co-founder",
            Edu: "Cambridge University",
            Desc:
              "A tutor at heart, Dom decided to leave a career in finance to focus on solving the one problem he faced as a tutor throughout university and high school: a hasslesome, inefficient and inaccessible tutoring system. Prior to co-founding EasyA, Dom worked at The Blackstone Group in New York. Prior to Blackstone, Dom worked at Goldman Sachs in its technology, media and telecom investment banking group. Dominic holds a B.S. in Finance.",
            Image: "https://i.imgur.com/R6xbv4K.png"
          }
        ].map((profile, key) => (
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
