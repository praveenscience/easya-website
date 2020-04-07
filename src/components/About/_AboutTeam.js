import React from "react";
import Ball from "../../assets/ball.png";

const AboutTeam = () => {
  return (
    <section className="About-Team">
      <h2>Meet our Team</h2>
      <div className="About-Team-List">
        {[
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Edgar Morris",
            Role: "CTO",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Hannah Martinez",
            Role: "General Manager",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Duane Mendez",
            Role: "Marketing Head",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Luella Holmes",
            Role: "Insight Manager",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Mary Leonard",
            Role: "General Manager",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Delia Robertson",
            Role: "Marketing Head",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Shane Wood",
            Role: "Marketing Head",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          },
          {
            Image: "https://i.imgur.com/ATGQbXg.png",
            Name: "Adam Walton",
            Role: "Marketing Head",
            Desc: [
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge.",
              "Oliver is currently studying towards a Master’s Degree in Maths at Cambridge."
            ]
          }
        ].map((team, key) => (
          <div className="About-Team-List-Item" key={key}>
            <img src={team.Image} alt={team.Name} />
            <img src={Ball} alt="Ball" className="Ball" />
            <p className="Name">{team.Name}</p>
            <p className="Role">{team.Role}</p>
            {team.Desc.map((d, k) => (
              <p key={k}>{d}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
