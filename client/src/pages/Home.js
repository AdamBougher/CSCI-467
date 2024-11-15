import "../App.css";
import React from 'react';
import { ItemCard } from "../components/itemCard"; // Use named import
import SiteNav from "../components/siteNav"; // Use default import

export default function Home() {
  return (
    <div>
      <h1>Welcome to Ryan Autoparts!</h1>
      <SiteNav />
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
    </div>
  );
}
