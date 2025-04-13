import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
