import React from "react"
import DashCard from "../dash-card"
import "../dashboard.css"

const eve=[
    {
        title: "event title",
        time: "18:00",
        place: "CAT HALL",
        score: "MA CHUDA"
    }
]
export default function Events(){
    return(
        <div className="event dashboard">
            <h1>
                Your Events
            </h1>
            <DashCard detail={eve[0]}/>
        </div>

    )
}