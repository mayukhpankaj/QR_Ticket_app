import * as React from "react";
import InfoDialog from "./info-dialog";
import "./event.css";

export default function EventCard(props) {
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
          <p>
            {props.detail.discription.slice(0,100)}
          </p>
          <p>
            time: {props.detail.time} <br />
            place: {props.detail.place}
          </p>
          <InfoDialog text={props.detail.discription}/>
        </div>
      </div>
    </>
    // <Card
    //   sx={{
    //     width: 400,
    //     height: 800,
    //     display: "flex",
    //     overflow: "auto",
    //     justifyContent: "flex-end",
    //     backgroundColor: "#CCC9E7",
    //     color: "#2E3138",
    //     boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    //     backgroundImage: `url("/assets/hom1.png")`,
    //     backgroundSize: "100% 100%"
    //   }}
    // >
    //     <CardContent
    //       sx={{
    //         height: "30%",
    //         marginTop: "auto"
    //       }}
    //     >
    //       <Typography gutterBottom variant="h5" component="div">
    //         {props.title}
    //       </Typography>
    //       <Typography variant="body2" color="white">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //       <br />
    //       <Typography>
    //         Time: {props.time} <br />
    //         Place: {props.place}
    //       </Typography>
    //       <br />
    //       <InfoDialog />
    //     </CardContent>
    // </Card>
  );
}
