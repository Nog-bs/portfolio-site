// MODULES AND LIBRARIES
import React, { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
// ASSETS
import resume from "../assets/download/edro-resume.pdf";
import profile from "../assets/images/profile.jpg";
import firstProfile from "../assets/images/first-profile.png";
import firstDance from "../assets/images/first-dance.jpg";

// STYLING
import "../styles/pages/HomePage.scss";

const Header = () => {
  const [contact, setContact] = useState(false);
  const [picture, setPicture] = useState(profile);

  // EVENT HANDLERS
  const handleContact = () => setContact(!contact);
  const danceFirst = () => setPicture(firstDance);
  const profileFirst = () => setPicture(firstProfile);
  const resetPicture = () => setPicture(profile);
  return (
    <>
      <div className="home__head">
        <div className="home__head-title--first"></div>
        <h1 className="home__head-title">EDRO</h1>
        <h1 className="home__head-title">GONZALES</h1>
        {/* DESCRIPTION */}
        <div className="home__head-container">
          <div className="home__head-description">
            <h3
              onMouseEnter={danceFirst}
              onMouseLeave={resetPicture}
              className="home__head-dance"
            >
              Dancer,
            </h3>
            <h3
              onMouseEnter={profileFirst}
              onMouseLeave={resetPicture}
              className="home__head-develop"
            >
              Developer
            </h3>
          </div>
          <div className="home__head-description">
            <h4 className="home__head-dance">Dancer,</h4>
            <h4 className="home__head-develop">Developer</h4>
          </div>
          <div className="home__head-description">
            <h5 className="home__head-dance">Dancer,</h5>
            <h5 className="home__head-develop">Developer</h5>
          </div>
          <img
            src={picture}
            alt="profile picture"
            className="home__head-container-img"
          />
        </div>
        <button
          onClick={handleContact}
          to="/contact"
          className="home__head-button"
        >
          {contact ? "Hide" : "Contact"}
        </button>
        {contact && (
          <div className="home__contact">
            <a
              href="https://www.linkedin.com/in/edrogonzales/"
              target="_blank"
              className="home__contact-link"
            >
              <SiLinkedin className="home__contact-icon" />
            </a>
            <a
              target="_blank"
              href="https://github.com/Nog-bs"
              className="home__contact-link"
            >
              <VscGithub className="home__contact-icon" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nog.e/"
              className="home__contact-link"
            >
              <SiInstagram className="home__contact-icon" />
            </a>
            <a
              target="_blank"
              href="mailto:edrogonzales@gmail.com"
              className="home__contact-link"
            >
              <AiOutlineMail className="home__contact-icon" />
            </a>

            <a className="home__contact-download" href={resume} download>
              Download Resume
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
