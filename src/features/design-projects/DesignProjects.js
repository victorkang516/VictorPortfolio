import React from "react";
import PortfolioItem from "../../components/PortfolioItem";
import { useInView } from "react-intersection-observer";

const DesignProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();
  return (
    <div className="bg-black">
      <div className="w-3/4 mx-auto py-20">
        <h1 className="font-freeman text-white font-bold text-[4vw] mb-4">
          Graphic Design Projects
        </h1>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${
            refIsVisible ? "fadeIn" : ""
          }`}
        >
          <PortfolioItem
            link="/tionghua"
            image_path="img/tiong_hua_kpz_thumbnail.png"
            date="Sep 2019 - May 2021"
            title="Cultural Night Event - Tiong Hua KPZ Club"
            description="Designed several poster and logo for Tiong Hua KPZ Club, a college hostel organization in UKM. These graphics are made using Adobe Photoshop."
          />

          <PortfolioItem
            link="/duo"
            image_path="img/duoagency_thumbnail.png"
            date="Dec 2021"
            title="Duo Agency"
            description="Designed 6 graphics for a small business website called Duo Agency. These graphics are made using Procreate."
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProject;
