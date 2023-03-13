import React from 'react'
import './Idar.css';
import ContactMe from '../ContactMe';

function UwuShoppingSite() {
    return (
        <div className='pf'>

            <h1 className="portfolio__title">UWU Shopping Site</h1>

            <section className="portfolio-intro" id="portfolio-intro">

                <h2>Software Engineering Course | Web Development | MERN Stack | Agile Methodology</h2>
                <h3>Learned to built a shopping website with live video streaming feature. A long period (3 semester) group project of my software engineering course. Learned Agile methodology and the website was developed using MERN javascript Stack.</h3>

                <div className="portfolio__link">
                    <a className="portfollio__button" href="https://github.com/victorkang516/UWUShoppingSite">
                        <i className="fa-brands fa-github"></i>
                        View Github Project
                    </a>
                    <a className="portfollio__button" href="https://uwushoppingsite.netlify.app">
                        <i className="fa-solid fa-code"></i>
                        View Website
                    </a>
                </div>

            </section>


            <div className="portfolio-detail">

                <div className="portfolio-detail__item">
                    <h3>Date</h3>
                    <div className="underline"></div>
                    <p>Sep 2020 - Feb 2022</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Role</h3>
                    <div className="underline"></div>
                    <p>Software Engineer Student</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Course Name</h3>
                    <div className="underline"></div>
                    <p>Software Engineering</p>
                </div>

            </div>

            <img src="../img/uwushoppingsite/uwushoppingsite.png" alt="uwushoppingsite" className="portfolio__image"></img>

            <section className='content'>
                <h2 className="content-title">Overview</h2>

                <p>Our team see trending in selling products through streaming on social media platform (Facebook, Instagram). However, there are problems with these platform: </p>

                <ul>
                    <li>
                        <p>Their live streaming are not designed for selling products, the buyers' only way to place order is by commenting below the live streaming.</p>
                    </li>
                    <li>
                        <p>The buyers' inputs are inconsistent. Some of the buyers forget to enter quantity, some of the buyers forget to state the product type.</p>
                    </li>
                    <li>
                        <p>Besides that, the order comments from the buyers are mixed up with other unrelated comments, how can the seller track all of the order in a short time?</p>
                    </li>
                </ul>

                <img src="../img/uwushoppingsite/uwu_problem1.png" alt="uwu problem" className="portfolio__image"></img>


                <p>Thus, we proposed to develop a shopping site with live video streaming, that allows users to place their order easily, and the seller can track each order without frustration.</p>


                <br></br>
                <h2 className="content-title">The Seller</h2>
                <p>The sellers are allow to create their shop, sell products, track orders and hold live streaming.</p>

                <img src="../img/uwushoppingsite/uwu_seller-streaming.gif" alt="uwu streaming" className="portfolio__image"></img>

                <br></br>
                <h2 className="content-title">The Buyer</h2>
                <p>The normal users (buyers) can browse products, buy products and watch live streaming.</p>

                <img src="../img/uwushoppingsite/uwu_buyer-streaming.gif" alt="uwu streaming" className="portfolio__image"></img>


                <br></br>
                <h2 className="content-title">Auction Live Streaming</h2>
                <p>Additionally, uwu shopping site also provide auction streaming feature. Sellers can set the minimum price of the item and control the flow of auction bidding. Each round have 30 seconds, the buyers can only bid when timer counting down. Their bid amount must higher than the minimum bid price.</p>

                <p>When no one bid anymore, the seller can decide to end the auction or continue next round.</p>

                <img src="../img/uwushoppingsite/uwu_auction-streaming.gif" alt="uwu streaming" className="portfolio__image"></img>

                <p>Further, the website also provide membership feature. The system will check if the buyer's total spent exceed a certain amount, the buyer will get a membership.</p>


            </section>


            <section className='content'>
                <h2 className="content-title">Technologies</h2>

                <div className="portfolio__content">

                    <div className="content__item">
                        <h3>App Development Tools</h3>
                        <div className="underline"></div>
                        <p>Visual Studio Code (IDE)</p>
                        <p>Figma (Prototyping)</p>
                        <p>Github</p>
                    </div>

                    <div className="content__item">
                        <h3>Programming Language</h3>
                        <div className="underline"></div>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript (React js, Node js, Express js)</p>
                    </div>

                    <div className="content__item">
                        <h3>Database</h3>
                        <div className="underline"></div>
                        <p>MongoDB</p>
                    </div>

                    <div className="content__item">
                        <h3>SDLC Model</h3>
                        <div className="underline"></div>
                        <p>Agile</p>
                    </div>

                    <div className="content__item">
                        <h3>Packages/Libaries</h3>
                        <div className="underline"></div>
                        <p>WebRTC</p>
                        <p>Socket IO</p>
                        <p>React js</p>
                    </div>

                </div>
            </section>

            <section className='content'>
                <h2 className="content-title">Agile Methodology</h2>
                <p>We are a team of four members. During the development phase, we used agile methodology. We learned to use product backlog and sprint backlog. However, we din't carry out daily scrum meeting. We did held meeting regularly but once a week.</p>

                <p>The following images show our product backlog and sprint backlog.</p>

                <img src="../img/uwushoppingsite/productbacklog.PNG" alt="product backlog" className="portfolio__image"></img>

                <img src="../img/uwushoppingsite/sprintbacklog.PNG" alt="product backlog" className="portfolio__image"></img>

            </section>

            <div className='footer'>
                <ContactMe />
            </div>
        </div>
    )
}

export default UwuShoppingSite