import React from "react";
import grid from "../images/airbnb-virtual.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={grid} alt="Grid img" className="hero-image"></img>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-para">
                Join unique interactive activities led by one-of-a-kind
                 hosts—all without leaving home.
            </p>
        </section>
    )
}