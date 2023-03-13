import React from "react";
import './ContactMe.css';
import { useInView } from 'react-intersection-observer'

const ContactMe = () => {

    const { ref: ref, inView: refIsVisible } = useInView();

    return (
        <div id="contact-me" className={`contact-me ${refIsVisible ? 'fadeIn' : ''}`} ref={ref}>
            <h1>Contact Me</h1>

            <div className='social-list'>

                <a class="social-list__link" href="https://github.com/victorkang516">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a class="social-list__link" href="https://www.linkedin.com/in/victor-kang-971823236/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

            </div>

            <ul class="contact-list">

                <li class="contact-list__item">
                    <div class="contact-list__info">
                        <i class="fa-solid fa-envelope"></i>
                        victorkang516@gmail.com
                    </div>
                </li>

                <li class="contact-list__item">
                    <div class="contact-list__info">
                        <i class="fa-solid fa-phone"></i>
                        010-8699011
                    </div>
                </li>

                <li class="contact-list__item">
                    <div class="contact-list__info">
                        <i class="fa-solid fa-location-dot"></i>
                        Bidor, Perak, Malaysia.
                    </div>
                </li>

            </ul>

        </div>
    )
}

export default ContactMe