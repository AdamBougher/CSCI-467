import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { cart } = props;

  const [parts, setParts] = useState([]);

  const fetchAPI = async () => {
      const response = await axios.get('http://localhost:8080/api/site-db');
      setParts(response.data);
  }

  useEffect(() => {
      fetchAPI();
  }, []);

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

