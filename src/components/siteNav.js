import React from 'react';
import { Link } from 'react-router-dom';

const SiteNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Admin">Admin</Link>
        </li>
        <li>
          <Link to="/Checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/Warehouse">Warehouse</Link>
        </li>
        <li>
          <Link to="/Desk">Desk</Link>
        </li>
        <li>
          <div className="right">
            <svg height="100" width="150" xmlns="http://www.w3.org/2000/svg">
              <image x="30" y="0" width="50" height="50" href="shopping-cart.svg" />
              <text x="0" y="60" fill="black">Shopping Cart</text>
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNav; 