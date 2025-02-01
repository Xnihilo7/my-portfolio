import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import CustomCursor from './pages/CustomCursor';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
