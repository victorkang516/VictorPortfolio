import React from 'react'
import Iframe from 'react-iframe'
import ContactMe from '../ContactMe';

const PlagueDoctor = () => {
    return (
        <div className='pf'>

            <h1 class="portfolio__title">Plague Doctor</h1>

            <section class="portfolio-intro" id="portfolio-intro">

                <h2>Game Development | Prototyping | Unity Engine </h2>
                <h3>Developed a 3D action game called Plague Doctor by using Unity Engine, only playable on desktop.</h3>

                <div class="portfolio__link">

                    <a class="portfollio__button" href="https://github.com/victorkang516/PlagueDoctor_A176011">
                        <i class="fa-brands fa-github"></i>
                        View Github Project
                    </a>

                    <a class="portfollio__button" href="#demo-video">
                        Watch Demo Video
                    </a>

                    <a class="portfollio__button" href="https://docs.google.com/document/d/15k_NG-DTMzRp4TddibzUj1fTghKm1B3HcmuNgajhvFI/edit?usp=sharing">
                        Read Game Proposal
                    </a>

                </div>

            </section>

            <div class="portfolio-detail">

                <div class="portfolio-detail__item">
                    <h3>Date</h3>
                    <div class="underline"></div>
                    <p>May 2021 - July 2022</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Role</h3>
                    <div class="underline"></div>
                    <p>Software Engineer Student</p>
                </div>

                <div class="portfolio-detail__item">
                    <h3>Course Name</h3>
                    <div class="underline"></div>
                    <p>Multimedia Game Development</p>
                </div>

            </div>


            <img src="../img/plaguedoctor/Screenshot 2022-08-06 232401.png" alt="uwushoppingsite" class="portfolio__image"></img>


            <section className='content'>
                <h2 class="content-title">Overview</h2>


                <p>“The Plague Doctor” is a 3rd person 3D game made in Unity. The player is a plague doctor who is sent to find the cure of plague, which is rumored to be an elixir of life in a dungeon. The player must protect himself from the skeleton raids, and the player can save the peasants and priests on his path to the destination. At the end of the game they would reach the dungeon, they must defeat a giant beetle before the discovery of the cure of plague.</p>

                <h2 className="content-title">UI</h2>

                <div class="portfolio__gallery">
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 232401.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 232452.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 232542.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 232829.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 233047.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 233122.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 233224.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 233631.png" alt="ER intro"></img>
                    <img src="../img/plaguedoctor/Screenshot 2022-08-06 233946.png" alt="ER intro"></img>
                </div>

            </section>


            <section className='content'>
                <h2 class="content-title">Technologies</h2>

                <div class="portfolio__content">

                    <div class="content__item">
                        <h3>App Development Tools</h3>
                        <div class="underline"></div>
                        <p>Unity Engine</p>
                        <p>Visual Studio (IDE)</p>
                    </div>

                    <div class="content__item">
                        <h3>Programming Language</h3>
                        <div class="underline"></div>
                        <p>C#</p>
                    </div>

                    <div class="content__item">
                        <h3>3D Model</h3>
                        <div class="underline"></div>
                        <p>Unity Asset Store</p>
                    </div>

                </div>
            </section>

            <section class="content" id="demo-video" >
                <h2 class="content-title">Demo Video (Full GamePlay)</h2>

                <div class="content__item">
                    <Iframe width="1080" height="620" src="https://www.youtube.com/embed/3BgpwjlNpPE"></Iframe>
                </div>

            </section>

            <div className='footer'>
                <ContactMe />
            </div>
        </div>
    )
}

export default PlagueDoctor