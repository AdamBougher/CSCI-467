import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import '../App.css';

export default function ReceivingDesk() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setParts] = useState([]);
  const [quantities, setQuantities] = useState({}); // State object for storing quantities

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api/site-db');
    setParts(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const results = products.filter(product =>
      product.description.toLowerCase().includes(lowercasedQuery) ||
      product.partNumber.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  // Update product quantity
  const updateQuantity = async (productId, amt) => {

    if(amt < 1 || amt == null) {
      alert('Please enter a valid quantity');
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/inventory/add/${productId}`, { amt });
      console.log('Product #' + productId + ' quantity ' + amt + ' updated');
      fetchAPI(); // Refresh data
    } catch (error) {
      console.error('Error updating product quantity:', error);
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, value) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: value
    }));
  };

  return (
    <div className="receiving-desk">
      <h2>Receiving Desk - Update Inventory</h2>

      <div className="search-bar">
        <TextField
          label="Search by Description or Part Number"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Part Number</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity On Hand</TableCell>
            <TableCell>Update Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(product => (
            <TableRow key={product.number}>
              <TableCell>{product.number}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  label="Add Quantity"
                  variant="outlined"
                  value={quantities[product.number] || ''}
                  onChange={(e) => handleQuantityChange(product.number, parseInt(e.target.value))}
                  style={{ marginRight: '10px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateQuantity(parseInt(product.number), quantities[product.number])}
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}