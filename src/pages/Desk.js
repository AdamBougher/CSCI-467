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
        <h1>Hi, this is the recieving desk page</h1>
        <SiteNav />

        <Table class="warehouse">
        <TableHead>
          <TableRow>
            <TableCell>Order#</TableCell>
            <TableCell>Part Number</TableCell>
            <TableCell>Desc</TableCell>
            <TableCell>Quantity: </TableCell>
          </TableRow>
        </TableHead>
        </Table>

      </body>
    );
}