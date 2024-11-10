import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Admin from './Admin';
import Checkout from './Checkout';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  )
}

export default App;
