import super1 from "../assets/legendary/super1.png";
import super2 from "../assets/legendary/super2.png";
import super3 from "../assets/legendary/super3.png";
import super4 from "../assets/legendary/super4.jpg";
import super5 from "../assets//nft/nft5.png";
import super6 from "../assets/nft/122.png";
import super7 from "../assets/nft/128.png";
import super8 from "../assets/nft/136.png";
import super9 from "../assets/nft/130.png";
import super10 from "../assets/nft/134.png"
import logo from "../assets/banners/banner-leg.png"

export default function Slider() {

    return (
        
        <div className="slidercontainer">
            <div className="slider">
            <div className="slider-title">
        <p><h1>Legendary KIDS</h1>
        How cool are our Kids? The following NFT are the Legendary ones. If you're lucky you can mint one of them!.
        </p>
            <div className="slide-track">

            <div className="slide-image">
                    <a href={super1} alt="google" target="_blank" rel="noopener noreferrer"><img src={super1} alt="slide"/></a>
                    <div class="middle">
                     <div class="middletext">Kid DOGG</div>
                     </div>
                </div>

                <div className="slide-image">
                <a href={super2} target="_blank" rel="noopener noreferrer" alt="google"><img src={super2} alt="slide"/></a>
                    <div class="middle">
                     <div class="middletext">GoKid</div>
                     </div>
                </div>

                <div className="slide-image">
                <a href={super3} alt="google" target="_blank" rel="noopener noreferrer"><img src={super3} alt="slide"/></a>
                    <div class="middle">
                      <div class="middletext">Kid-Man</div>
                     </div>
                </div>

                <div className="slide-image">
                <a href={super4} alt="google" target="_blank" rel="noopener noreferrer"><img src={super4} alt="slide"/></a>
                    <div class="middle">
                        <div class="middletext">Kid-Steain</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super5} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legenday 6</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super6} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legendary 7</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super7} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legendary 8</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super8} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legendary 9</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super9} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legendary 10</div>
                    </div>
                </div>
                <div className="slide-image">
                    <img src={super10} alt="slide"/>
                    <div class="middle">
                        <div class="middletext">Legendary 10</div>
                    </div>
                </div>
                
            </div>                
            <div className="slider-title-end">
                <img src={logo} alt="logoend"></img>
        </div>
        </div>
    </div>
    </div>
    );
}