import React from "react"
import gifimage from "../assets/icons/logo-gif.gif";


export default function Home() {
  return (
    <div className="home" id="home">
      <div className="homecontainer">
      <center>
        <img src={gifimage} alt="gifimage"></img>
        <p>
          <h2 className="title">A collection of 4444 cool kids living in Polygon blockchain.</h2>
          </p>
          </center>
        </div>
        </div>
  );
}


