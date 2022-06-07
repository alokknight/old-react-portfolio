import React from "react";
import {
  // faDev,
  faGithub,
  faLinkedin,
  faInstagram,
  // faMedium,
  faStackOverflow,
  faTwitter,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tittle from "../Components/Title";
import ImageSection from "../Components/ImageSection";

const HomePage = () => {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <header className="hero">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/alokknight/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
          </a>
          <a href="https://github.com/alokknight" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://twitter.com/aalokknight" className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
          <a href="https://hackerrank.com/alokknight" className="icon-holder">
            <FontAwesomeIcon icon={faHackerrank} className="icon hack" />
          </a>
          <a href="https://instagram.com/aalokknight" className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon insta" />
          </a>
          <a
            href="https://stackoverflow.com/users/19256695/alok-patel"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faStackOverflow} className="icon sk" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
