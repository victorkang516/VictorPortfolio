import React, { useEffect, useRef } from "react";
import HeroSection from "./hero-section/HeroSection";
import AcademicProject from "./AcademicProjects";
import ContactMe from "./ContactMe";
import DesignProject from "./DesignProjects";
import Header from "./Header";
import "./HomeScreen.css";
import EcommerceGame from "./ECommerceGame";

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
    <div>
      <img
        src="./background4.png"
        className="-z-10 absolute top-0 left-0 w-full bg-cover select-none"
        ref={bgRef}
      ></img>

      <Header />

      <HeroSection />

      <EcommerceGame />

      <ContactMe />

      <AcademicProject />

      <DesignProject />
    </div>
  );
};

export default HomeScreen;
