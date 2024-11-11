import './App.css';
import React from 'react';
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Warehouse from "./pages/Warehouse";
import Desk from "./pages/Desk";
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Warehouse" element={<Warehouse/>}/>
        <Route path="/Desk" element={<Desk/>}/>
      </Routes>
    </Router>
  )
}

export default App;
