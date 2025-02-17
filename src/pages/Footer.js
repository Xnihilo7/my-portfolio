import React, { useState } from 'react';
import gitHubLogo from './github-mark.png';import { Link as ScrollLink } from 'react-scroll'; // Smooth scrolling
import { Link as RouterLink } from 'react-router-dom'; // Page navigation
function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='footer'>
      <div className='footerContent'>
        <div className='column column1'>
          <nav className="footerNav">
            <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
              <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink><span className='arrow'>></span></li>
              <li><ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink><span className='arrow'>></span></li>
              <li><ScrollLink to="work" smooth={true} duration={500}>Work</ScrollLink><span className='arrow'>></span></li>
              <li><a href="https://www.linkedin.com/in/jonathantcifonie/" target="_blank">LinkedIn</a><span className='arrow'>></span></li>
              <li><a href="https://github.com/jtcifonie" target="_blank">GitHub</a><span className='arrow'>></span></li>
            </ul>
          </nav>
        </div>
        <div className='column column2'>
        {/*<nav className="footerNav"><h3>more</h3>
          <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
            </ul>
        </nav>*/}
          
        </div>
        <div className='column column3' >
          <a className='contact' href="mailto:jcifonie@liberty.edu"><p><nobr>//get in touch</nobr></p></a>
        </div>
      </div>
      
    </div>
    
  );
}

export default Footer;
