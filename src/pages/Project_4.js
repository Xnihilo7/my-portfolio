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
                <p>Doxa Athletic Co. is a website I am currently developing for a gym wear company I started with a friend. Built on Shopify, this site showcases my ability to create and manage an eCommerce storefront using Shopify’s tools. It also serves as a testing ground for various eCommerce practices, including marketing strategies, product management, and content creation. I regularly update the website and experiment with new ideas to optimize performance and user experience.</p>
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
                <p>The site is currently built using Shopify's website builder, and I am in the process of learning and implementing Shopify Liquid to develop a custom homepage and product information pages. I have also connected a custom domain and created comprehensive web policies for our brand to ensure customer satisfaction and compliance. This project allows me to refine my skills in UX/UI design, front-end development, and eCommerce management. It’s one of my favorite passion projects, and I continually work on enhancing it.</p>
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
