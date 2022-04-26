import React from "react";
import Card from "./Card";
import card1 from "../assets/cards/card1.png";
import card2 from "../assets/cards/card2.png";
import card3 from "../assets/cards/card3.png";
import card4 from "../assets/cards/card4.png";
import card5 from "../assets/cards/card5.png";
import card6 from "../assets/cards/card6.png";
import card7 from "../assets/cards/card7.png";
import card8 from "../assets/cards/card8.png";
import card9 from "../assets/cards/card9.png";
import card10 from "../assets/cards/card10.png";
import card11 from "../assets/cards/card11.png";
import instaphone from "../assets/banners/insta-phone.png";

import ReactFloaterJs from 'react-floaterjs';


export default function Intro() {
  return (
    <div className="intro">
      <div className="container">
        <div className="content">
          <p className="description">
          <h1>Being a kid in '22 is not easy:</h1>
          <br></br>
          <h3>pandemics, wars, pollution, terrapectists, Elon Musk "supervillain" trying to conquer the world ...</h3>
          <br></br>
          <h3>To grow up in such a world you have to be a skilled butt splitter, and this is the historical period in which the Cool Kidz genre was formed!</h3>
          <br></br>
          <h3>Kids who grew up in a world that is falling apart will be our only hope to avoid letting the planet die and go to live on Mars.</h3>
          </p>
        </div>
      </div>
      <ReactFloaterJs>
      <div className="instaphone">
        <img src={instaphone} alt="instaphone"></img>
      </div>
      </ReactFloaterJs>
      <div className="cards">
        <div className="card1">
        <ReactFloaterJs>
          <center><Card
            image={card1}
            series="The Cool Kids NFT"
            title=""
            tag={12983}
          />
          </center>
          </ReactFloaterJs>
        </div>
        <div className="card2">
          <center>
          <ReactFloaterJs><Card
            image={card2}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card3">
          <center><ReactFloaterJs><Card
            image={card3}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card4">
          <center><ReactFloaterJs><Card
            image={card4}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card5">
        <ReactFloaterJs>
          <center><Card
            image={card5}
            series="The Cool Kids NFT"
            title=""
            tag={12983}
          />
          </center>
          </ReactFloaterJs>
        </div>
        <div className="card6">
          <center>
          <ReactFloaterJs><Card
            image={card6}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card7">
          <center><ReactFloaterJs><Card
            image={card7}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card8">
          <center><ReactFloaterJs><Card
            image={card8}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card9">
          <center><ReactFloaterJs><Card
            image={card9}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card10">
          <center><ReactFloaterJs><Card
            image={card10}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        <div className="card11">
          <center><ReactFloaterJs><Card
            image={card11}
            series="The Cool Kids NFT"
            title=""
            tag="1094"
          />
          </ReactFloaterJs>
          </center>
        </div>
        </div>
      </div>
  );
}
