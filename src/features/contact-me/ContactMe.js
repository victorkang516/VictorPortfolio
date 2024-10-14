import React from "react";
import "./ContactMe.css";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const { ref, inView: refIsVisible } = useInView();

  return (
    <div
      id="contact-me"
      className={`contact-me ${refIsVisible ? "fadeIn" : ""}`}
      ref={ref}
    >
      <h1>Contact Me</h1>

      <div className="social-list">
        <a
          className="social-list__link"
          href="https://github.com/victorkang516"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          className="social-list__link"
          href="https://www.linkedin.com/in/victor-kang-971823236/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <ul className="contact-list">
        <li className="contact-list__item">
          <div className="contact-list__info">
            <i className="fa-solid fa-envelope"></i>
            victorkang516@gmail.com
          </div>
        </li>

        <li className="contact-list__item">
          <div className="contact-list__info">
            <i className="fa-solid fa-phone"></i>
            010-8699011
          </div>
        </li>

        <li className="contact-list__item">
          <div className="contact-list__info">
            <i className="fa-solid fa-location-dot"></i>
            Federal Territory of Kuala Lumpur, Malaysia.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
