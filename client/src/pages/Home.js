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
      <Parts />
    </div>
  );
}
