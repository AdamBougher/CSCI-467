import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

export default function Checkout(props) {
    const { cart, cartAmt } = props;
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

    const initialFormData = {
        name: '',
        email: '',
        address: '',
        creditCard: '',
        cvc: '',
        expiration: '',
    };

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/site-db');
        setParts(response.data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

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
            setShowPopup(true); // Show the popup
            cart.clear();
            setFormData(initialFormData);
        }else{
            alert('Payment failed. Please try again.');
        }
    };

    const closePopup = () => {
        setShowPopup(false);
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
                        <button onClick={closePopup} className="close-popup-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
