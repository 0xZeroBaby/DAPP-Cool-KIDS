import React from "react";
import infoicon from "../assets/icons/infoicon.png";

export default function Infobox () {

    return (

<div className="infobox">
  <div className="infobox__infoicon">
    <img src={infoicon} alt="infoicon"></img>
  </div>
  <br></br>
  <p class="infobox__infotitle">Infobox!</p>
  <p class="infobox__infodescription">Don't forget to follow our social pages, don't miss the chance to partecipate contests, raffles and more!</p>
  <p class="infobox__infodescription">Our mission is to deliver a strong-community based NFT.</p> 
  <p class="infobox__infodescription">Don't forget to follow our social pages, don't miss the chance to partecipate contests, raffles and more! Our mission is to deliver a strong-community based NFT. Our mission is to deliver a strong-community based NFT.</p>
</div>





    )
}