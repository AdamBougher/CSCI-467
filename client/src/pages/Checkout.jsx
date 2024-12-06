import React from 'react';
import '../App.css';
import SiteNav from '../components/siteNav';
import Header from "../components/Header";
import { useState, useEffect } from "react"; 
import axios from 'axios';

export default function Checkout(props) {
    const { cart } = props;
    const [parts, setParts] = useState([]);

    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api/site-db');
        setParts(response.data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const [ccName, setName] = useState("");
    const [email, setEmail] = useState("@gmail.com");
    const [addr, setAddr] = useState("1234 Street");
    const [CC, setCC] = useState("7");
    const [CVC, setCVC] = useState("111");
    const [expir, setExpir] = useState("7/30");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Name:", ccName);
        console.log("Email:", email);
        console.log("Address:", addr);
        console.log("CC #:", CC);
        console.log("CVC:", CVC);
        console.log("Expiration Date:", expir);
        await creditCardProcess();
    };

    async function creditCardProcess() {
        const data = {
            'vendor': 'VE001-99',
            'trans': '907-987654321-296',
            'cc': CC,
            'name': ccName, 
            'exp': expir, 
            'amount': '654.32',
        };
        try {
            const response = await axios.post('http://blitz.cs.niu.edu/creditcard', data);
            console.log('Payment processed:', response.data);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    }

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
                            placeholder="Enter your full name"
                            value={ccName} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            value={addr} 
                            onChange={(e) => setAddr(e.target.value)} 
                        />
                    </div>
                    <h3>Payment Information</h3>
                    <div className="form-group">
                        <label htmlFor="credit-card">Credit Card #:</label>
                        <input
                            type="text"
                            id="credit-card"
                            name="creditCard"
                            placeholder="Enter your card number"
                            value={CC} 
                            onChange={(e) => setCC(e.target.value)} 
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cvc">CVC:</label>
                            <input
                                type="text"
                                id="cvc"
                                name="cvc"
                                placeholder="CVC"
                                value={CVC} 
                                onChange={(e) => setCVC(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiration">Expiration Date:</label>
                            <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                placeholder="MM/YY"
                                value={expir} 
                                onChange={(e) => setExpir(e.target.value)} 
                            />
                        </div>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
