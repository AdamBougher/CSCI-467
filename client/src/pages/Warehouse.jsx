import React from 'react';
import '../App.css';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

export default function Warehouse() {
  return (
    <body>
      <h2>Orders to Process</h2>
      <Table class="warehouse">
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
      </Table>
    </body>
    
  );
}