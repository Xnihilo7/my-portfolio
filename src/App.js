import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./pages/ScrollToTop";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import CustomCursor from './pages/CustomCursor';
import Project_1 from './pages/Project_1';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
        <CustomCursor />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Project_1" element={<Project_1 />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
