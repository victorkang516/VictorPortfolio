import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bg from "../../assets/bg.gif";

const RoleItem = ({ children }) => {
  return (
    <div className="cursor-default text-white hover:text-black border border-white hover:bg-white transition-all font-semibold lg:px-4 lg:py-2 px-2 py-1 rounded-sm text-sm max-w-fit ">
      {children}
    </div>
  );
};

const HeroSection = () => {
  const { ref: aboutMeRef, inView: aboutMeIsVisible } = useInView();

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
    <section
      className={`flex lg:flex-row flex-col mx-auto pt-20 mb-20 px-8 max-w-[1280px]`}
      ref={aboutMeRef}
      id="about-me"
    >
      <img
        src={bg}
        alt="bg gif"
        className="-z-20 absolute top-0 left-0 h-full w-full object-cover select-none"
        ref={bgRef}
      ></img>

      <div className="flex-[1] flex flex-row lg:flex-col gap-4 hover:translate-x-16 transition-all cursor-default">
        <div className="font-freeman font-bold text-white text-[64px] lg:text-[156px] -mb-5 lg:-mb-14">
          VICTOR
        </div>
        <div className="font-freeman font-bold text-white text-[64px] lg:text-[156px] ">
          KANG
        </div>
      </div>
      <div
        className={`flex-[1] flex flex-col justify-center items-start gap-8 ${
          aboutMeIsVisible ? "fadeIn" : ""
        }`}
      >
        <div className="flex flex-row gap-1">
          <RoleItem>SOFTWARE ENGINEER</RoleItem>
          <RoleItem>UIUX DESIGNER</RoleItem>
          <RoleItem>FRONTEND DEV</RoleItem>
        </div>
        <div className="typewriter text-white text-md lg:text-lg w-[200px] h-[80px]">
          Welcome to my Portfolio! Here’s where I showcase my UIUX, Frontend
          Development and Graphic Design skills!
        </div>

        <a
          href="./resume/Victor Resume 2024 October.docx.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-700 hover:bg-teal-500 text-white font-semibold px-8 py-2 rounded-full cursor-pointer z-20"
        >
          View Resume 2024 OCT
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
