import React, { useEffect, useRef } from 'react';
import './Idar.css';
import Iframe from 'react-iframe'
import ContactMe from '../ContactMe';

const Idar = () => {

    return (
        <div className='pf'>

            <h1 className="portfolio__title">Interior Design AR Room</h1>

            <section className="portfolio-intro" id="portfolio-intro">

                <h2>Final Year Project | Software Development | Mobile App | AR App | Unity</h2>
                <h3>My final year project is to develop a mobile AR application with collaborative features designed for interior design. The application is made using Unity Engine, with other technologies like ARFoundation, Unity Photon Pun 2, Firebase.</h3>

                <div className="portfolio__link">
                    <a className="portfollio__button" href="https://github.com/victorkang516/Interior-Design-ARRoom">
                        <i className="fa-brands fa-github"></i>
                        View Github Project
                    </a>

                    <a className="portfollio__button" href="#demo-video">
                        Watch Demo Video
                    </a>
                </div>

            </section>

            <div className="portfolio-detail">

                <div className="portfolio-detail__item">
                    <h3>Date</h3>
                    <div className="underline"></div>
                    <p>Sep 2021 - Present</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Role</h3>
                    <div className="underline"></div>
                    <p>Software Engineer Student</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Course Name</h3>
                    <div className="underline"></div>
                    <p>Final Year Project</p>
                </div>

            </div>


            <img src="../img/idar_intro_img.png" alt="idar intropage"></img>


            <section className='content'>
                <h2 className="content-title">Overview</h2>

                <p>Interior Design AR Room allow designer and client to find design direction. This app provide several choices of house model, furnitures, paints and tiles. Designer can choose any model based on their needs, and create an online room, which can be join by their client. </p>

                <p>They can discuss about their interior design vision, at a same time viewing and interacting with the house model in AR.</p>

                <img src="../img/idar/idar_guide5.jpg" alt="idar guide page" className="portfolio__image"></img>

                <p>Augmented reality start immedialety after the room is created. User are required to place 3d model (house model) on a table or floor, then adjust the position, rotation and size of the 3D model. </p>

                <img src="../img/idar/idar_ar.gif" alt="idar ar 1" className="portfolio__image"></img>

                <p>Then, user can modify the interior design of the model. The user can <strong>move, rotate and change the furniture model type</strong>. For floor and paint, user can only change its colour/texture.</p>

                <img src="../img/idar/idar_ar2.gif" alt="idar ar 2" className="portfolio__image"></img>

                <p>There are also collaboration feature in AR room. The host can share his room name by telling other if face to face, or sending the room name online (Whatsapp, Wechat). They can now viewing the same model, modify the interior design together in realtime, either face to face or remote.</p>

                <img src="../img/idar/idar_ar3.png" alt="idar ar 3" className="portfolio__image"></img>

                <p>Lastly, user can save the room session, and continue the room session next time.</p>


            </section>


            <section className='content'>
                <h2 className="content-title">Technologies</h2>

                <div className="portfolio__content">

                    <div className="content__item">

                        <h3>App Development Tools</h3>
                        <div className="underline"></div>
                        <p>Unity Engine</p>
                        <p>Visual Studio (IDE)</p>
                        <p>Figma (Prototyping)</p>
                        <p>Github</p>
                    </div>

                    <div className="content__item">

                        <h3>Multimedia Content Tools</h3>
                        <div className="underline"></div>
                        <p>Adobe Photoshop</p>
                        <p>Vectornator</p>

                    </div>

                    <div className="content__item">
                        <h3>Database</h3>
                        <div className="underline"></div>
                        <p>Firebase Realtime Database</p>
                    </div>

                    <div className="content__item">
                        <h3>Programming Language</h3>
                        <div className="underline"></div>
                        <p>C#</p>
                    </div>

                    <div className="content__item">
                        <h3>SDLC Model</h3>
                        <div className="underline"></div>
                        <p>Waterfall Model</p>
                    </div>

                    <div className="content__item">
                        <h3>Packages/Libaries</h3>
                        <div className="underline"></div>
                        <p>ARFoundation</p>
                        <p>Photon Pun 2</p>
                    </div>

                </div>
            </section>

            <section id="demo-video" className='content'>
                <h2 className="content-title">Demo Videos</h2>

                <Iframe className='iframe' width="1080" height="720" url="https://www.youtube.com/embed/VBUnJYVM1rM"></Iframe>

            </section>

            <div className='footer'>
                <ContactMe />
            </div>
            

        </div>
    )
}

export default Idar