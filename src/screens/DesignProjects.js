import React from "react";
import './DesignProject.css';
import PortfolioItem from "../components/PortfolioItem";
import { useInView } from 'react-intersection-observer'

const DesignProject = () => {
    const { ref: portfolioRef, inView: refIsVisible } = useInView();
    return (
        <div className='projects' id="design">
            <h1 className='title'>Graphic Design Projects</h1>
            <p>Graphic design I did for University Club and small business.</p>
            <div ref={portfolioRef} className={`portfolio ${refIsVisible ? 'fadeIn' : ''}`}>
                <PortfolioItem
                    link='portfolios/tionghua.html'
                    image_path="img/tiong_hua_kpz_thumbnail.png"
                    date='Sep 2019 - May 2021'
                    title='Cultural Night Event - Tiong Hua KPZ Club'
                    description='Designed several poster and logo for Tiong Hua KPZ Club, a college hostel organization in UKM. These graphics are made using Adobe Photoshop.'
                />

                <PortfolioItem
                    link='portfolios/duoagency.html'
                    image_path="img/duoagency_thumbnail.png"
                    date='Dec 2021'
                    title='Duo Agency'
                    description='Designed 6 graphics for a small business website called Duo Agency. These graphics are made using Procreate.'
                />
                
            </div>
        </div>
    )
}

export default DesignProject