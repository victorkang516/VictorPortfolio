import React, { useEffect, useRef } from "react";
import HeroSection from "../features/hero-section/HeroSection";
import AcademicProject from "../features/academic-projects/AcademicProjects";
import ContactMe from "../features/contact-me/ContactMe";
import DesignProject from "../features/design-projects/DesignProjects";
import Header from "../features/header/Header";
import EcommerceGame from "./e-commerce-game/ECommerceGame";
import PersonalProject from "../features/personal-projects/PersonalProjects";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black">
      {/* <img
        src="./background4.png"
        className="-z-10 absolute top-0 left-0 w-full bg-cover select-none"
        ref={bgRef}
      ></img> */}

      <Header />

      <HeroSection />

      {/* <EcommerceGame /> */}

      <PersonalProject />

      <AcademicProject />

      <DesignProject />

      <ContactMe />
    </div>
  );
};

export default HomeScreen;
