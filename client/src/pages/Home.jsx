import "../App.css";
import React from 'react';
import Parts from "../components/parts";

export default function Home(props) {
  const { cartAmt, setCount,} = props;

  return (
    <section className="parts-container">
      <Parts cartAmt={cartAmt} setCount={setCount}/>
    </section>
  );
}
