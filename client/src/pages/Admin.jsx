import React, { useState, useEffect } from 'react';
import AdminTable from "../components/adminTable";
import axios from 'axios';
import "../App.css";

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [weight, setWeight] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/orders");
      const weightResponse = await axios.get("http://localhost:8080/api/weight");
      const ordersWithItems = await Promise.all(response.data.map(async (order) => {
        const orderItems = await getOrderItems(order.id);
        return { ...order, orderItems };
      }));
      setOrders(ordersWithItems);
      setWeight(weightResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getOrderItems = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orderLines/${id}`);
      console.log('Order items:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching order items:', error);
      return []; // Return an empty array in case of error
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleWeightChange = (index, field, value) => {
    const updatedWeight = [...weight];
    updatedWeight[index] = { ...updatedWeight[index], [field]: parseFloat(value) };
    setWeight(updatedWeight);

    const id = updatedWeight[index].id;
    updateWeightAndCost(id, updatedWeight[index].weight, updatedWeight[index].cost);
  };

  const updateWeightAndCost = async (id, weight, cost) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/weight/set/${id}`, { weight, cost });
      console.log('Weight and cost updated:', response.data);
    } catch (error) {
      console.error('Error updating weight and cost:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-header">Admin Panel</h2>
      <section id="Weight" className="weight-section">
        <h3>Weight and Prices</h3>
        <div className="weight-grid">
          {weight.map((item, index) => (
            <div key={item.id} className="weight-item">
              <input
                type="number"
                value={item.weight}
                className="weight-input"
                onChange={(e) => handleWeightChange(index, 'weight', e.target.value)}
                placeholder="Weight"
              />
              <input
                type="number"
                value={item.cost}
                className="cost-input"
                onChange={(e) => handleWeightChange(index, 'cost', e.target.value)}
                placeholder="Cost"
              />
            </div>
          ))}
        </div>
      </section>
      <section id="Orders" className="orders-section">
        <h3>Orders</h3>
        <div className="orders-container">
          {orders.map((order) => (
            <AdminTable
              key={order.id}
              id={order.id}
              name={order.name}
              email={order.email}
              addr={order.address}
              date={order.date}
              total={order.total}
              Shipped={order.Shipped}
              orderItems={order.orderItems || []} // Ensure orderItems is an array
            />
          ))}
        </div>
      </section>
    </div>
  );
}
