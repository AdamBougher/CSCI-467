import SiteNav from "../components/siteNav";
import Header from "../components/Header";
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
        <Header />
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
