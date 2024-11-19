import React from 'react';
import SiteNav from "../components/siteNav";
import '../App.css';
import Parts from "../components/parts";

export default function Warehouse() {
  return (
    <body>
    <div className="header">
    <h1>Warehouse</h1>
    </div>
      <SiteNav />
      <h2>Orders to Process</h2>
    </body>
  );
}