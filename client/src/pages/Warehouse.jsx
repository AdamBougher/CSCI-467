import React, { useState, useEffect } from 'react';
import '../App.css';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';
import jsPDF from 'jspdf';

export default function Warehouse() {
  const [orders, setOrders] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/orders/warehouseOrders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const orderShipped = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/orders/${id}`, { status: 1 });
      fetchAPI();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const generatePDF = (order, type) => {
    const doc = new jsPDF();

    // PDF Content based on type
    if (type === 'Packing List') {
      doc.setFontSize(16);
      doc.text(`Packing List for Order #${order.id}`, 10, 10);
      doc.setFontSize(12);
      doc.text(`Customer: ${order.name}`, 10, 20);
      doc.text(`Shipping Address: ${order.address}`, 10, 30);
      doc.text(`Order Total: $${order.total}`, 10, 40);
    } else if (type === 'Invoice') {
      doc.setFontSize(16);
      doc.text(`Invoice for Order #${order.id}`, 10, 10);
      doc.setFontSize(12);
      doc.text(`Customer: ${order.name}`, 10, 20);
      doc.text(`Email: ${order.email}`, 10, 30);
      doc.text(`Order Total: $${order.total}`, 10, 40);
      doc.text(`Shipping Cost: $${order.shippingCost}`, 10, 50);
    } else if (type === 'Shipping Label') {
      doc.setFontSize(16);
      doc.text(`Shipping Label for Order #${order.id}`, 10, 10);
      doc.setFontSize(12);
      doc.text(`Customer: ${order.name}`, 10, 20);
      doc.text(`Shipping Address: ${order.address}`, 10, 30);
      doc.text(`Order Weight: ${order.weight} lbs`, 10, 40);
    }

    // Save PDF with a meaningful filename
    doc.save(`${type}_Order_${order.id}.pdf`);
  };

  return (
    <div>
      <h2>Orders to Process</h2>
      <Table className="warehouse">
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
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>${order.shippingCost}</TableCell>
              <TableCell>{order.weight} lbs</TableCell>
              <TableCell>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => generatePDF(order, 'Packing List')}
                >
                  Packing List
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => generatePDF(order, 'Invoice')}
                >
                  Invoice
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => generatePDF(order, 'Shipping Label')}
                >
                  Shipping Label
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => orderShipped(order.id)}>
                  Order Shipped
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
