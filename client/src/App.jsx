import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import SiteNav from "./components/siteNav"; // Use default import
import Header from "./components/Header";
import { useState } from 'react';

//Pages
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Warehouse from "./pages/Warehouse";
import Desk from "./pages/Desk";

function App() {
  const [cartAmt, setCount] = useState(0);
  const [cart, addToCart] = useState(new Map());

  return (
    <BrowserRouter>
      <Header cart={cart}/>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart}/> }/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Checkout" element={<Checkout cart={cart}/>}/>
        <Route path="/Warehouse" element={<Warehouse/>}/>
        <Route path="/Desk" element={<Desk/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
