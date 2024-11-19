import "../App.css";
import React from 'react';
import { ItemCard } from "../components/itemCard"; // Use named import
import SiteNav from "../components/siteNav"; // Use default import

export default function Home() {
  return (
    <div>
      
    <div className="header">
    <h1>Ryan's Private Parts</h1>
    </div>
      <SiteNav />
      <ItemCard
        image="shitbox.jpg"
        name="Shit box"
        descr="Shit car lol"
        cost="5.99"
        quantity="20"
      />
      <ItemCard
        image="porsche.jpg"
        name="Porsche"
        descr="Nice car"
        cost="100000"
        quantity="2"
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
