import React from 'react';
import SiteNav from "../components/siteNav";
import '../App.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import Parts from "../components/parts";

export default function Warehouse() {
  return (
    <body>
      <h1>Warehouse</h1>
      <SiteNav />
      <h2>Orders to Process</h2>
      <Parts />
      {/* <Table class="warehouse">
        <TableHead>
          <TableRow>
            <TableCell>Order#</TableCell>
            <TableCell>Printable</TableCell>
            <TableCell>Order Completed</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>

            <TableCell className="printable">
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
                Shipping label
              </Button>
            </TableCell>

            <TableCell>
              <Button variant="contained">Order Shipped</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </body>
  );
}