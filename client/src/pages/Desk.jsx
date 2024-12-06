import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import '../App.css';

export default function ReceivingDesk() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [quantities, setQuantities] = useState({}); // State object for storing quantities

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/site-db');
      setProducts(response.data);
      setFilteredProducts(response.data); // Initialize filteredProducts with all products
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Filter products based on search query
  useEffect(() => {
    fetchAPI();
    const lowercasedQuery = searchQuery.toLowerCase();
    const results = products.filter(product =>
      product.description.toLowerCase().includes(lowercasedQuery) ||
      product.partNumber.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, products]);

  // Update product quantity
  const updateQuantity = async (productId, amt) => {
    if (amt < 1 || isNaN(amt)) {
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
          {filteredProducts.map(product => (
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
                  onClick={() => updateQuantity(product.number, quantities[product.number])}
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