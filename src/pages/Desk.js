import "../App.css";
import React from 'react';
import { Inventory } from "../components/inventory"; // Use named import
import SiteNav from "../components/siteNav"; // Use default import

export default function Desk() {
    return (
      <body>
        <h1>Hi, this is the recieving desk page</h1>
        <SiteNav />
        <Inventory 
          image="shitbox.jpg"
          name="shitbox"
          qty="10"
        />
      </body>
    );
}