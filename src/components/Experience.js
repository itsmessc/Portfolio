import React from 'react';
import './Experience.css';

const experienceList = [
    {
        role: "Mobile App Developer Intern",
        company: "GoPerch",
        duration: "Feb 2024 - Jun 2024",
        description: "Enhanced app stability and performance through software testing, UI/UX improvements, and integration of Node.js, Firebase, and Flutter.",
        icon: "fa-code"
    },
    {
        role: "Mobile App Developer Intern",
        company: "Openzo",
        duration: "Oct 2024 - Dec 2024",
        description: "Built and optimized a Flutter-based app, prioritizing intuitive UX, seamless API integrations, and efficient coding practices.",
        icon: "fa-mobile-alt"
    },
    {
        role: "Web Developer Intern",
        company: "BioBreath",
        duration: "Dec 2024 - Jan 2025",
        description: "Developed a responsive company website using Next.js and Tailwind CSS, focusing on user experience.",
        icon: "fa-laptop-code"
    },
    {
        role: "Hackathon Winner",
        company: "App-A-Thon 2024",
        duration: "Nov 2024",
        description: "Secured first place for 'HemoCare,' a haemodialysis scheduling app with real-time machine status tracking.",
        icon: "fa-trophy"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    {experienceList.map((experience, index) => (
                        <div key={index} className="experience-card">
                            <i className={`fas ${experience.icon} icon`}></i>
                            <h3 className="role">{experience.role}</h3>
                            <p className="company"><strong>{experience.company}</strong></p>
                            <p className="duration">{experience.duration}</p>
                            <p className="description">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;