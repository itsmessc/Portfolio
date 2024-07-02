import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link as ScrollLink } from 'react-scroll';
import './meteor.scss'

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');
    const [showArrows, setShowArrows] = useState(true); 

    useEffect(() => {
        const name = "Sai Charan";
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText(prevText => prevText + name[ref.current - 1]);
            }
        }, 400);
        return () => clearInterval(interval);
    }, []);

    // Event listener to toggle arrows based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowArrows(true);
            } else {
                setShowArrows(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home-container" id='home'>
            <div className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm <span className="highlight">{text}</span></h1>
                    <p className="hero-description">I specialize as a full-stack web and app developer.</p>
                </div>
            </div>
            {showArrows && (<div class="star"></div>)}
            <div class="meteor-1"></div>
            <div class="meteor-2"></div>
            <div class="meteor-3"></div>
            <div class="meteor-4"></div>
            <div class="meteor-5"></div>
            <div class="meteor-6"></div>
            <div class="meteor-7"></div>
            <div class="meteor-8"></div>
            <div class="meteor-9"></div>
            <div class="meteor-10"></div>
            <div class="meteor-11"></div>
            <div class="meteor-12"></div>
            <div class="meteor-13"></div>
            <div class="meteor-14"></div>
            <div class="meteor-15"></div>
            {showArrows && (
                <ScrollLink to="about1" duration={500} delay={0} offset={-90}>
                    <svg className="arrows">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </ScrollLink>
            )}
        </div>
    );
}

export default Home;
