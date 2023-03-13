import React, { useEffect, useRef } from 'react'
import AboutMe from './AboutMe';
import AcademicProject from './AcademicProjects';
import ContactMe from './ContactMe';
import DesignProject from './DesignProjects';
import Header from './Header';
import './HomeScreen.css'
import PersonalProjects from './PersonalProjects';

const HomeScreen = () => {

  const bgRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPos = window.scrollY;
          const bgElement = bgRef.current;
          if (bgElement) {
              bgElement.style.top = `${scrollPos * 0.7}px`;
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div className='home'>

      <img src="./background.png" className="bg-img" ref={bgRef}></img>

      <Header />

      <AboutMe />

      <ContactMe />

      <AcademicProject />

      <PersonalProjects />

      <DesignProject />

      <ContactMe />

    </div>
  )
}

export default HomeScreen;