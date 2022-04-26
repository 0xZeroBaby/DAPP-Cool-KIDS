import React from 'react';
import teamlogo from "../assets/icons/teamlogo.png"
import team1 from "../assets/teams/team1.png";
import team2 from "../assets/teams/team2.png";
import team3 from "../assets/teams/team3.png";
import you from "../assets/teams/you.png";

export default function Team() {

  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="content">
          <center>
          <div className="team-logo">
          <img src={teamlogo} alt="teamlogo"></img>
            </div>
            <div className="team-images">
              <div className="teamimages-container">
                <div className="imgs">
            <a href="https://www.opensea.io" target="team1" rel="noopener noreferrer"><img src={team1}  alt="client"/></a>
            <a href="https://www.opensea.io" target="team2" rel="noopener noreferrer"><img src={team2}  alt="client"/></a>
            <a href="https://www.opensea.io" target="team3" rel="noopener noreferrer"><img src={team3}  alt="client"/></a>
            <a href="https://www.opensea.io" target="teamyou" rel="noopener noreferrer"><img src={you}  alt="client"/></a>
            </div>
</div>
            </div>
          </center>
        </div>
        </div>
      </section>
  );
}
