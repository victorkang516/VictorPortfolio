import React from 'react'
import ContactMe from '../ContactMe'

const TiongHuaKPZ = () => {
    return (
        <div className='pf'>

            <h1 class="portfolio__title">Cultural Night Tiong Hua Club KPZ</h1>

            <section class="portfolio-intro" id="portfolio-intro">

                <h2 class="portfolio__keyword">College Club | Publicity Exco | Graphic Design | Adobe Photoshop</h2>
                <h3>Designed several poster and logo for Tiong Hua KPZ Club, a college hostel organization in UKM. These graphics are made using Adobe Photoshop.</h3>

                <div class="portfolio__link">

                </div>

            </section>

            <div class="portfolio-detail">

                <div class="portfolio-detail__item">
                    <h3>Date</h3>
                    <div class="underline"></div>
                    <p>Sep 2019 - May 2021</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Role</h3>
                    <div class="underline"></div>
                    <p>Publicity Exco</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Organization Name</h3>
                    <div class="underline"></div>
                    <p>Tiong Hua Club KPZ</p>
                </div>

            </div>

            <img src="../img/tiong_hua_kpz_thumbnail.png" alt="uwushoppingsite" class="portfolio__image"></img>



            <section className='content'>
                <h2 class="content-title">Graphics</h2>

                <p class="content__paragraph">I joined Cultural Night Tiong Hua Club KPZ as a publicity Exco for 2 years. My works include photography, poster design, logo design, profile picture design, shirt design and social media posting. </p>

                <p class="content__paragraph">In my first year (2019 - 2020), the event cancelled 1 week before the event date, because of the implementation of MCO in 2020. The following are some highlighted works designed throughout the preparation of the event.</p>

                <div class="portfolio__gallery">
                    <img src="../img/tionghuaclub/冬至victor4.jpg" alt="dong zhi" ></img>
                    <img src="../img/tionghuaclub/Big Eater (Eng).png" alt="big eater" ></img>
                    <img src="../img/tionghuaclub/CD7 - UPM.jpg" alt="cd upm" ></img>
                </div>

                <img src="../img/tionghuaclub/T-shirt.jpg" alt="tiong hua t-shirt"></img>


                <p class="content__paragraph">In my second year (2020 - 2021), I continue joining as a senior publicity exco. The event was held online at MS Team on 8 May 2021. The following are some highlighted works designed throughout the preparation of the event.</p>

                <div class="portfolio__gallery">
                    <img src="../img/tionghuaclub/Logo Final.png" alt="tiong hua 2021 logo" class="portfolio__gallery-image"></img>

                </div>

                <div class="portfolio__gallery">
                    <img src="../img/tionghuaclub/Comeback Poster 9.2.png" alt="tiong hua 2021 comeback poster" class="portfolio__gallery-image"></img>
                    <img src="../img/tionghuaclub/CD Day 2 Final.png" alt="tiong hua cd 2"></img>
                    <img src="../img/tionghuaclub/CD Day 1 Final.png" alt="tiong hua cd 1"></img>
                </div>



            </section>

            <div className='content'>

                <h2 class="content-title">Technologies</h2>

                <div className="portfolio__content">
                    <div class="content__item">
                        <p>Adobe Photoshop</p>
                    </div>
                </div>

            </div>

            <div className='footer'>
                <ContactMe />
            </div>

        </div>
    )
}

export default TiongHuaKPZ