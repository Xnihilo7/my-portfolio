import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import BibleBurstDash from './images/HourHero.png';

function Project_3() {
    const ytLink = "https://www.youtube.com/watch?v=Q6mpI6MYXsM";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>HourHero</h1>
                <p>Sint minim deserunt et aute excepteur cupidatat consectetur aliqua et cupidatat. Nostrud duis eu nisi ad pariatur amet amet labore id magna anim. Occaecat pariatur officia exercitation adipisicing culpa velit ut incididunt nisi esse. Voluptate anim pariatur dolor eu Lorem nostrud et do. Ullamco incididunt officia fugiat do duis amet proident irure. Enim ea ea sit ex.</p>
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
                            <span className='search'>{ytLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='video-container'>
                        <iframe
                            src="https://www.youtube.com/embed/Q6mpI6MYXsM"
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='project-second'>
            <div className='d-script'>
                <h1>Featured Skills</h1>
                <p>Reprehenderit veniam aliquip esse labore irure dolore occaecat voluptate consectetur labore irure. Cillum anim enim nostrud Lorem incididunt culpa officia magna. Do incididunt proident do dolore incididunt ad culpa voluptate in anim consectetur exercitation irure duis. Sint esse adipisicing commodo adipisicing laboris sint tempor officia amet adipisicing nisi aliquip culpa fugiat. Ullamco ea nostrud duis cillum quis veniam. Deserunt aliquip aute amet dolor deserunt veniam ullamco est velit ea incididunt laboris aliquip. Nostrud ipsum irure proident id ullamco mollit id nisi et.</p>
                <span><a className='goTo' href={ytLink} target="_blank" rel="noopener noreferrer">go to YouTube </a><span className='arrow'>></span></span>
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
                            <span className='search'>{ytLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={BibleBurstDash} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    
  );
}

export default Project_3;
