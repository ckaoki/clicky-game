import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card" onClick= {() => props.selectCard(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default CharacterCard;