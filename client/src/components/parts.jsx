import React, { useState, useEffect } from "react"; 
import { ItemCard } from "./itemCard"; // Use named import
import axios from 'axios';

const Parts = () => {
    const [parts, setParts] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/site-db');
        setParts(response.data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div className="parts">
            {
            parts.map((part) => (
                <ItemCard
                    image={part.pictureURL}
                    name={part.description}
                    quantity={part.quantity}
                    cost={part.price}
                    weight={part.weight}
                />
            ))
            }
        </div>
    );
}

export default Parts;