import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

export default function Warehouse() {
  const [orders, setOrders] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api/orders/warehouseOrders');
    setOrders(response.data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  const orderShipped = (id) => {
    axios.put(`http://localhost:8080/api/orders/${id}`, { status: 1 })
      .then(() => fetchAPI());
  }


  return (
    <body>
      <h2>Orders to Process</h2>
      <Table class="warehouse">
        <TableHead>
          <TableRow>
            <TableCell>Order#</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Shipping to</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Order Total</TableCell>
            <TableCell>S&H Cost</TableCell>
            <TableCell>Order Weight</TableCell>
            <TableCell>Printable</TableCell>
            <TableCell>Order Completed</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          {orders.map((order) => (
            <TableRow>
            <TableCell>{order.id}</TableCell>

            <TableCell>{order.name}</TableCell>
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>${order.total}</TableCell>
            <TableCell>${order.shippingCost}</TableCell>
            <TableCell>{order.weight} lbs</TableCell>

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
              <Button variant="contained" onClick={() => orderShipped(order.id)}>Order Shipped</Button>
            </TableCell>
          </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </body>
    
  );
}
