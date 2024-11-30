import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { HashRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import SiteNav from "./components/siteNav"; // Use default import
import Header from "./components/Header";

//Pages
import Home from './pages/Home';
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Warehouse from "./pages/Warehouse";
import Desk from "./pages/Desk";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SiteNav />
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

export default App
