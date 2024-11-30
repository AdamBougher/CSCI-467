import React from 'react';
import '../App.css';
import SiteNav from '../components/siteNav';
import Header from "../components/Header";


export default function Checkout() {
    return (
        <div className="checkout-container">
            <div className="checkout-form">
                <h3>Billing Information</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
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
                                placeholder="CVC"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expiration">Expiration Date:</label>
                            <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                placeholder="MM/YY"
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
