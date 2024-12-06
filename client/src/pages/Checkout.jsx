import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Checkout(props) {
    const { cart, cartAmt, addToCart } = props;
    const [parts, setParts] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // Popup state
    const [formData, setFormData] = useState({ // Form data state
        name: '',
        email: '',
        address: '',
        creditCard: '',
        cvc: '',
        expiration: '',
    });
    const [totalWeight, setTotalWeight] = useState(0); // State for total weight
        const [shippingCost, setShippingCost] = useState(0);

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/site-db');
        setParts(response.data);
    };

    useEffect(() => {
        const fetchShippingCost = async () => {
            const cost = await shippingcost(totalWeight);
            setShippingCost(cost);
        };
    
        if (totalWeight > 0) {
            fetchShippingCost();
        }
        fetchAPI();

    }, [totalWeight]);

    useEffect(() => {
        const calculateTotalWeight = () => {
            const weight = Array.from(cart.entries())
                .filter(([key, value]) => value > 0) // Filter out items where value <= 0
                .reduce((acc, [key, value]) => {
                    const part = parts.find((part) => part.number === key);
                    return part ? acc + part.weight * value : acc;
                }, 0);
            setTotalWeight(weight);
        };

        if (parts.length > 0) {
            calculateTotalWeight();
        }
    }, [parts, cart]);

    const shippingcost = async (weight) => {
        try {
            console.log('Fetching shipping cost... for weight:', weight);   
            const response = await axios.get(`http://localhost:8080/api/shippingCost/${weight}`);
            console.log('Shipping cost:', response.data);
            return response.data; // Access the value directly
        } catch (error) {
            console.error('Error fetching shipping cost:', error);
            return 0; // Return a default value in case of error
        }
    };

    const initialFormData = {
        name: '',
        email: '',
        address: '',
        creditCard: '',
        cvc: '',
        expiration: '',
    };

    async function creditCardProcess() {
        let transID = 'RYAN-' + (Math.random() * 10000).toString();
        const data = {
            'vendor': 'VE001-99',
            'trans': transID,
            'cc': formData.creditCard,
            'name': formData.name,
            'exp': formData.expiration,
            'amount': cartAmt.toString(),
        };
        try {
            const response = await axios.post('http://blitz.cs.niu.edu/creditcard', data);
            console.log('Payment processed:', response.data);
            return true;
        } catch (error) {
            console.error('Error processing payment:', error);
            return false;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        const paymentSuccess = await creditCardProcess();

        if (paymentSuccess === true) {
            const orderSuccess = await submitOrder();
            if (orderSuccess) {
                setShowPopup(true); // Show the popup;
                setFormData(initialFormData);
                
                // remove everything from cart
                addToCart(new Map());

                cart.clear()
            } else {
                alert('Order submission failed. Please try again.');
            }
        } else {
            alert('Payment failed. Please try again.');
        }
    };

    const addOrderline = async (orderId, partNumber, quantity, price) => {
        try {
          const response = await axios.put('http://localhost:8080/api/orderLines/add', {
            orderId,
            partNumber,
            quantity,
            price,
          });
          console.log('Order line added:', response.data);
          return true;
        } catch (error) {
          console.error('Error adding order line:', error);
          return false;
        }
    };

    const submitOrder = async () => {
        const shippingCost = await shippingcost(totalWeight); // Await the shipping cost
        const data = {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            weight: totalWeight,
            total: cartAmt,
            shippingCost: shippingCost, // Use the fetched shipping cost
        };

        try {
            const response = await axios.post('http://localhost:8080/api/orders/place', data);
            console.log('Order submitted:', response.data);

            // Add order lines
            for (const [key, value] of cart.entries()) {
                const part = parts.find((part) => part.number === key);
                if (part) {
                    await addOrderline(response.data.id, key, value, part.price);
                }
            }

            return true;
        } catch (error) {
            console.error('Error submitting order:', error);
            return false;
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };


    const removeInventory = async (id, amt) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/inventory/remove/${id}`, { amt });
            console.log('Inventory updated:', response.data);
            return true;
        } catch (error) {
            console.error('Error updating inventory:', error);
            return false;
        }
    };

    return (
        <div className="checkout-container">
            <div>
                {Array.from(cart.entries())
                    .filter(([key, value]) => value > 0) // Filter out items where value <= 0
                    .map(([key, value]) => {
                        const part = parts.find((part) => part.number === key);
                        return part ? (
                            <h2 key={key}>
                                {value}x {part.description}: ${(part.price * value).toFixed(2)}
                            </h2>
                        ) : null;
                    })}
                <h3>Total Weight: {totalWeight.toFixed(2)} lbs</h3>
                <h3>Shipping Cost: ${shippingCost}</h3>
            </div>
            <div className="checkout-form">
                <h3>Billing Information</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Enter your full name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            placeholder="Enter your address"
                            onChange={handleChange}
                        />
                    </div>
                    <h3>Payment Information</h3>
                    <div className="form-group">
                        <label htmlFor="credit-card">Credit Card #:</label>
                        <input
                            type="text"
                            id="credit-card"
                            name="creditCard"
                            value={formData.creditCard}
                            placeholder="Enter your card number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cvc">CVC:</label>
                            <input
                                type="text"
                                id="cvc"
                                name="cvc"
                                value={formData.cvc}
                                placeholder="CVC"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiration">Expiration Date:</label>
                            <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={formData.expiration}
                                placeholder="MM/YY"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>

            {showPopup && ( // Popup component
                <div className="popup">
                    <div className="popup-content">
                        <h2>Order Confirmed!</h2>
                        <p>Thank you, {formData.name}, for your order.</p>
                        <p>A confirmation email will be sent to {formData.email}.</p>
                        <Link to="/">
                            <button onClick={closePopup} className="close-popup-button">
                                Close
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
