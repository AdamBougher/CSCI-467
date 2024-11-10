import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { TextBox } from 'devextreme-react/text-box';
import './App.css';

export default function Checkout() {
    return (
        <div>
            <h1>Checkout</h1>
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