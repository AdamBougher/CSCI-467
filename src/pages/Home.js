import "../App.css";
import React from 'react';
import { ItemCard } from "../components/itemCard"; // Use named import

export default function Home() {
  return (
    <div>
      <h1>Welcome to Ryan Autoparts!</h1>
      <ItemCard
        image="shitbox.jpg"
        name="Shit box"
        cost="5.99"
        quantity="20"
        descr="Shit car lol"
      />
      <ItemCard
        image="porsche.jpg"
        name="Porsche"
        cost="100000"
        quantity="2"
        descr="Nice car"
      />
      <ItemCard
        image="lambo.jpg"
        name="Lambo"
        cost="200000"
        quantity="69"
        descr="Lambo up!"
      />

      <a href="http://localhost:3000/#/Admin">Admin</a>
      <a href="http://localhost:3000/#/Checkout">Checkout</a>
      <a href="http://localhost:3000/#/Warehouse">Warehouse</a>
      <a href="http://localhost:3000/#/Desk">Desk</a>
    </div>
  );
}
