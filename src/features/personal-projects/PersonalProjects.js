import React from "react";
import { useInView } from "react-intersection-observer";
import PortfolioItem from "../../components/PortfolioItem";
import { Link } from "react-router-dom";

const PersonalProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();

  return (
    <div className="bg-gray-200 text-black select-none" id="projects">
      <div className="px-10 md:w-5/6 mx-auto py-20">
        <h1 className="font-freeman font-bold text-[4vw] mb-4">
          Personal Projects
        </h1>
        <div className="mb-4">
          My personal web development projects to showcase my{" "}
          <b>Front-end dev</b> and
          <b> UIUX design.</b>
        </div>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-2 gap-4 ${refIsVisible ? "fadeIn" : ""}`}
        >
          <div className="bg-white p-4 rounded-lg w-full h-full group flex flex-col justify-start items-start overflow-hidden transition-transform shadow-md">
            <div className="h-auto w-auto border-2 border-gray-200">
              <img
                src="./img/vizitor/vizitor.png"
                alt="project"
                className="object-cover"
              ></img>
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
              <p className="text-gray-600 font-normal text-xs">
                Started on 2024/06/01
              </p>
              <div className="bg-blue-300 text-white text-xs p-1 px-2 rounded-full">
                In Progress
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <p className="text-black font-bold text-xl my-2">Vizitor</p>
            </div>
            <p className="text-black mb-2">
              Vizitor aim to streamline the visitor management process of a
              manufacturing company.
            </p>
            <a
              href="https://vizitor-victorkang.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-blue-700 hover:bg-blue-900 text-white font-semibold text-sm p-2 px-4 rounded-full mb-2">
                View Website
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
