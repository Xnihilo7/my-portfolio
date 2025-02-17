import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // Page navigation

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle menu on hover
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNav ? "visible" : "hidden"}`}>
      <RouterLink to="/" className="logo">
        <span className='show2'>Jonathan Cifonie</span><span className='show1'>J/C</span>
      </RouterLink>

      <div className="menu-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="burger">
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
          {/* Smooth Scroll Links (same page scrolling) */}
          <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink><span className='arrow'>></span></li>
          <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink><span className='arrow'>></span></li>
          <li><ScrollLink to="work" smooth={true} duration={500}>Work</ScrollLink><span className='arrow'>></span></li>

          {/* Page Navigation Links (React Router) 
          <li><RouterLink to="/about">About Page</RouterLink><span className='arrow'>></span></li>
          <li><RouterLink to="/contact">Contact Page</RouterLink><span className='arrow'>></span></li>*/}

          {/* External Links */}
          <li><a href="https://www.linkedin.com/in/jonathantcifonie/" target="_blank">LinkedIn</a><span className='arrow'>></span></li>
          <li><a href="https://github.com/jtcifonie" target="_blank">GitHub</a><span className='arrow'>></span></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
