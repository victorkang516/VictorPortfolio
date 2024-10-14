import React from "react";
import ContactMe from "../../features/contact-me/ContactMe";

const ParkPerak = () => {
  return (
    <div className="pf">
      <h1 className="portfolio__title">Park Perak Redesign</h1>

      <section className="portfolio-intro" id="portfolio-intro">
        <h2 className="portfolio__keyword">UIUX | Figma | Flutter & Dart </h2>
        <h3>
          Redesign Park@Perak App for practice purposes. Prototyping with Figma.
        </h3>
        <a
          href="https://www.figma.com/proto/UdtW4WEoRlR0GRKS6yYI83/Parking-App?node-id=7-3&node-type=canvas&t=JIwKJ6iBOxQ03U3S-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A3"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <div className="text-center border border-teal-700 hover:bg-teal-100 text-teal-700 font-semibold text-sm p-2 px-8 rounded-full mb-2 w-fit">
            Figma Prototype
          </div>
        </a>
      </section>

      <section className="content">
        <h2 className="content-title">Overview</h2>

        <p>
          Park@Perak is an app for Malaysia Citizen to pay for parking for Perak
          State. You can find this app on GooglePlay and AppleStore.{" "}
        </p>

        <h2 className="content-title">Original UI Design</h2>

        <p>The actual app UI of ParkPerak application.</p>

        <div className="portfolio__gallery">
          <img src="./img/parkperak/OLogin.jpg"></img>
          <img src="./img/parkperak/OHome.jpg"></img>
          <img src="img/parkperak/OParking.jpg"></img>
          <img src="img/parkperak/OParkingStatus.jpg"></img>
          <img src="img/parkperak/OPBT.jpg"></img>
          <img src="img/parkperak/OVehicle.jpg"></img>
        </div>

        <h2 className="content-title">Redesign UI in Figma</h2>

        <p>Redesign with better UIUX while keep the original branding.</p>

        <div className="portfolio__gallery">
          <img src="./img/parkperak/MyLoginPhone.png"></img>
          <img src="img/parkperak/MyHome.png"></img>
          <img src="img/parkperak/MyParking.png"></img>
          <img src="img/parkperak/MyParkingStatus.png"></img>
          <img src="img/parkperak/MyPBT.png"></img>
          <img src="img/parkperak/MyVehicle2.png"></img>
        </div>
      </section>

      <div className="footer">
        <ContactMe />
      </div>
    </div>
  );
};

export default ParkPerak;
