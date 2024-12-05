import "../App.css";
import React from 'react';
import Parts from "../components/parts";

export default function Home(props) {
  const { cart, addToCart } = props;

  return (
    <section className="parts-container">
      <Parts cart={cart} addToCart={addToCart}/>
    </section>
  );
}
