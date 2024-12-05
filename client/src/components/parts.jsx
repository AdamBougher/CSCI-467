import React, { useState, useEffect } from "react";
import { ItemCard } from "./itemCard"; 
import axios from 'axios';

const Parts = (props) => {
    const { cart, addToCart } = props;
    const [parts, setParts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const partsPerPage = 30; // CHANGE THEM HERE. IT SPLITS THEM!

    const fetchAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/site-db');
            setParts(response.data);
        } catch (error) {
            console.error("Error fetching parts data:", error);
        }
    };

    //update list every 30 seconds
    useEffect(() => {
        fetchAPI();
        const interval = setInterval(() => {
            fetchAPI();
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    //calculate the index range for the current page
    const indexOfLastPart = currentPage * partsPerPage;
    const indexOfFirstPart = indexOfLastPart - partsPerPage;
    const currentParts = parts.slice(indexOfFirstPart, indexOfLastPart);

    //page nav
    const totalPages = Math.ceil(parts.length / partsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="parts">
            {/* current page */}
            {currentParts.map((part) => (
                <ItemCard
                    key={part.id}
                    image={part.pictureURL}
                    name={part.description}
                    quantity={part.quantity}
                    cost={part.price}
                    weight={part.weight}
                    itemID={part.number}
                    cart = {cart}
                    addToCart = {addToCart}
                />
            ))}
        <div className="parts-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* items */}
            <div className="parts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", flex: "1" }}>
                {currentParts.map((part) => (
                    <ItemCard
                        key={part.id}
                        image={part.pictureURL}
                        name={part.description}
                        quantity={part.quantity}
                        cost={part.price}
                        weight={part.weight}
                        itemID={part.number}
                    />
                ))}
            </div>

            {/*pagination controls */}
            <div className="pagination" style={{ textAlign: "center", padding: "10px", marginTop: "auto" }}>
                <button onClick={prevPage} disabled={currentPage === 1} style={{ marginRight: "10px" }}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={nextPage} disabled={currentPage === totalPages} style={{ marginLeft: "10px" }}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Parts;