import React from "react";
import mintlogo from "../assets/icons/mint.png";

export default function Mintbar() {
    return (

    <div className="mintbar-container">

        <div className="mint-title"><h4>Mint is LIVE:</h4></div>

        <div className="mintlogo">

        <a href="https://mint-coolkidsnft.netlify.app" target="_blank" rel="noopener noreferrer"><img src={mintlogo}  alt="mintlogo"/></a>
        </div>

    </div>

    )
}