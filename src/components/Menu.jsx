import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Menu() {
    return (

    <div className="menu-container">
        <div className="menu-links">
        <Link to="#team">TEAM</Link>
        <Link to="#roadmap">ROADMAP</Link>
        <a href="https://mint-coolkidsnft.netlify.app" target="_blank" rel="noopener noreferrer">MINT</a>
        <Link to="#team">SOCIAL</Link>
        </div>

    </div>

    )
}
