import React from "react";
import './PersonalProjects.css';
import PortfolioItem from "../components/PortfolioItem";
import { useInView } from 'react-intersection-observer'

const PersonalProjects = () => {
    const { ref: portfolioRef, inView: refIsVisible } = useInView();

    return (
        <div className='projects' id="personal">
            <h1 className='title'>Personal Projects</h1>
            <p>My personal software development project for practice purposes.</p>
            <div ref={portfolioRef} className={`portfolio ${refIsVisible ? 'fadeIn' : ''}`}>
                <PortfolioItem
                    link='parkperak'
                    image_path="./img/parkperakthumbnail.png"
                    date='Jan 2023 - Present'
                    title='Park@Perak Redesign'
                    description='Redesign Park@Perak App for practice purposes.'
                />
            </div>
        </div>
    )
}

export default PersonalProjects