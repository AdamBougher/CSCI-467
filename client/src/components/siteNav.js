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
      </ul>
    </nav>
  );
};

export default SiteNav; 