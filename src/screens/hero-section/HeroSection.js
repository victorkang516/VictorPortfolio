import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import animeboy from "./anime-boy1.png";

const HeroSection = () => {
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`flex lg:flex-row flex-col mx-auto mt-20 mb-20 lg:w-[80vw] ${
        aboutMeIsVisible ? "fadeIn" : ""
      }`}
      ref={aboutMeRef}
      id="about-me"
    >
      <div className="mx-8 lg:mx-0 relative">
        <div className="font-freeman font-bold text-white text-[18vw] lg:text-[12vw] -mb-5 lg:-mb-10">
          VICTOR
        </div>
        <div className="flex lg:flex-row flex-col text-black lg:text-[1vw] text-[2vw] font-semibold gap-1 -mb-5 lg:-mb-10">
          <div className="bg-white lg:px-4 lg:py-2 px-2 py-0 rounded-sm ">
            SOFTWARE ENGINEER
          </div>
          <div className="bg-white lg:px-4 lg:py-2 px-2 py-0 rounded-sm ">UIUX DESIGNER</div>
          <div className="bg-white lg:px-4 lg:py-2 px-2 py-0 rounded-sm ">FRONTEND DEV</div>
        </div>
        <div className="font-freeman font-bold text-white text-[18vw] lg:text-[12vw] ">
          KANG
        </div>
        <img
          src={animeboy}
          className="absolute lg:-top-12 top-0 lg:-right-[22vw] -right-[14vw] lg:w-[80em] w-[60vw]"
        />
      </div>
      <div className="flex flex-col justify-center items-start mx-8 lg:ml-[16vw] gap-8">
        <h3 className="text-white text-[2vw] lg:text-[1.1vw]">
          Open To Work | Available from 2024 May onwards
        </h3>
        <div className="typewriter text-white text-[2.5vw] lg:text-[1.2vw] w-[200px] h-[8vw] lg:h-[6vw]">
          Welcome to my Portfolio! Here’s where I showcase my UIUX, Frontend
          Development and Graphic Design skills!
        </div>
        <div className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md cursor-pointer z-20">
          <a
            href="./resume/VictorKangKaiSheng_Resume_April2023onwards.pdf"
            className={`${aboutMeIsVisible ? "fadeIn-late" : ""} `}
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
