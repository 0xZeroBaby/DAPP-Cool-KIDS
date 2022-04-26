import React from "react";
import startimage from "../assets/banners/start.png";
import Fade from "react-reveal/Zoom";

export default function Start() {

    return (
        <div className="start-container">
        <div className="start-image">
        <Fade bottom>
            <img src={startimage} alt="start"></img>
        </Fade>
        </div>
        </div>

    )
}