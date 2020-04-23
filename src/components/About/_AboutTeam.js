import React from "react";
import Ball from "../../assets/ball.png";
import _ from "../../constants/Translations/Translations";

const AboutTeam = () => {
  const { Title, Team, BallAlt } = _.About.AboutTeam;
  return (
    <section className="About-Team">
      <h2>{Title}</h2>
      <div className="About-Team-List">
        {Team.map((team, key) => (
          <div className="About-Team-List-Item" key={key}>
            <img src={team.Image} alt={team.Name} />
            <img src={Ball} alt="Ball" className={BallAlt} />
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
