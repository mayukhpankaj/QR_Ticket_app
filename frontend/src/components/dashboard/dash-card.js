import * as React from "react";
import "../event/event.css";

export default function DashCard(props) {
  return (
    <>
      <div
        className="card"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0,0,0,1)),url("http://localhost:3000/assets/hom1.png")` 
          
        }}
      >
        <div className="card-content">
          <h1>{props.detail.title}</h1>
          <h2>
            score: {props.detail.score}
          </h2>
          <p>
            time: {props.detail.time} <br />
            place: {props.detail.place}
          </p>
        </div>
      </div>
    </>
  );
}
