import React, { useState } from "react";
import "./card.css"
import Window from "./Window";

const Card = (props) => {
  const {Username, PFP} = props.user
  const [showWindow, setWindow] = useState(false);

  const toggle = () =>{
    setWindow(!showWindow)
  }

  return (
    <>
    <div className="card">
      <img src={props.imageURL} onClick={toggle} className="card-img"/>
      <div className="caption">{props.caption}</div>
      <div className="user">
        <img src={PFP} className="usr-img"/>
        <h5>{Username}</h5>
      </div>
    </div>
    { showWindow && <Window imageURL={props.imageURL} caption={props.caption} user={props.user} toggle={toggle}/> }
    </>
  );
};

export default Card;

