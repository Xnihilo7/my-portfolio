import React from 'react';
import downloadPic from './downloadPic.svg';

function Home() {
  return (
      <div className='home'>
        <div className='hero'>

          {/*<div className='background'>
            <picture>
              <source media="(min-width: 768px)" srcSet={backgroundImage} />
              <img alt="" src={backgroundImage} />
            </picture>
          </div>*/}

          <div className='txt'>
            <h1>Frontend <br />&nbsp;Developer</h1>
            <a className='resumeSpot' href='/Jonathan Cifonie Resume 1:1:25 v2.pdf' download="Jonathan_Cifonie_Resume.pdf">
              <div className='resumeSpotContent'>
                <span className='resumeTxt'>
                  check out <br />my resume here...<br />//
                </span>
                <svg className='downLoad'>
                  <path d={downloadPic} fill="var(--white-main)" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className='body' id='about'>
          <div className='bodTxt'>
            <h2 className='header'><span className='fakeComment'>//</span>&nbsp;hello there</h2>
            <p>
              I’m a dedicated Web Developer with experience creating front-end solutions for 15+ eCommerce websites. 
              At Colony Brands, I’ve built custom pages with HTML, CSS, JavaScript, and jQuery, implemented A/B testing 
              in Salesforce Marketing Cloud, and streamlined updates through Salesforce Business Manager. I’ve earned 
              certifications in HTML/CSS and jQuery and contributed to AI workshops to improve internal processes.

              With a proven track record of collaboration and leadership, I’m passionate about crafting user-friendly, 
              engaging websites that deliver results. I’m currently seeking opportunities to bring my expertise to a team 
              focused on impactful digital experiences. Let’s connect!
            </p>
          </div>
        </div>
        
        <div id='skills'>
        {/*<h2>Skills</h2>*/}
          <div className='skillsGrid'>
            <div className='item'>HTML</div>
            <div className='item'>CSS&nbsp;</div>
            <div className='item'>JavaScript</div>
            <div className='item'>Salesforce</div>
            <div className='item'>Eccomerce</div>
            <div className='item'>Shopify</div>
            <div className='item'>A/B Testing</div>
          </div>

        </div>

        <div id='work'>
            <h2><span className='fakeComment'>//</span>&nbsp;work history</h2>

            <div className='workList'>

              <div className='item item1'>
                <span className='level'>></span>
                <span className='workName'>Colony Brands</span>
              </div>

              <div className='item'>
              <span className='level'>></span>
                <span className='workName'>Bible Bursts</span>
              </div>

              <div className='item'>
              <span className='level'>></span>
                <span className='workName'>HourHero</span>
              </div>

              <div className='item'>
              <span className='level'>></span>
                <span className='workName'>Doxa Athletic</span>
              </div>

            </div>
           
        </div>
      </div>
    
  );
}

export default Home;
