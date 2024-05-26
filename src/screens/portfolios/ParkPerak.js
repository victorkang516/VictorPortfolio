import React from 'react'
import ContactMe from '../../features/contact-me/ContactMe'

const ParkPerak = () => {
  return (
    <div className='pf'>

            <h1 className="portfolio__title">Park Perak Redesign</h1>

            <section className="portfolio-intro" id="portfolio-intro">

                <h2 className="portfolio__keyword">UIUX | Figma | Flutter & Dart </h2>
                <h3>Redesign Park@Perak App for practice purposes. Prototyping with Figma and build the app with Flutter & Dart.</h3>

                <div className="portfolio__link">

                    <a className="portfollio__button" href="https://github.com/WongYewKeong/EasyReport">
                        <i className="fa-brands fa-github"></i>
                        View Github Project
                    </a>

                </div>

            </section>

            <div className="portfolio-detail">

                <div className="portfolio-detail__item">
                    <h3>Date</h3>
                    <div className="underline"></div>
                    <p>Jan 2023 - Present</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Role</h3>
                    <div className="underline"></div>
                    <p>-</p>
                </div>

                <div className="portfolio-detail__item">
                    <h3>Type</h3>
                    <div className="underline"></div>
                    <p>Mobile Development</p>
                </div>

            </div>

            <img src="./img/parkperakthumbnail.png" alt="uwushoppingsite" className="portfolio__image"></img>

            <section className='content'>
                <h2 className="content-title">Overview</h2>

                <p>Park@Perak is an app for Malaysia Citizen to pay for parking in Perak State. You can find this app on GooglePlay and AppleStore. </p>

                <h2 className="content-title">Redesign UI in Figma</h2>

                <p>The main focus of this redesign is to improve on the UIUX of authentication and pay for parking feature. Here's are my redesign UI.</p>

                <div className="portfolio__gallery">
                    <img src="./img/parkperak/MyLoginEmail.png"></img>
                    <img src="./img/parkperak/MyLoginPhone.png"></img>
                    <img src="img/parkperak/MyRegisterEmail1.png"></img>
                    <img src="img/parkperak/MyRegisterEmail2.png"></img>
                    <img src="img/parkperak/MyRegisterEmail3.png"></img>
                    <img src="img/parkperak/MyHome.png"></img>
                    <img src="img/parkperak/MyParking.png"></img>
                    <img src="img/parkperak/MyPBT.png"></img>
                    <img src="img/parkperak/MyVehicle2.png"></img>
                    <img src="img/parkperak/MyParkingStatus.png"></img>
                </div>

                <p>Flutter & Dart Development is still in progress...</p>

            </section>

            <section className='content'>
                <h2 className="content-title">Technologies</h2>

                <div className="portfolio__content">

                    <div className="content__item">
                        <h3>App Development Tools</h3>
                        <div className="underline"></div>
                        <p>Android Studio (IDE)</p>
                        <p>Flutter</p>
                        <p>Github</p>
                    </div>

                    <div className="content__item">
                        <h3>Programming Language</h3>
                        <div className="underline"></div>
                        <p>Dart</p>
                    </div>

                    <div className="content__item">
                        <h3>Database</h3>
                        <div className="underline"></div>
                        <p>Firebase</p>
                    </div>

                </div>
            </section>

            <div className='footer'>
                <ContactMe />
            </div>
        </div>
  )
}

export default ParkPerak