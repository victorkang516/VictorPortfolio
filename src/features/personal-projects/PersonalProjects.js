import React from "react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../../components/section/SectionHeader";
import { Link } from "react-router-dom";

const SkillItem = ({ children }) => {
  return (
    <div className="select-none text-md font-semibold text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-500 rounded-md px-4 py-1">
      {children}
    </div>
  );
};

const PersonalProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();

  return (
    <div className="bg-gray-200 text-black" id="projects">
      <div className="px-10 py-20 max-w-[1280px] mx-auto">
        <SectionHeader>Personal Projects</SectionHeader>
        <div className="mb-4">
          My UIUX and web development projects for practices purposes.
        </div>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-1 gap-4 ${refIsVisible ? "fadeIn" : ""}`}
        >
          <div className="bg-white p-8 rounded-lg w-full h-full group flex flex-col lg:flex-row justify-start items-start overflow-hidden hover:scale-105 transition-all shadow-md">
            <div className="flex-[1] h-auto w-auto border border-gray-200 mb-4">
              <img
                src="./img/caritutor/thumbnail.png"
                alt="project"
                className="object-cover w-full"
              ></img>
            </div>

            {/* CariTutor */}
            <div className="flex-[1] flex flex-col ml-8">
              <div className="flex flex-row items-baseline gap-4">
                <p className="text-black font-bold text-3xl my-2">CariTutor</p>
                <p className="text-gray-500 text-xs">2024 June - Sep</p>
              </div>
              <p className="text-black mb-2 text-sm">
                CariTutor aims to help students to find their desired private
                tutor or tuition center easily, and book a session with just a
                few clicks.
              </p>
              <div className="flex flex-row mb-8 gap-2 flex-wrap">
                <SkillItem>React JS</SkillItem>
                <SkillItem>UIUX Design</SkillItem>
                <SkillItem>Figma</SkillItem>
              </div>
              <a
                href="https://caritutor-victorkang.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center bg-teal-700 hover:bg-teal-500 text-white font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  Visit Website
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/Y46bBXR6O9gbIpOre3uwQW/CariTutor?node-id=1479-1530&node-type=canvas&t=KRHOLtFIhAeFEw7e-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A5558&starting-point-node-id=1479%3A1530&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center border border-teal-700 hover:bg-teal-100 text-teal-700 font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  Figma Prototype
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1TLTwluqhCCmL7zOolpbbXppkAG15oHMa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center border border-teal-700 hover:bg-teal-100 text-teal-700 font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  UX Case Study
                </div>
              </a>
            </div>
          </div>

          {/* Park Perak */}
          <div className="bg-white p-8 rounded-lg w-full h-full group flex flex-col lg:flex-row justify-start items-start overflow-hidden hover:scale-105 transition-all shadow-md">
            <div className="flex-[1] h-auto w-auto border border-gray-200 mb-4">
              <img
                src="./img/parkperak/thumbnail.png"
                alt="project"
                className="object-cover w-full"
              ></img>
            </div>

            {/* CariTutor */}
            <div className="flex-[1] flex flex-col ml-8">
              <div className="flex flex-row items-baseline gap-4">
                <p className="text-black font-bold text-3xl my-2">
                  Park Perak Redesign
                </p>
                <p className="text-gray-500 text-xs">2023 Jan - March</p>
              </div>
              <p className="text-black mb-2 text-sm">
                Park Perak is a parking app developed by government for Perak
                State. As an user, I was thinking what if I could redesign the
                UIUX with my own idea...
              </p>
              <div className="flex flex-row mb-8 gap-2 flex-wrap">
                <SkillItem>UIUX Design</SkillItem>
                <SkillItem>Figma</SkillItem>
              </div>
              <a
                href="https://www.figma.com/proto/UdtW4WEoRlR0GRKS6yYI83/Parking-App?node-id=7-3&node-type=canvas&t=JIwKJ6iBOxQ03U3S-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center border border-teal-700 hover:bg-teal-100 text-teal-700 font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  Figma Prototype
                </div>
              </a>
              <Link to="/parkperak">
                <div className="text-center border border-teal-700 hover:bg-teal-100 text-teal-700 font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  Project Walkthrough
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
