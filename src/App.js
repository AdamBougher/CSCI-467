import 'devextreme/dist/css/dx.light.css';
import './App.css';
import React from 'react';
import Home from './routes/pages/Home';
import Admin from "./routes/pages/Admin";
import Checkout from "./routes/pages/Checkout";
import Warehouse from "./routes/pages/Warehouse";
import Desk from "./routes/pages/Desk";
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
