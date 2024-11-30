import React, { useState } from "react";
import SiteNav from "../components/siteNav";
import Header from "../components/Header";
import '../App.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@mui/material";
//^^^ tables

export default function Desk() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    orderNumber: "",
    partNumber: "",
    description: "",
    quantity: "",
  });

  //add product
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  //add a new product to the inventory
  const handleAddProduct = () => {
    setProducts((prev) => [...prev, newProduct]);
    setNewProduct({ orderNumber: "", partNumber: "", description: "", quantity: "" });
  };

  //clear form and product list
  const handleClear = () => {
    setProducts([]);
    setNewProduct({ orderNumber: "", partNumber: "", description: "", quantity: "" });
  };

  //remove a specific product
  const handleRemoveProduct = (indexToRemove) => {
    setProducts((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <body>
        <h1>Receiving Desk</h1>
      <div className="form-container">
        <h2>Add Delivery</h2>
        <TextField
          label="Order #"
          name="orderNumber"
          value={newProduct.orderNumber}
          onChange={handleInputChange}
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Part Number"
          name="partNumber"
          value={newProduct.partNumber}
          onChange={handleInputChange}
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Description"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
          style={{ marginRight: 10 }}
        />
        <TextField
          label="Quantity"
          name="quantity"
          type="number"
          value={newProduct.quantity}
          onChange={handleInputChange}
          style={{ marginRight: 10 }}
        />
        <Button variant="contained" onClick={handleAddProduct} style={{ marginRight: 10 }}>
          Add Product
        </Button>
        <Button variant="outlined" onClick={handleClear}>
          Clear All
        </Button>
      </div>
      <Table className="desk">
        <TableHead>
          <TableRow>
            <TableCell>Order #</TableCell>
            <TableCell>Part Number</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.orderNumber}</TableCell>
              <TableCell>{product.partNumber}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemoveProduct(index)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </body>
  );
}
