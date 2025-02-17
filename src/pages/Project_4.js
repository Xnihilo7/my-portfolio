import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import DoxaImg from './images/doxaathletic.com.png';
import DoxaProd from './images/doxaathletic.com_collections_tops.png';

function Project_4() {
    const doxaLink = "https://doxaathletic.com/";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>Doxa Athletic Co</h1>
                <p>Exercitation commodo irure laboris laboris proident. Nisi aliquip non ea ex quis cillum labore nostrud ipsum. Eiusmod laborum labore nulla culpa esse sunt consequat ullamco dolor. Cupidatat sint occaecat elit elit quis sint. Sint commodo aliqua amet duis laboris laboris id amet. Aliquip exercitation irure consectetur aute fugiat commodo veniam fugiat.</p>
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
                <p>Sit ut fugiat occaecat eu. Anim mollit id aute aliqua incididunt tempor culpa reprehenderit ullamco Lorem. Eu incididunt commodo mollit deserunt elit est sit exercitation enim. Laborum aliquip sunt sint aute nisi consectetur quis labore ipsum cillum do laboris ea sit. Amet anim occaecat adipisicing dolore sit do sit in amet do nulla ut. Magna officia dolore fugiat velit tempor culpa qui officia ea cillum. Magna nulla nulla reprehenderit esse dolore ut voluptate veniam.</p>
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

export default Project_4;
