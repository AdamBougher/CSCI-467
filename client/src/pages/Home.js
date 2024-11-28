import "../App.css";
import React from 'react';
import SiteNav from "../components/siteNav"; // Use default import
import Header from "../components/Header";
import Parts from "../components/parts";

export default function Home() {
  return (
    <div>
      
    <Header />
      <SiteNav />
      {/* <ItemCard
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
      /> */}
      <Parts />
    </div>
  );
}
