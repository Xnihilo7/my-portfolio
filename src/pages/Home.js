import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Project_1 from './Project_1';
import Project_3 from './Project_3';
import Project_4 from './Project_4';
import Project_2 from './Project_2';

function clickProject(projectId) {
  const projects = ['project1', 'project2', 'project3', 'project4'];

  projects.forEach((id) => {
    const project = document.getElementById(id);
    if (project) {
      if (id === projectId) {
        // Toggle visibility
        project.style.display = project.style.display === 'flex' ? 'none' : 'flex';
      } else {
        // Hide all others
        project.style.display = 'none';
      }
    }
  });
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="txt">
          <h1>Frontend <br />&nbsp;Developer</h1>
          <a className="resumeSpot" href="my_resume.pdf" download="my_resume.pdf">
            <div className="resumeSpotContent">
              <span className="resumeTxt">
                check out <br />my resume here...<br />//
              </span>
              <svg className="downLoad"></svg>
            </div>
          </a>
        </div>
      </div>

      <div className="body" id="about">
        <div className="bodTxt">
          <h2 className="header"><span className="fakeComment"> //</span>&nbsp;hello there</h2>
          <p>
            I’m a dedicated Web Developer with experience creating front-end solutions for 15+ eCommerce websites.
            At Colony Brands, I’ve built custom pages with HTML, CSS, JavaScript, and jQuery, implemented A/B testing
            in Salesforce Marketing Cloud, and streamlined updates through Salesforce Business Manager.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" onMouseLeave={() => setActiveIndex(null)}>
        <h2 className="header"><span className="fakeComment">//</span>&nbsp;skills</h2>
        <div className="skillsGrid">
          {[
            { title: "HTML", desc: "Over 4 years of experience using HTML5 \nbetween school and work" },
            { title: "CSS", desc: "Expert in CSS3, including Flexbox and Grid" },
            { title: "JavaScript", desc: "Skilled in ES6+, DOM manipulation, and async programming" },
            { title: "Salesforce", desc: "Experience with Salesforce development and automation" },
            { title: "Ecommerce", desc: "Knowledge of eCommerce platforms like WooCommerce and Shopify" },
            { title: "Shopify", desc: "Customization and development of Shopify stores" },
            { title: "A/B Testing", desc: "Proficient in A/B testing strategies and tools" },
          ].map((skill, index) => (
            <div key={index} className="item" onClick={() => handleClick(index)}>
              <div className="title">{skill.title}</div>
              <div className="abt" style={{ display: activeIndex === index ? "block" : "none" }}>
                {skill.desc.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work History */}
      <div id="work">
        <h2><span className="fakeComment">//</span>&nbsp;work history</h2>
        <div className="workList">

          <div className="item">
            <div className="header" onClick={() => clickProject('project1')}>
              <span className="level">></span>
              <span className="workName">Colony Brands</span>
            </div>

            <div className="project-show" id="project1">
              <Project_2 />
            </div>
          </div>

          <div className="item">
            <div className="header" onClick={() => clickProject('project2')}>
              <span className="level">></span>
              <span className="workName">Bible Bursts</span>
            </div>

            <div className="project-show" id="project2">
              <Project_1 />
            </div>
          </div>

          <div className="item">
            <div className="header" onClick={() => clickProject('project3')}>
              <span className="level">></span>
              <span className="workName">HourHero</span>
            </div>

            <div className="project-show" id="project3">
              <Project_3 />
            </div>
          </div>

          <div className="item">
            <div className="header" onClick={() => clickProject('project4')}>
              <span className="level">></span>
              <span className="workName">Doxa</span>
            </div>

            <div className="project-show" id="project4">
              <Project_4 />
            </div>
          </div>

          {/*<RouterLink to="/Project_2" className="item item1">
            <span className="level">></span>
            <span className="workName">Colony Brands</span>
          </RouterLink>
          <RouterLink to="/Project_1" className="item item1">
            <span className="level">></span>
            <span className="workName">Bible Bursts</span>
          </RouterLink>
          <RouterLink to="/Project_3" className="item">
            <span className="level">></span>
            <span className="workName">HourHero</span>
          </RouterLink>
          <RouterLink to="/Project_4" className="item">
            <span className="level">></span>
            <span className="workName">Doxa</span>
          </RouterLink>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
