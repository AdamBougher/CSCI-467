import Header from "./Header";
import { ItemCard } from "./itemCard";
import React, { useState } from 'react';

function addToCart() {
    const [subtotal, setSubtotal] = useState(0); // State in the parent component

    function updateSubtotal() {
        setSubtotal(subtotal + 1);
    };

    return (
        <div>
          <Header subtotal={subtotal} />
          <ItemCard updateSubtotal={updateSubtotal} />
        </div>
    );
}

export default addToCart;