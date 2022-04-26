import React from "react";
import instagramicon from "../assets/instagramicon.png";
import twittericon from "../assets/twittericon.png";
import discordicon from "../assets/discordicon.png";
import ReactFloaterJs from 'react-floaterjs';
import follow from "../assets/follow.png";

export default function Buttons() {
  return (
    <div className="buttons" id="social">
      <div className="container">
      <center><p><a href="https://opensea.io"><img src={follow} alt="follow"></img></a></p></center>
      <br></br><br></br>
        <div className="buttons-container">
          <div className="button">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={twittericon}  alt="client"/></ReactFloaterJs></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={discordicon}  alt="client"/></ReactFloaterJs></a>
              <a href="https://discord.gg/vbY6kYXNxz" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={instagramicon}  alt="client"/></ReactFloaterJs></a>
          </div>  
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
      </div>
    </div>
  );
}
