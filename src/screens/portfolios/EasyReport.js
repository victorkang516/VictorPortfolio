import React from 'react'
import ContactMe from '../ContactMe';

const EasyReport = () => {
    return (
        <div className='pf'>

            <h1 class="portfolio__title">EasyReport</h1>

            <section class="portfolio-intro" id="portfolio-intro">

                <h2 class="portfolio__keyword">Design Thinking | Prototyping | Flutter & Dart </h2>
                <h3>Learned to built a prototype with design thinking approach. This mobile app, EasyReport is designed for citizens to make report on maintenance of roads, highways, buildings or structures. The prototype of this app is develop using Flutter&Dart.</h3>

                <div class="portfolio__link">

                    <a class="portfollio__button" href="https://github.com/WongYewKeong/EasyReport">
                        <i class="fa-brands fa-github"></i>
                        View Github Project
                    </a>

                </div>

            </section>

            <div class="portfolio-detail">

                <div class="portfolio-detail__item">
                    <h3>Date</h3>
                    <div class="underline"></div>
                    <p>Sep 2021 - Feb 2022</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Role</h3>
                    <div class="underline"></div>
                    <p>Software Engineer Student</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Course Name</h3>
                    <div class="underline"></div>
                    <p>Information Technology And Entrepreneurship</p>
                </div>

            </div>

            <img src="../img/easyreport/easyreport_home.png" alt="uwushoppingsite" class="portfolio__image"></img>

            <section className='content'>
                <h2 class="content-title">Overview</h2>

                <p>A reporting platform for citizens to make report on maintenance of roads, highways, buildings or structures.</p>

                <h3 class="content__paragraph">Problem</h3>
                <p>An important function of the Ministry of Works (MOW) is the maintenance of road and highway infrastructure, government buildings (such as schools, hospitals, clinics, quarters, etc), and structures (such as bridges, flyovers, tunnels, and drains). The number and types of assets under the ministry are large and geographically dispersed and varied. An effective and timely reporting platform from citizens can contribute to the better maintenance of these public assets.</p>

                <h3 class="content__paragraph">Solution</h3>
                <p>Online reporting channel for citizens to suggest maintenance of roads, highways, buildings or structures.</p>

                <ul>
                    <li>
                        <p>Provide location service such as Google Maps for choosing location</p>
                    </li>
                    <li>
                        <p>Provide a list of frequently occur problems to choose from</p>
                    </li>
                    <li>
                        <p>Media uploading for the report of breakdown (images/videos)</p>
                    </li>
                    <li>
                        <p>Report status tracking</p>
                    </li>
                    <li>
                        <p>AI chat bot for inquiry</p>
                    </li>
                </ul>

                <h2 class="content-title">UI</h2>

                <div class="portfolio__gallery">
                    <img src="../img/easyreport/easyreport_intro.png" alt="ER intro"></img>
                    <img src="../img/easyreport/easyreport_homepage.png" alt="ER intro"></img>
                    <img src="../img/easyreport/easyreport_map.png" alt="ER intro"></img>
                    <img src="../img/easyreport/easyreport_report.png" alt="ER intro"></img>
                    <img src="../img/easyreport/easyreport_status.png" alt="ER intro"></img>
                    <img src="../img/easyreport/easyreport_bot.png" alt="ER intro"></img>
                </div>

            </section>


            <section className='content'>
                <h2 class="content-title">Technologies</h2>

                <div class="portfolio__content">

                    <div class="content__item">
                        <h3>App Development Tools</h3>
                        <div class="underline"></div>
                        <p>Android Studio (IDE)</p>
                        <p>Flutter</p>
                        <p>Github</p>
                    </div>

                    <div class="content__item">
                        <h3>Programming Language</h3>
                        <div class="underline"></div>
                        <p>Dart</p>
                    </div>

                    <div class="content__item">
                        <h3>Database</h3>
                        <div class="underline"></div>
                        <p>-</p>
                    </div>

                    <div class="content__item">
                        <h3>Approach</h3>
                        <div class="underline"></div>
                        <p>Design Thinking</p>
                    </div>

                </div>
            </section>

            <section className='content'>
                <h2 class="content-title">Design Thinking</h2>
                <p>In this course we learned and carried some process of design thinking. However, we did not meet real users in empathize phase, and also did not carry out test phase. We figure out problem based on assumption in empathize phase, then define the real cause of the problem in define phase. </p>

                <p>In ideate phase, we brainstorm a few solutions, then we pick the solution that can be implemented digitally, and also feasible. Lastly, we build the prototype using Flutter & Dart.</p>

                <img src="https://public-images.interaction-design.org/literature/articles/heros/article_130794_hero_6256d891661f06.39964597.jpg?tr=w-1024" alt="Design Thinking" class="portfolio__image"></img>

            </section>

            <div className='footer'>
                <ContactMe />
            </div>
        </div>
    )
}

export default EasyReport