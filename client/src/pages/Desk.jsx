import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import '../App.css';

export default function ReceivingDesk() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [orders, setParts] = useState([]);


  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api/orders');
       setParts(response.data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  //filter products based on search query
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const results = products.filter(product =>
      product.description.toLowerCase().includes(lowercasedQuery) ||
      product.partNumber.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(results);
  }, [searchQuery, products]);

  //update product quantity
  const updateQuantity = async (productId) => {
    try {
      const productToUpdate = products.find(product => product.id === productId);
      const newQuantity = productToUpdate.quantityOnHand + parseInt(quantity, 10);

      await axios.put(`http://localhost:8080/api/products/${productId}`, {
        quantityOnHand: newQuantity
      });

      setQuantity(0); //reset input field
      fetchProducts(); //refresh data
    } catch (error) {
      console.error("Error updating product quantity:", error);
    }
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
            <TableRow key={product.id}>
              <TableCell>{product.partNumber}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantityOnHand}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  label="Add Quantity"
                  variant="outlined"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateQuantity(product.id)}
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