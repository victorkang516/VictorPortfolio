import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { useInView } from "react-intersection-observer";

const DesignProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();
  return (
    <div className="bg-black">
      <div className="px-10 md:w-5/6 mx-auto py-20">
        <h1 className="font-freeman text-white font-bold text-[4vw] mb-4">
          Graphic Design Projects
        </h1>
        <div className="text-white mb-4">
          My freelance graphic design jobs with clients.
        </div>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${
            refIsVisible ? "fadeIn" : ""
          }`}
        >
          <PortfolioItem
            link="/"
            image_path="img/nosda/nosda-thumbnail.png"
            date="June 2024"
            title="Nosda"
            description="Traced Nosda pillows graphic using Adobe Illustrator."
          />

          <PortfolioItem
            link="/"
            image_path="img/carco/carco-signboard-thumbnail.png"
            date="Sep 2023"
            title="Carco Signboard"
            description="Traced Carco shop signboards using Adobe Illustrator."
          />

          <PortfolioItem
            link="/"
            image_path="img/carco/carco-wall-logo-thumbnail.png"
            date="Jan 2023"
            title="Carco Wall Logo"
            description="Designed Carco Wall logo using Adobe Illustrator."
          />

          <PortfolioItem
            link="/"
            image_path="img/robotcode/robotcode-thumbnail.png"
            date="Jan 2023"
            title="RobotCode"
            description="Designed a startup company logo using Adobe Illustrator."
          />

          <PortfolioItem
            link="/duo"
            image_path="img/duoagency_thumbnail.png"
            date="Dec 2021"
            title="Duo Agency"
            description="Designed 6 graphics using Procreate."
          />

          <PortfolioItem
            link="/tionghua"
            image_path="img/tiong_hua_kpz_thumbnail.png"
            date="Sep 2019 - May 2021"
            title="Cultural Night Event - UKM Tiong Hua KPZ Club"
            description="Designed posters and logo, using Adobe Photoshop"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProject;
