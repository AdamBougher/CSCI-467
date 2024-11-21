import "../App.css";
import React from 'react';
import { ItemCard } from "../components/itemCard"; // Use named import
import SiteNav from "../components/siteNav"; // Use default import
import Parts from "../components/parts";

export default function Home() {
  return (
    <div>
      
    <div className="header">
    <h1>Ryan's Private Parts</h1>
    </div>
      <SiteNav />
      <Parts />
    </div>
  );
}
