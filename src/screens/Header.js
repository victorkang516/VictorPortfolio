import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <a href="" class="logo">
        VK
      </a>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#academic">Academic</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
