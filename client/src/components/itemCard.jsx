import React from 'react';
import "../App.css";
import { useState } from 'react';

export function ItemCard(props) {
  const { cart, addToCart, cost, image, name, weight, quantity, itemID } = props;

  function handleClick(id) {
    addToCart((prevCart) => {
        const cartMap = new Map(prevCart); 
        const value = cartMap.get(id) || 0; 
        cartMap.set(id, value + 1); 
        return cartMap;
    });
  }

  function removeItem(id) {
    addToCart((prevCart) => {
        const cartMap = new Map(prevCart); 
        const value = cartMap.get(id) || 0; 

        if(value > 0) {
          cartMap.set(id, value - 1); 
        }
        
        return cartMap;
    });
  }

  return (
    <div className="item-card">
      <div id="left">
        <img src={image} alt={name} />
      </div>
      
      <div className="right-text">
        <h2 className="item-name">{name}</h2>
        <h3 className="item-price">${cost}</h3>
        <h4 className="item-weight">Weight: {weight}</h4>
        <h4 className="item-quantity">{quantity} - In stock</h4>
          <div className="button-container">
            <button onClick={() => handleClick(itemID)}>Add To Cart ({cart.get(itemID) || 0})</button>
            <button onClick={() => removeItem(itemID)}>Remove From Cart</button>
          </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}
