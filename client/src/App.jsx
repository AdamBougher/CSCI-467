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

  return (
    <BrowserRouter>
      <Header cartAmt={cartAmt}/>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home cartAmt={cartAmt} setCount={setCount}/> }/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Warehouse" element={<Warehouse/>}/>
        <Route path="/Desk" element={<Desk/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
