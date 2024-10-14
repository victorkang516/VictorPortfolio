import React from "react";
import HeroSection from "../features/hero-section/HeroSection";
import AcademicProject from "../features/academic-projects/AcademicProjects";
import ContactMe from "../features/contact-me/ContactMe";
import DesignProject from "../features/design-projects/DesignProjects";
import Header from "../features/header/Header";
import PersonalProject from "../features/personal-projects/PersonalProjects";

const HomeScreen = () => {
  return (
    <div className="bg-black bg-opacity-80">
      <Header />

      <HeroSection />

      <PersonalProject />

      <AcademicProject />

      <DesignProject />

      <ContactMe />
    </div>
  );
};

export default HomeScreen;
