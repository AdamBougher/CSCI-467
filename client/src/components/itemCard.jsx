import React from 'react';
import "../App.css";
import { useState } from 'react';

export function ItemCard(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + props.cost);
  }

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
        <button onClick={handleClick}>Add To Cart ${count}</button>
      </div>
      <div className="clear"></div>
    </div>
  );
}
