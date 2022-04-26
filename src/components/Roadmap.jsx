import React from "react";
import Bounce from 'react-reveal/Bounce';

export default function Roadmap() {
  return (
    <div className="roadmap" id="roadmap">
      <div className="container">
        <div className="content">
        <div className="prelaunch-title">Pre-Launch ROADMAP</div>
            <div className="ucraine-container">
              <p className="ucraine-description">
              Being owner of a CoolKids™ will bring you benefits and rewards reserved only for the holders <br></br>that will be unlocked over time, guaranteeing participation in future LP Factory projects!<br></br>And it'll lead you to be a cool kidz ass-kicker yourself.
              </p>
              </div>
              <Bounce right>
              <div className="preowner-container">
              <div className="preowner-title">10% of the Cool Kids were born in Ukraine:</div>
              <p className="preowner-description">
              We support children fleeing war by donating 10% of our proceeds to associations to help children fleeing war.
              </p>
              </div>
              </Bounce>
              <Bounce left><div className="elonmask-container">
              <div className="elonmask-title">Elon Mask SUPERVILLAIN</div>
              <p className="elonmask-description">
              <h3>At cool kids we look to the future</h3><h5>which is why 10% of our proceeds will be deposited in the piggy bank of the "Elon Marts" community to buy tickets for the first commercial trip to Mars. 🚀</h5>
              </p>
              </div>
              </Bounce>
            </div>
        </div>
        </div>
  );
}
