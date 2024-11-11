import React from 'react';
import SiteNav from "../components/siteNav";
import '../App.css';

export default function Warehouse() {
  return (
    <body>
      <h1>Warehouse</h1>
      <SiteNav />
      <div className="warehouse">
        <table>
          <thead>
            <tr>
              <th>Order#</th>
              <th>Printable</th>
              <th>Order Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="printable">
                <button>Packing list</button>
                <button>Invoice</button>
                <button>Shipping label </button>
              </td>
              <td>
                <button>Order Shipped</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  );
}