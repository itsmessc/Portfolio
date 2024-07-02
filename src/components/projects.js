import React, { useState } from 'react';
import './projects.css'; 
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Project() {
    const [hoveredProject, setHoveredProject] = useState(null);

   
    const projects = [
        {
            name: 'Expense Tracker',
            description: 'Developed a Flutter app with Firebase for tracking expenses and managing budgets. Features include intuitive UI, PIN security, dark theme, notifications, cloud sync, and a Recycle Bin for deleted items.',
            technologies: 'Technologies used: Dart, Flutter, Firebase',
            duration: '02/2024 - 03/2024',
            link: 'https://github.com/saicharan1342/Expense-tracker' 
        },
        {
            name: 'Hospital Management System',
            description: 'Developed a robust hospital management website using HTML, CSS, Node.js, Express, and PostgreSQL to optimize administrative processes and improve patient care delivery.',
            technologies: 'Technologies used: HTML, CSS, Node.js, Express.js, PostgreSQL, RESTful APIs',
            duration: '03/2024 - 04/2024',
            link: 'https://github.com/itsmessc/HMS',
        },
        {
            name: 'Restaurant Food Ordering App',
            description: 'Currently spearheading the development of a cutting-edge mobile application using React Native, complemented by a robust backend powered by Node.js, Express, and MongoDB. The application aims to revolutionize food ordering from a specific restaurant by offering a seamless and intuitive user experience.',
            technologies: 'Technologies used: React Native, JavaScript, Redux, Node.js, Express.js, MongoDB, RESTful APIs',
            duration: '06/2024 - Present',
            link: ''
        },
    ];
    
    

    const handleMouseEnter = (index) => {
        setHoveredProject(index);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="timeline-container dark-theme" id='projects'>
            <h1 className="title">Projects</h1>

            <VerticalTimeline animate={true} >
                {projects.map((project, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={project.duration}
                        dateClassName="date"
                        iconStyle={{ background: '#1d10aa', color: '#fff' }}      
                        icon={hoveredProject === index ? <i className="fas fa-code"></i> : <i className="fas fa-briefcase"></i>}
                        iconOnClick={() => window.open(project.link, '_blank')}
                        onTimelineElementClick={() => window.open(project.link, '_blank')}
                        iconClassName="icon"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className='styling-text'
                        contentStyle={{
                            background: '#333',
                            color: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid #333',
                            width:'30px',
                            height:'10px'
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">{project.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{project.technologies}</h5>
                        <p>{project.description}</p>
                        {project.link ?<p>Click for code</p>:<p></p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            
        </div>
    );
}
