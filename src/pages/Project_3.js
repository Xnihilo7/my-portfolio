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
                <p>HourHero was one of my capstone class projects, where I designed and built a full-stack web application to track employee hours and generate timecards for different user profiles. I focused on creating an intuitive user interface (UI) and a smooth user experience (UX) to simplify timekeeping and data logging processes. The application featured password-protected user profiles to ensure data security and privacy.

                Although the application is not currently hosted, the provided examples include screenshots and a video walkthrough to demonstrate its functionality and design.
                </p>
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
                <p>HourHero was powered by a phpMyAdmin database, storing all data off-site for dynamic retrieval and display. I designed and connected the database, utilizing PHP and SQL for backend development to manage and query data efficiently. The front end was built with HTML, CSS, and JavaScript, incorporating responsive design principles for a seamless experience across different devices. Additionally, I implemented JavaScript to enhance interactivity and streamline user workflows.

</p>
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
