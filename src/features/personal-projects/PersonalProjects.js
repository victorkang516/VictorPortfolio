import React from "react";
import { useInView } from "react-intersection-observer";
import PortfolioItem from "../../components/PortfolioItem";
import { Link } from "react-router-dom";

const PersonalProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();

  return (
    <div className="bg-gray-200 text-black select-none" id="projects">
      <div className="px-10 md:w-5/6 mx-auto py-20">
        <h1 className="font-freeman font-bold text-[100px] mb-4">
          Personal Projects
        </h1>
        <div className="mb-4">
          My personal web development projects to showcase my{" "}
          <b>Front-end dev</b> and
          <b> UIUX design.</b>
        </div>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-1 gap-4 ${refIsVisible ? "fadeIn" : ""}`}
        >
          <div className="bg-white p-8 rounded-lg w-full h-full group flex flex-row justify-start items-start overflow-hidden transition-transform shadow-md">
            <div className="h-auto w-auto border border-gray-200">
              <img
                src="./img/tutora/tutoraThumbnail.png"
                alt="project"
                className="object-cover w-full"
              ></img>
            </div>

            <div className="flex flex-col ml-8">

              <div className="flex flex-row items-center gap-4">
                <p className="text-black font-bold text-3xl my-2">Tutora</p>
                <div className="border border-blue-400 text-blue-400 text-sm p-1 px-4 rounded-full">
                  In Progress
                </div>
              </div>
              <p className="text-black mb-2">
                Tutora is a platform for students and parents to find tuition centers or private tutor that best suit their needs.
              </p>
              <div className="flex flex-col text-md font-semibold text-blue-800 mb-8">

                <div>React JS</div>
                <div>Vite JS</div>
                <div>Tailwind CSS</div>
                <div>Figma</div>

              </div>
              <a
                href="https://tutora-victorkang.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center bg-blue-700 hover:bg-blue-900 text-white font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
                  View Website
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
