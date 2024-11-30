import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const SiteNav = () => {
  return (
    <nav className='site-nav'>
      <ul>
        <li>
          <Link to="/Admin">Admin</Link>
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
