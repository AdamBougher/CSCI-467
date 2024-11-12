import './App.css';
import React from 'react';
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Warehouse from "./pages/Warehouse";
import Desk from "./pages/Desk";
import { HashRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/Warehouse" element={<Warehouse/>}/>
          <Route path="/Desk" element={<Desk/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
