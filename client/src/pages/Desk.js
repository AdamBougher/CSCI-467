import SiteNav from "../components/siteNav";
import React from "react";
import '../App.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";

export default function Desk() {
    return (
      <body>
      <div className="header">
      <h1>Receiving Desk</h1>
      </div>
        <SiteNav />
        <Table class="desk">
        <TableHead>
          <TableRow>
            <TableCell>Order #</TableCell>
            <TableCell>Part Number</TableCell>
            <TableCell>Desc</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        </Table>
      </body>
    );
}