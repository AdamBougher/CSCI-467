import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { cartAmt, setCount } = props;

    return (
      <header className="header">
        
        <Link to="/">
          <div className="header-logo">
            <img src="/app-logo.png" alt="Logo" />
          </div>
        </Link>

        <Link to="/Checkout">
          <div className="shopping-cart-container">
            <h2>{cartAmt}</h2>
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

