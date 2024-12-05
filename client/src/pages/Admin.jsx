import React from "react";
import AdminTable from "../components/adminTable";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Admin() {
    const [orders, setParts] = useState([]);
    const [weight, setWight] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/orders');
        const weightResponse = await axios.get('http://localhost:8080/api/weight');
        setParts(response.data);
        setWight(weightResponse.data);
    }
  
    useEffect(() => {
      fetchAPI();
    }, []);

    
    return (
    <body>
        <section id="Orders">
    {orders.map((order) => (
        <AdminTable
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
    {weight.map((weight) => (
        <p>
        weight={weight.weight}
        -
        cost={weight.cost}
        </p>
        
    ))}
    </section>

    </body>
    )
}