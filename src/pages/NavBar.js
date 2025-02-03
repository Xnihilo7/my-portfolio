import React, { useState } from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      <a href="/App.js" className="logo"><span className='show2'>Jonathan Cifonie</span><span className='show1'>J/C</span></a>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="about" smooth={true} duration={500}>About</Link><span className='arrow'>></span></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link><span className='arrow'>></span></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link><span className='arrow'>></span></li>
        <li><a href="https://www.linkedin.com/in/jonathantcifonie/" target="_blank">LinkedIn</a><span className='arrow'>></span></li>
        <li><a href="https://github.com/Xnihilo7" target="_blank">GitHub</a><span className='arrow'>></span></li>
      </ul>
    </nav>
  );
}

export default NavBar;
