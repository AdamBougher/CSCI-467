import React from 'react';
import SiteNav from "../components/siteNav";
import '../App.css';
import { Button } from '@mui/material';

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
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => window.print()}
                >
                  Packing list
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => window.print()}
                >
                  Invoice
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => window.print()}
                >
                  Shipping label{" "}
                </Button>
              </td>
              <td>
                <Button variant="contained">Order Shipped</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  );
}