import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="header">
        
        <Link to="/">
          <div className="header-logo">
            <img src="/app-logo.png" alt="Logo" />
          </div>
        </Link>

        <Link to="/Checkout">
          <div className="shopping-cart-container">
            <img 
              src="/shopping-cart.png" 
              alt="Cart" 
              className="shopping-cart" 
            />
          </div>
        </Link>
      </header>
    );
  };
  
  export default Header;

