import React from 'react';
import './About.css'; 

const skillsList = {
    "Languages": ["JavaScript", "Java", "Dart","C"],
    "Frontend": ["HTML", "CSS", "React", "React Native", "Flutter", "JavaFX"],
    "Backend": ["Node.js", "Express.js","Firebase"],
    "Databases": ["MongoDB", "SQL", "PostgreSQL"]
  };

const About = () => {
    return (
        <div className="dark-theme" id='about1'>
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content text-white" id='aboutt'>
                <h2>About Me</h2>
                <p>I am a passionate web and app developer with expertise in building modern, responsive web applications using React, and mobile applications for both Android and iOS platforms.</p>
                <p>My goal is to create valuable digital experiences that solve real-world problems and bring joy to users.</p>
                {/* <a href="#contact" className="btn btn-primary">Resume</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills-list">
                <h1>Skills</h1>
                {Object.keys(skillsList).map((subcategory, index) => (
                  <div key={index}>
                    <h3>{subcategory}</h3>
                    <div className="skills-scroll-container">
                      {skillsList[subcategory].map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-card">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default About;
