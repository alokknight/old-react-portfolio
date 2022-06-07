import React from "react";
import ContactItem from "../Components/ContactItem";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Title";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d214.43460152961626!2d80.8909044!3d27.7131313!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6018fa7d3d%3A0x5918b00f884dd33d!2sNew%20Rahim%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1653436251128!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={email}
            text1={"alokknight@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Lucknow, UP"}
            text2={"India"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
