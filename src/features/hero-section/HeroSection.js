import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import animeboy from "./anime-boy1.png";

const HeroSection = () => {
  const { ref: aboutMeRef, inView: aboutMeIsVisible } = useInView();

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
          <div className="bg-white lg:px-4 lg:py-2 px-2 py-0 rounded-sm ">
            UIUX DESIGNER
          </div>
          <div className="bg-white lg:px-4 lg:py-2 px-2 py-0 rounded-sm ">
            FRONTEND DEV
          </div>
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
        <div className="typewriter text-white text-[2.5vw] lg:text-[1.2vw] w-[200px] h-[9vh] lg:h-[12vh]">
          Welcome to my Portfolio! Here’s where I showcase my UIUX, Frontend
          Development and Graphic Design skills!
        </div>
        <div className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md cursor-pointer z-20">
          <a
            href="./resume/Victor Resume May 2024.pdf"
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
