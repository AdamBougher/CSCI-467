import React from 'react';
import '../App.css';
import SiteNav from '../components/siteNav';

export default function Checkout() {
    return (
        <div>
            <h1>Checkout</h1>
            <SiteNav/>
            <h3>Info:</h3>
            <form>
                <label>
                    <input type="text" name="name" defaultValue="Name"/>
                    <div id ="righttext"/>  
                    <input type="text" name="name" defaultValue="Email"/>
                    <div id ="righttext"/>  
                    <input type="text" name="name" defaultValue="Address"/>

                    <div id ="clear"/>  

                    <input type="text" name="name" defaultValue="Credit Card #"/>
                    <div id ="righttext"/>  
                    <input type="text" name="name" defaultValue="CVC"/>
                    <div id ="righttext"/>  
                    <input type="text" name="name" defaultValue="Expiration Date"/>
                    <div id ="clear"/>  
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}