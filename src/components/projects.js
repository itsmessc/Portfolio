import React, { useState } from 'react';
import './projects.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'


export default function Project() {
    const [hoveredProject, setHoveredProject] = useState(null);


    const projects = [
        {
            name: 'DentalBooking',
            description: 'Built a React Native app for seamless dental appointment booking with location search, service selection, dentist profiles, and JSON Server for backend API mocking.',
            technologies: 'Technologies used: React Native, Node.js, Redux, JSON server, RESTful APIs',
            duration: '02/2025 - 2/2025',
            link: 'https://github.com/itsmessc/DentalBooking'
        },
        {
            name: 'HemoCare',
            description: 'A mobile app streamlining hemodialysis machines scheduling with real-time notifications and in-app chat for improved patient management.',
            technologies: 'Technologies used: React Native, Node.js, WebSockets, MongoDB, RESTful APIs',
            duration: '08/2024 - 10/2024',
            link: 'https://github.com/itsmessc/HemoCare-Appathon'
        },
        {
            name: 'Hospital Management System',
            description: 'Developed a robust hospital management website using HTML, CSS, Node.js, Express, and PostgreSQL to optimize administrative processes and improve patient care delivery.',
            technologies: 'Technologies used: HTML, CSS, Node.js, PostgreSQL, RESTful APIs',
            duration: '03/2024 - 04/2024',
            link: 'https://github.com/itsmessc/HMS',
        },
        {
            name: 'Expense Tracker',
            description: 'Developed a Flutter app with Firebase for tracking expenses and managing budgets. Features include intuitive UI, PIN security, dark theme, notifications, cloud sync, and a Recycle Bin for deleted items.',
            technologies: 'Technologies used: Dart, Flutter, Firebase',
            duration: '02/2024 - 03/2024',
            link: 'https://github.com/saicharan1342/Expense-tracker'
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
                        icon={<FontAwesomeIcon icon={faCode} />}
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
                            width: '30px',
                            height: '10px'
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">{project.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{project.technologies}</h5>
                        <p>{project.description}</p>
                        {project.link ? <p>[Click for source code]</p> : <p></p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

        </div>
    );
}
