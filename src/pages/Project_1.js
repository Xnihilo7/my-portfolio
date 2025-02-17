import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import BibleBurstImg from './images/bible_burst.png';
import BibleBurstDash from './images/bb_dashboard-2.png';

function Project_1() {
    const bbLink = "https://jtcifonie.github.io/BibleBurst.github.io/";

  return (
      <div className='project-main'>

        <div className='project-container'>

            <div className='d-script'>
                <h1>Bible Bursts</h1>
                <p>BibleBursts is a web application designed to enhance Bible study by integrating the Pomodoro Technique—a time management method involving 25-minute focused work sessions followed by 5-minute breaks. This approach aims to help users engage deeply with Scripture, improve concentration, and foster spiritual growth through structured study intervals. The platform encourages consistent learning habits and offers tools to minimize distractions during study sessions. Users are invited to sign up for free to begin their journey toward a more disciplined and enriching Bible study experience.</p>
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
                            <span className='search'>{bbLink}</span>
                            <span className='plus'>+</span>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='pic'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet="" />
                            <img alt="Project Preview" src={BibleBurstImg} />
                        </picture>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='project-second'>
            <div className='d-script'>
                <h1>Featured Skills</h1>
                <p>This website is build with vanilla HTML/CSS bust features some of my first function JavScript logic to track study times and log them to a report.</p>
                <span><a className='goTo' href={bbLink} target="_blank" rel="noopener noreferrer">go to site </a><span className='arrow'>></span></span>
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
                            <span className='search'>{bbLink}</span>
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

export default Project_1;
