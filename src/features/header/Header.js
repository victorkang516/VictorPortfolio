import React, { useState, useEffect } from "react";
import NavItem from "../../components/header/NavItem";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu's visibility
  };

  return (
    <div
      className={`fixed w-full z-50 ${
        isScrolled ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center text-white p-2 max-w-[1280px] px-8 mx-auto">
        <a href="./" className="lg:text-[40px] text-[24px] font-freeman">
          VK Portfolio
        </a>

        {/* Hamburger Icon */}
        <button
          className="block text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu (hidden by default on mobile, shown on large screens) */}
        <div className={`hidden lg:flex space-x-4`}>
          <NavItem href="#projects">Personal Projects</NavItem>
          <NavItem href="#academic">Academic Projects</NavItem>
          <NavItem href="#designs">Design Projects</NavItem>
          <NavItem href="#contact-me">Contact Me</NavItem>
        </div>

        <div
          className={`fixed w-full h-full top-0 left-0 flex flex-col justify-center gap-8 bg-black p-8 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="fixed top-0 right-0 m-4 flex justify-center items-center w-[60px] h-[60px] text-4xl hover:text-black hover:bg-white rounded-full"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <NavItem href="#projects" onClick={toggleMenu}>
            Personal Projects
          </NavItem>
          <NavItem href="#academic" onClick={toggleMenu}>
            Academic Projects
          </NavItem>
          <NavItem href="#designs" onClick={toggleMenu}>
            Design Projects
          </NavItem>
          <NavItem href="#contact-me" onClick={toggleMenu}>
            Contact Me
          </NavItem>
        </div>
      </div>
    </div>
  );
};

export default Header;
