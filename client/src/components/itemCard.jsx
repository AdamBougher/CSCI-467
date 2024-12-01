import React from 'react';
import "../App.css";

export function ItemCard(props) {
  return (
    <div className="item-card">
      <div id="left">
        <img src={props.image} alt={props.name} />
      </div>
      
      <div className="right-text">
        <h2>{props.name}</h2>
        <h3>${props.cost}</h3>
        <h4>Weight: {props.weight}</h4>
        <h4>{props.quantity} - In stock</h4>
        <button type="button">Add To Cart</button>
      </div>
      <div className="clear"></div>
    </div>
  );
}
