import React, { useState, useEffect } from 'react';
import AdminTable from "../components/adminTable";
import axios from 'axios';

export default function Admin() {
  const [orders, setOrders] = useState([]);
  const [weight, setWeight] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/orders");
      const weightResponse = await axios.get("http://localhost:8080/api/weight");
      setOrders(response.data);
      setWeight(weightResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
    <div>
      <h2>Admin Panel</h2>
      <section id="Orders">
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
          />
        ))}
      </section>
      <section id="Weight">
        <h1>Weight and prices</h1>
        {weight.map((item, index) => (
          <div key={item.id}>
            <input
              type="number"
              value={item.weight}
              onChange={(e) => handleWeightChange(index, 'weight', e.target.value)}
            />
            <input
              type="number"
              value={item.cost}
              onChange={(e) => handleWeightChange(index, 'cost', e.target.value)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}