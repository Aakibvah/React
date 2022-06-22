import React from "react";
import logo from '../images/Airbnb-logo.png'
export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={logo} alt="airbnb logo"></img>
        </nav>
    )
}