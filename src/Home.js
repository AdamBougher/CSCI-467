import './App.css';
import React from 'react';

function Item(props) {
  return (
    <div>
      <body>
        <div id ="left">  
            <img src={props.image}></img>
        </div>

        <div id ="righttext">  
          <h2>{props.name}</h2>
          <h3>${props.cost}</h3>
          <h4>Quantity: {props.quantity}</h4>
          <h4>{props.descr}</h4>
          <button type="button">Add To Cart</button> 
        </div>
      </body>
      <div className="clear"></div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to Ryan Autoparts!</h1>
      <Item image="shitbox.jpg" name="Shit box" cost="5.99" quantity="20" descr="Shit car lol" />
      <Item image="porsche.jpg" name="Porsche" cost="100000" quantity="2" descr="Nice car" />
      <Item image="lambo.jpg" name="Lambo" cost="200000" quantity="69" descr="Lambo up!" />
      <a href="http://localhost:3000/#/Admin">Admin</a>
      <a href="http://localhost:3000/#/Checkout">Checkout</a>
    </div>
  );
}
