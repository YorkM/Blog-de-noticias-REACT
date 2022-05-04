import React from "react";
import logo from "./../../imagenes/logo.png";

function Cabecera(){
    return(
        <header id="portfolio">
            <a href="#inicio"><img src={logo} style={{width:"65px"}} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"/></a>
            <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"><i className="fa fa-bars"></i></span>
            <div className="w3-container">
            <h1><b>My Portfolio</b></h1>
            <div className="w3-section w3-bottombar w3-padding-16">
            <span className="w3-margin-right">Filter:</span> 
            <button className="w3-button w3-black">ALL</button>
            <button className="w3-button w3-white"><i className="fa fa-diamond w3-margin-right"></i>Design</button>
            <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Photos</button>
            <button className="w3-button w3-white w3-hide-small"><i className="fa fa-map-pin w3-margin-right"></i>Art</button>
            </div>
            </div>
        </header>
    );
}
export default Cabecera;