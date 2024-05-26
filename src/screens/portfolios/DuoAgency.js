import React from 'react'
import ContactMe from '../../features/contact-me/ContactMe'

const DuoAgency = () => {
    return (
        <div className='pf'>

            <h1 class="portfolio__title">Duo Agency</h1>

            <section class="portfolio-intro" id="portfolio-intro">

                <h2 class="portfolio__keyword">Small Business Website | Graphic Design | Procreate</h2>
                <h3>Designed 6 graphics for a small business website called Duo Agency by using Procreate.</h3>

                <div class="portfolio__link">
                    <a class="portfollio__button" href="https://duo-agency.com/our-solutions/">
                        <i class="fa-solid fa-code"></i>
                        View Duo Agency's Website
                    </a>
                </div>

            </section>

            <div class="portfolio-detail">

                <div class="portfolio-detail__item">
                    <h3>Date</h3>
                    <div class="underline"></div>
                    <p>Dec 2021</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Role</h3>
                    <div class="underline"></div>
                    <p>Graphic Designer</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Organization Name</h3>
                    <div class="underline"></div>
                    <p>Duo Agency</p>
                </div>

            </div>

            <img src="../img/duoagency/duoagency.PNG" alt="uwushoppingsite" class="portfolio__image"></img>

            <section className='content'>
                <h2 class="content-title">Graphics</h2>

                <p class="content__paragraph">This freelance work is to help this small business design 6 graphics for the services they provide.</p>

                <p class="content__paragraph">The following are the 6 graphics designed.</p>

                <div class="portfolio__gallery">
                    <img src="../img/duoagency/01.jpg" alt="duoagency 1" class="portfolio__gallery-image"></img>
                    <img src="../img/duoagency/02.jpg" alt="duoagency 2" class="portfolio__gallery-image"></img>
                    <img src="../img/duoagency/03.jpg" alt="duoagency 3" class="portfolio__gallery-image"></img>
                    <img src="../img/duoagency/04.jpg" alt="duoagency 4" class="portfolio__gallery-image"></img>
                    <img src="../img/duoagency/05.jpg" alt="duoagency 5" class="portfolio__gallery-image"></img>
                    <img src="../img/duoagency/06.jpg" alt="duoagency 6" class="portfolio__gallery-image"></img>
                </div>
            </section>

            <div className='content'>

                <h2 class="content-title">Technologies</h2>

                <div class="portfolio__content">

                    <div class="content__item">
                        <p>Procreate</p>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <ContactMe />
            </div>


        </div>
    )
}

export default DuoAgency