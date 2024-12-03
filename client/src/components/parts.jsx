import React, { useState, useEffect } from "react";
import { ItemCard } from "./itemCard"; // Use named import
import axios from 'axios';

const Parts = () => {
    const [parts, setParts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const partsPerPage = 30;

    const fetchAPI = async () => {
        //switched to try
        try {
            const response = await axios.get('http://localhost:8080/api/site-db');
            setParts(response.data);
        } catch (error) {
            console.error("Error fetching parts data:", error);
        }
    };

    useEffect(() => {
        fetchAPI();
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
                />
            ))}

            {/*page control*/}
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Parts;
