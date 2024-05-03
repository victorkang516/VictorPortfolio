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
      className={`flex lg:flex-row flex-col mx-auto mt-20 lg:w-[1080px] ${
        aboutMeIsVisible ? "fadeIn" : ""
      }`}
      ref={aboutMeRef}
      id="about-me"
    >
      <div className="ml-8 lg:ml-0 relative">
        <div className="font-freeman font-bold text-white text-[200px] -mb-10">
          VICTOR
        </div>
        <div className="flex flex-row text-black text-sm font-semibold gap-2 -mb-10">
          <div className="bg-white px-4 py-2 rounded-sm">SOFTWARE ENGINEER</div>
          <div className="bg-white px-4 py-2 rounded-sm">UIUX DESIGNER</div>
          <div className="bg-white px-4 py-2 rounded-sm">FRONTEND DEV</div>
        </div>
        <div className="font-freeman font-bold text-white text-[200px]">
          KANG
        </div>
        <img src={animeboy} className="absolute -right-14 top-0 lg:-right-64" />
      </div>
      <div className="flex flex-col justify-center items-start ml-8 lg:ml-40 gap-8">
        <h3 className="text-white">
          Open To Work | Available from May onwards
        </h3>
        <div className="typewriter text-white text-[24px] w-[200px] h-[80px] lg:h-[150px]">
          Welcome to my Portfolio! Here’s where I showcase my UIUX, Frontend
          Development and Graphic Design skills!
        </div>
        <div className="bg-blue-400 px-4 py-2 rounded-md cursor-pointer z-20">
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
