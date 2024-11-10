import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Admin from './Admin';
import Checkout from './Checkout'
import Warehouse from './Warehouse'
import Desk from './Desk'
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
