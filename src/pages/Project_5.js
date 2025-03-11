import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import DoxaImg from './images/port-pic-1.5.png';
import DoxaProd from './images/port-pic-2.5.png';

function Project_5() {
    const doxaLink = "https://jtcifonie.github.io/my-portfolio/";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>This Website</h1>
                <p>This website is one of my latest projects. I wanted to build a site from the ground up using a new technology, so I chose React and began developing. It has gone through several iterations, with this being one of the simpler versions. However, it effectively serves its purpose of showcasing past projects while also providing an opportunity to expand my knowledge and skills.</p>
            </div>

            <div className='preview'>
                <div className='mock-browse'>
                    <div className='header'>
                        <div className='toolBar'>
                            <span className='dots'>
                                <span className='dot red'></span>
                                <span className='dot yellow'></span>
                                <span className='dot green'></span>
                            </span>
                            <span className='search'>{doxaLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={DoxaImg} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='project-second'>
            <div className='d-script'>
                <h1>Featured Skills</h1>
                <p>As mentioned, this website is built using React, incorporating JSX, HTML, CSS, and JavaScript. Throughout the process, I gained valuable experience with React’s component-based structure and state management. I plan to enhance the site further by implementing React Spring animations and other interactive elements. This is an ongoing project that I will continue to refine and update over time.</p>
                <span><a className='goTo' href={doxaLink} target="_blank" rel="noopener noreferrer">go to site </a><span className='arrow'>></span></span>
            </div>

            <div className='preview'>
                <div className='mock-browse'>
                    <div className='header'>
                        <div className='toolBar'>
                            <span className='dots'>
                                <span className='dot red'></span>
                                <span className='dot yellow'></span>
                                <span className='dot green'></span>
                            </span>
                            <span className='search'>{doxaLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={DoxaProd} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    
  );
}

export default Project_5;
