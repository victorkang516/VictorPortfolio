import React from "react";
import './PortfolioItem.css'
import { Link } from "react-router-dom";

const PortfolioItem = (props) => {
    return (
        <div class="portfolio__item">
          <Link to={props.link}>
            <img src={props.image_path} alt="" class="portfolio__img"></img>
          </Link>
          <p class="portfolio__date">{props.date}</p>
          <Link href={props.link} class="portfolio__item--title">
            <h3>{props.title}</h3>
          </Link>
          <p>{props.description}</p>

          <div class="line"></div>
        </div>
    )
}

export default PortfolioItem