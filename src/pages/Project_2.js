import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MWImg from './images/www.wards.com_.png';
import MWpop from './images/MW-popup.png';

function Project_2() {
    const mwLink = "https://www.wards.com/";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>Colony Brands</h1>
                <p>Officia qui aliqua excepteur aliquip tempor pariatur incididunt irure. Quis excepteur est nulla ullamco laboris voluptate in est magna laboris laboris aute qui reprehenderit. Non ea aliqua enim laborum eiusmod nostrud sunt proident sunt fugiat cupidatat eu nisi.</p>
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
                            <span className='search'>{mwLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={MWImg} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='project-second'>
            <div className='d-script'>
                <h1>Featured Skills</h1>
                <p>Officia qui aliqua excepteur aliquip tempor pariatur incididunt irure. Quis excepteur est nulla ullamco laboris voluptate in est magna laboris laboris aute qui reprehenderit. Non ea aliqua enim laborum eiusmod nostrud sunt proident sunt fugiat cupidatat eu nisi.</p>
                <span><a className='goTo' href={mwLink} target="_blank" rel="noopener noreferrer">go to site </a><span className='arrow'>></span></span>
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
                            <span className='search'>{mwLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={MWpop} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    
  );
}

export default Project_2;
