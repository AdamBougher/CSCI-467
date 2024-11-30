import React, { useState, useEffect } from "react"; 
import { ItemCard } from "./itemCard"; // Use named import
import axios from 'axios';

const Parts = () => {
    const [parts, setParts] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/parts');
        setParts(response.data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <div>
            <ul>
                {
                parts.map((part) => (
                    <ItemCard
                        image={part.pictureURL}
                        name={part.number}
                        descr={part.description}
                        cost={part.price}
                        weight={part.weight}
                    />
                ))
                }
            </ul>
        </div>
    );
}

export default Parts;