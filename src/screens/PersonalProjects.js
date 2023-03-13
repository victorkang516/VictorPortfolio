import React from "react";
import './PersonalProjects.css';
import PortfolioItem from "../components/PortfolioItem";
import { useInView } from 'react-intersection-observer'

const PersonalProjects = () => {
    const { ref: portfolioRef, inView: refIsVisible } = useInView();

    return (
        <div className='projects' id="personal">
            <h1 className='title'>Personal Projects</h1>
            <p>My software development project in UKM.</p>
            <div ref={portfolioRef} className={`portfolio ${refIsVisible ? 'fadeIn' : ''}`}>
                <PortfolioItem
                    link='portfolios/idar.html'
                    image_path="./img/FYP_IDAR.png"
                    date='Sep 2021 - July 2022'
                    title='FYP - Interior Design AR Room'
                    description='Develop a mobile AR app with collaborative feature for interior design. This is my final year project and the app is made using by Unity Engine.'
                />
            </div>
        </div>
    )
}

export default PersonalProjects