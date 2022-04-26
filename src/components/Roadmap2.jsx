import React from "react";
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import logogif from "../assets/icons/logo-gif.gif";

export default function Roadmap2() {
  return (
    <div className="roadmap2">
      <div className="container">
        <div className="content">
        <div className="prelaunch-title">ROADMAP 1.0</div>
            <div className="ucraine-container">
            <Slide top>
              <div className="ucraine-title">
                Achievements:
              </div>
              <p className="ucraine-description">
              ◦ Launch of the site and social networks <br></br>
  ◦ Reveal of the legendars <br></br>
  ◦ Opening Withelist: Giveaway, fan-art, contest ...<br></br>
  ◦ End of phase 1. <br></br>
  ◦ Opening mint. <br></br>
              </p>
              </Slide>
              <div className="logo-gif">
                <div className="logogif-cointainer">
                  <img src={logogif} alt="logogif"></img>
                </div>
              </div>
              </div>
              <Bounce right>
              <div className="preowner-container">
                <div className="preowner-title">
                  PHASE 2:
                </div>
              <p className="preowner-description">
              ◦ 99% Sold: We founders will quit the real job. <br></br><br></br>
              ◦ 100% Sold: Rewards for the ALL the kids with a GOLD Chicken from Los Pollos Factory! 🍗 <br></br><br></br>
              ◦ Fuck the metaverse, we at LPF don't fool you with stories of useless metaverses. We will open an online store for the purchase of fantastic handmade Kids merchandise in Italy! <br></br><br></br>
              ◦ Organization of the side project "Cool Kids for ..." bla bla bla <br></br><br></br>
              </p>
              </div>
              </Bounce>
              <Bounce left><div className="elonmask-container">
              <div className="elonmask-title">PHASE 1:</div>
              <p className="elonmask-description">
              <h3>
              ◦ 20% Kids sold: those who fall within the first 20% sold will have the opportunity to subscribe to the OG Kidz list, after confirming that they are real HODLERS. The rewards will be varied, including NFT and merch!<br></br><br></br>
              ◦ 50% Sold: [TO WRITE .............] <br></br><br></br>
               ◦ 80% Sold: [TO WRITE .............]
                </h3>
              </p>
              </div>
              </Bounce>
            </div>
        </div>
        </div>
  );
}
