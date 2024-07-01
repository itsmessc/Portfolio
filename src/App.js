import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home/> 
        <About/> 
        <Projects/>
      </div>
    </Router>
  );
}

export default App;
