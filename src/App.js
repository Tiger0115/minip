import './App.css';
import React,{useState} from 'react';
import AddStock from './components/AddStock';
import StockAlert from './components/StockAlert';
import SearchMed from './components/SearchMed';
import NewMed from './components/NewMed';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {




  return (
    <>
    <Navbar/>
    <Router>      
      
      <Routes>
          <Route path="/NewMed" element={<NewMed/>}/>
          <Route path="/SearchMed" element={<SearchMed/>}/>   
          <Route path="AddStock" element={<AddStock/>}/>
          <Route path="StockAlert" element={<StockAlert/>}/>        
          <Route path="/" element={<Home/>}/>
            
      </Routes>
    </Router>
    </>
  );
}

export default App;
