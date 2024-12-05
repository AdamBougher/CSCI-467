import React, { useState, useEffect } from 'react';
import '../App.css';
import SiteNav from '../components/siteNav';
import Header from "../components/Header";
import axios from 'axios';

export default function Checkout(props) {
    const { cart } = props;
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

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/site-db');
        setParts(response.data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Additional validation or processing logic can be added here
        setShowPopup(true); // Show the popup
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    //To be used later (When/if we want to list out the order on the checkout page)
    // for (let [key, value] of cart) {
    //     parts.forEach((part) => {
    //     if(part.number == key) {
    //         <h2>{value}x {part.name}: ${part.price * value}</h2>
    //     }
    //     });
    // }
    // To be used later

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
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter your address"
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
                            onChange={handleChange}
                            placeholder="Enter your card number"
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
                                onChange={handleChange}
                                placeholder="CVC"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiration">Expiration Date:</label>
                            <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleChange}
                                placeholder="MM/YY"
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
                        <button onClick={closePopup} className="close-popup-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
