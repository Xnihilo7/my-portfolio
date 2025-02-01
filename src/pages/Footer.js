import React, { useState } from 'react';
import linkedInLogo from './In-White-128@2x.png';
import gitHubLogo from './github-mark.png';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id='footer'>
      <div className='footerContent'>
        <div className='contact'>

        </div>
        <nav className="footerNav">
          <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/jonathantcifonie/" target="_blank"><img className='logoIn' alt="" src={linkedInLogo} /></a></li>
            <li><a href="https://github.com/Xnihilo7" target="_blank"><img alt="" className='logoGit' src={gitHubLogo} /></a></li>
          </ul>
        </nav>
        <div className='more'>
          
        </div>
      </div>
      
    </div>
    
  );
}

export default Footer;
