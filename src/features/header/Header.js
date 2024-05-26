import React from "react";
import NavItem from "../../components/header/NavItem";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center text-white p-4 w-[80vw] mx-auto">
      <a href="" className="text-[40px] font-freeman">
        VK Portfolio
      </a>
      <div className="flex flex-row justify-around gap-8 h-fit">
        <NavItem href="#about-me">About Me</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact-me">Contact Me</NavItem>
      </div>
    </div>
  );
};

export default Header;
