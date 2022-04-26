import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Roadmap from "./components/Roadmap";
import Roadmap2 from "./components/Roadmap2";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Mintbar from "./components/Mintbar";
import Start from "./components/Start";
import Slider from "./components/Slider";
import Opensea from "./components/Opensea";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import Infobox from "./components/Infobox";

function App() {
  
  const theme = useState("dark");

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        .home,
        .intro,
        .buttons,
        .slider,
        .infobox,
        .start
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

return (
      <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Menu />
      <Home />
      <Intro/>
      <Slider />
      <Infobox />
      <br></br><br></br><br></br>
      <Roadmap />
      <Start />
      <Roadmap2 />
      <Opensea />
      <Team />
      <Footer />
      </div>
  );
   };
export default App;

