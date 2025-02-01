import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');

    // Style the dot
    cursorDot.id = 'customCursorDot';
    cursorDot.style.position = 'fixed';
    cursorDot.style.width = '6px';
    cursorDot.style.height = '6px';
    cursorDot.style.backgroundColor = 'var(--white-main)'; 
    cursorDot.style.boxShadow = '0 0 0 2px var(--black-main)'; // Outer shadow to act as border
    cursorDot.style.borderRadius = '50%';
    cursorDot.style.pointerEvents = 'none';
    cursorDot.style.zIndex = '10000';
    cursorDot.style.transform = 'translate(-50%, -50%)';

    // Style the ring with an additional outer shadow for visibility
    cursorRing.id = 'customCursorRing';
    cursorRing.style.position = 'fixed';
    cursorRing.style.width = '40px';
    cursorRing.style.height = '40px';
    cursorRing.style.border = '2px solid var(--white-main)';  // Inner border
    cursorRing.style.boxShadow = '0 0 0 2px var(--black-main)'; // Outer shadow to act as border
    cursorRing.style.borderRadius = '50%';
    cursorRing.style.pointerEvents = 'none';
    cursorRing.style.zIndex = '9999';
    cursorRing.style.transform = 'translate(-50%, -50%)';

    // CSS for the pulse effect
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 2px var(--white-main);
          border-color:var(--white-main);
        }
        50% {
          box-shadow: 0 0 0 10px var(--white-main);
          border-color:var(--white-main);
        }
        100% {
          box-shadow: 0 0 0 2px var(--white-main);
          border-color:var(--white-main);
        }
      }
      #customCursorRing.pulse {
        animation: pulse 0.2s ease-out;
      }
    `;
    document.head.appendChild(style);

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let dotX = 0,
      dotY = 0,
      ringX = 0,
      ringY = 0;

    const speed = 0.1; // Speed for the ring lag effect

    const moveCursor = (event) => {
      dotX = event.clientX;
      dotY = event.clientY;
    };

    const animateCursor = () => {
      ringX += (dotX - ringX) * speed;
      ringY += (dotY - ringY) * speed;

      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', moveCursor);
    animateCursor();

    // Handle click event for pulse effect
    const handleClick = () => {
      cursorRing.classList.add('pulse');
      // Remove class after animation ends to prevent stacking animations
      setTimeout(() => {
        cursorRing.classList.remove('pulse');
      }, 500); // Match this with the animation duration
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', handleClick);
      cursorDot.remove();
      cursorRing.remove();
      style.remove();
    };
  }, []);

  return null; // No visual output; purely functional
};

export default CustomCursor;