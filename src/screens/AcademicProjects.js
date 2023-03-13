import React from "react";
import './AcademicProjects.css';
import { useInView } from 'react-intersection-observer'
import PortfolioItem from "../components/PortfolioItem";

const AcademicProject = () => {

  const { ref: portfolioRef, inView: refIsVisible } = useInView();

  return (
    <div className='projects' id="academic">
      <h1 className='title'>Academic Projects</h1>
      <p>My software development project in UKM.</p>
      <div ref={portfolioRef} className={`portfolio ${refIsVisible ? 'fadeIn' : ''}`}>

        <PortfolioItem 
          link='/idar'
          image_path="./img/FYP_IDAR.png"
          date='Sep 2021 - July 2022'
          title='FYP - Interior Design AR Room'
          description='Develop a mobile AR app with collaborative feature for interior design. This is my final year project and the app is made using by Unity Engine.'
        />

        <PortfolioItem
          link='/plaguedoctor'
          image_path="img/plaguedoctorthumbnail.png"
          date='May 2022 - July 2022'
          title='Plague Doctor'
          description='Developed a 3D action game called Plague Doctor by using Unity Engine, only playable on desktop.'
        />

        <PortfolioItem
          link='/uwu'
          image_path="img/uwushoppingsite_thumbnail.png"
          date='Sep 2020 - Feb 2022'
          title='UWU Shopping Site'
          description='Learned to built a shopping website with live video streaming feature. A long period (3 semester) group project of my software engineering course. Learned Agile methodology and the website was developed using MERN javascript Stack.'
        />

        <PortfolioItem
          link='/easy'
          image_path="img/easyreport/easyreport_thumbnail.png"
          date='Sep 2021 - Feb 2022'
          title='EasyReport'
          description='Learned to built a prototype with design thinking approach. This mobile app, EasyReport is designed for citizens to make report on maintenance of roads, highways, buildings or structures. The prototype of this app is develop using Flutter&Dart.'
        />

        
      </div>

    </div>
  )
}

export default AcademicProject