import React from 'react';
import "../App.css";

export function Inventory(props) {
  return (
    <div className="item-card">
      <div id="left">
        <img src={props.image} alt={props.name} />
      </div>
      
      <div className="right-text">
        <h2>{props.qty} {props.name}</h2>
        <button type="button">Accept</button>
      </div>
      <div className="clear"></div>
    </div>
  );
}
