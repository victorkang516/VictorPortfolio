import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = (props) => {
  return (
    <Link to={props.link}>
      <div className="bg-white p-4 rounded-lg w-full h-full group flex flex-col justify-start items-start overflow-hidden hover:scale-105 transition-transform shadow-md hover:shadow-md hover:shadow-cyan-300 duration-400">
        <div className="h-auto w-auto">
          <img
            src={props.image_path}
            alt="project"
            className="object-cover"
          ></img>
        </div>
        <p className="text-gray-600 font-normal text-xs mt-4">{props.date}</p>
        <p className="text-black font-bold text-xl my-4">{props.title}</p>
        <p className="text-black">{props.description}</p>
      </div>
    </Link>
  );
};

export default PortfolioItem;
