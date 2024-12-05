import React from 'react';
import "../App.css";

export function ItemCard(props) {
  const { cartAmt, setCount, cost, image, name, weight, quantity, itemID } = props;

  function handleClick() {
    setCount(cartAmt + 1);
  }

  return (
    <div className="item-card">
      <div id="left">
        <img src={image} alt={name} />
      </div>
      
      <div className="right-text">
        <h2>{name}</h2>
        <h3>${cost}</h3>
        <h4>Weight: {weight}</h4>
        <h4>{quantity} - In stock</h4>
        <button onClick={handleClick}>Add To Cart</button>
      </div>
      <div className="clear"></div>
    </div>
  );
}
