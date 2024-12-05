import React, { useState, useEffect } from "react";
import AdminTable from "../components/adminTable";
import axios from "axios";

export default function Admin() {
    const [orders, setParts] = useState([]);
    const [weight, setWight] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api/orders");
        const weightResponse = await axios.get("http://localhost:8080/api/weight");
        setParts(response.data);
        setWight(weightResponse.data);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleWeightChange = (index, field, value) => {
        const updatedWeight = [...weight];
        updatedWeight[index] = { ...updatedWeight[index], [field]: value };
        setWight(updatedWeight);
    };

    return (
        <div>
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
                {weight.map((weight, index) => (
                    <div key={index}>
                        <label>
                            Weight: 
                            <input
                                type="text"
                                value={weight.weight}
                                onChange={(e) => handleWeightChange(index, "weight", e.target.value)}
                            />
                        </label>
                        <label>
                            Cost: 
                            <input
                                type="text"
                                value={weight.cost}
                                onChange={(e) => handleWeightChange(index, "cost", e.target.value)}
                            />
                        </label>
                    </div>
                ))}
            </section>
        </div>
    );
}