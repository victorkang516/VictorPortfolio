import React from "react";
import { useInView } from "react-intersection-observer";
import PortfolioItem from "../../components/PortfolioItem";
import SectionHeader from "../../components/section/SectionHeader";

const AcademicProject = () => {
  const { ref: portfolioRef, inView: refIsVisible } = useInView();

  return (
    <div className="bg-black text-white" id="academic">
      <div className="px-10 mx-auto max-w-[1280px] py-20">
        <SectionHeader>Academic Projects</SectionHeader>
        <div
          ref={portfolioRef}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ${
            refIsVisible ? "fadeIn" : ""
          }`}
        >
          <PortfolioItem
            link="/idar"
            image_path="./img/FYP_IDAR.png"
            date="Sep 2021 - July 2022"
            title="FYP - Interior Design AR Room App"
            description="Develop a mobile AR app with collaborative feature for interior design. This is my final year project and the app is made using by Unity Engine."
          />

          <PortfolioItem
            link="/plaguedoctor"
            image_path="img/plaguedoctorthumbnail.png"
            date="May 2022 - July 2022"
            title="Plague Doctor Game"
            description="Developed a 3D action game called Plague Doctor by using Unity Engine, only playable on desktop."
          />

          <PortfolioItem
            link="/uwu"
            image_path="img/uwushoppingsite_thumbnail.png"
            date="Sep 2020 - Feb 2022"
            title="UWU Shopping Website"
            description="Learned to built a shopping website with live video streaming feature. A long period (3 semester) group project of my software engineering course. Learned Agile methodology and the website was developed using MERN javascript Stack."
          />

          <PortfolioItem
            link="/easy"
            image_path="img/easyreport/easyreport_thumbnail.png"
            date="Sep 2021 - Feb 2022"
            title="EasyReport Mobile App"
            description="Learned to built a prototype with design thinking approach. This mobile app, EasyReport is designed for citizens to make report on maintenance of roads, highways, buildings or structures. The prototype of this app is develop using Flutter&Dart."
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicProject;
