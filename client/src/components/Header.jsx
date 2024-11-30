import React from 'react';

const Header = () => {
    return (
      <header className="header">
        
        <div className="header-logo">
          <img src="/app-logo.png" alt="Logo" />
        </div>
  
        <div className="shopping-cart-container">
          <img 
            src="/shopping-cart.png" 
            alt="Cart" 
            className="shopping-cart" 
          />
        </div>
      </header>
    );
  };
  
  export default Header;

