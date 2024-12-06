import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import SiteNav from "./components/siteNav"; // Use default import
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';

//Pages
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Warehouse from "./pages/Warehouse";
import Desk from "./pages/Desk";

function App() {
  // const [cartAmt, setCount] = useState(0);
  const [cart, addToCart] = useState(new Map());
  const [parts, setParts] = useState([]);

  const fetchAPI = async () => {
      const response = await axios.get('http://localhost:8080/api/site-db');
      setParts(response.data);
  }

  useEffect(() => {
      fetchAPI();
  }, []);

  let cartAmt = 0;
  for (let [key, value] of cart) {
    parts.forEach((part) => {
      if(part.number == key) {
        cartAmt += (value * part.price)
      }
    });
  }

  return (
    <BrowserRouter>
      <Header cart={cart} cartAmt={cartAmt}/>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart}/> }/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Checkout" element={<Checkout cart={cart} cartAmt={cartAmt} addToCart={addToCart}/>}/>
        <Route path="/Warehouse" element={<Warehouse/>}/>
        <Route path="/Desk" element={<Desk/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
