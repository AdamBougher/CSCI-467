import React from 'react';
import "../App.css";
import Divider from '@mui/material/Divider';

export function ItemCard(props) {
  return (
    <div className="item-card">
      <div id="left">
        <img src={props.image} alt={props.name} />
      </div>
      
      <div className="right-text">
        <h2>{props.name}</h2>
        <h3>${props.cost}</h3>
        <h4>Quantity: {props.quantity}</h4>
        <h4>{props.descr}</h4>
        <button type="button">Add To Cart</button>
      </div>
      <div id ="left"/>  
      <Divider orientation="vertical" variant="middle" flexItem />
    </div>
  );
}
