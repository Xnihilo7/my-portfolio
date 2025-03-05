import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // Page navigation

function NavBar2() {


  return (
    <nav className='navbar'>
      <RouterLink to="/Home" className="logo">
        <span className='show2'>Jonathan Cifonie</span><span className='show1'>J/C</span>
      </RouterLink>

      <div className="nav-buttons" >
        <ul className='nav-uls'>
          <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
          <li className='vanish'><a href="https://www.linkedin.com/in/jonathantcifonie/" target="_blank">LinkedIn</a></li>
          <li className='vanish'><a href="https://github.com/jtcifonie" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar2;
