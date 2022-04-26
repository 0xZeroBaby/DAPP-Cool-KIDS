import React from "react";
import oslogo from "../assets/icons/oslogo.png";
import instagramicon from "../assets/icons/instagramicon.png";
import twittericon from "../assets/icons/twittericon.png";
import discordicon from "../assets/icons/discordicon.png";
import ReactFloaterJs from 'react-floaterjs';
export default function Opensea() {
  return (
    <div className="opensea">
      <div className="container">
        <div className="content1">
        <ReactFloaterJs>
          <center>
          <h1 className="title">Check out the Kids on the seconday markets!</h1>
          <br></br>
          <a href="https://www.opensea.io" target="_blank" rel="noopener noreferrer"><img src={oslogo} alt="oslogo"></img></a>
          </center>
          </ReactFloaterJs>
          </div>
          <br></br>
          <div className="container">
        <div className="content2">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={twittericon}  alt="client"/></ReactFloaterJs></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={discordicon}  alt="client"/></ReactFloaterJs></a>
              <a href="https://discord.gg/vbY6kYXNxz" target="_blank" rel="noopener noreferrer"><ReactFloaterJs><img src={instagramicon}  alt="client"/></ReactFloaterJs></a>
        </div>
      </div>
    </div>
    </div>
  );
}
