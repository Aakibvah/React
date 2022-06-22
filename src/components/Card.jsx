import React from "react";
//import katie from '../images/Katie-Zaferes'
import star from '../images/star.png'
export default function Card(props){
    return(
        <div className="card--container">
            <div className="card">
                <img src={`./images/${props.imgs}`} alt="Katie pic" className="card--image" />
                <div className="card--stats">
                    <img src={star} alt="star pic" className="card--star"></img>
                    <span className="gray">{props.ratings}</span>
                    <span className="gray">({props.reviewCounts}) .</span>
                    <span>{props.countrys}</span>
                </div>
                <p className="para">{props.titles}
                    <strong> From ${props.prices}</strong>/ person
                </p>
                
            </div>
        </div>


    )
}