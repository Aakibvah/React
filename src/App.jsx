import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from './components/Card'
import data from './data'
export default function App(){
    const cards = data.map(element => {
       return <Card
                imgs={element.img}
                ratings={element.stats.rating}
                reviewCounts={element.stats.reviewCount}
                countrys={element.country}
                titles={element.title}
                prices={element.price}
                />
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
            
        </div>
    )
}