import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import './AboutMe.css';


const AboutMe = () => {
    const { ref: aboutMeRef, inView: aboutMeIsVisible } = useInView();

    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const bgElement = bgRef.current;
            if (bgElement) {
                bgElement.style.top = `${scrollPos * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`about-me ${aboutMeIsVisible ? 'fadeIn' : ''}`} ref={aboutMeRef} id='about-me'>
            <div className='title'>
                <h2>SOFTWARE ENGINEER | UIUX DESIGNER | FRONTEND DEV</h2>
                <h1>VICTOR KANG</h1>
            </div>
            <div className={`content`}>
                <h3>Open To Work | Available from May onwards</h3>
                <h2 className='typewriter'>Hi, Welcome to my Portfolio. I am in my fourth year at National University of Malaysia (UKM) studying Bachelor Degree of Software Engineering Multimedia. Feel free to take a look at my software and design projects!</h2>
                <br></br>
                <a href='./resume/VictorKangKaiSheng_Resume_April2023onwards.pdf' id='resumebtn' className={`${aboutMeIsVisible ? 'fadeIn-late' : ''}`}>View Resume</a>
            </div>
        </section>
    )
}

export default AboutMe;