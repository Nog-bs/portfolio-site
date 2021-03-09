// MODULES AND LIBRARIES
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaArrowRight,
} from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
// COMPONENTS

// STYLE
import "../styles/pages/CodingPage.scss";
// ASSETS
import resume from "../assets/download/edro-resume.pdf";
import { SliderData } from "../data/SliderData";
import javascript from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import styledComponents from "../assets/images/styled-components.png";
import sass from "../assets/images/sass.png";
import git from "../assets/images/git.png";

const CodingPage = () => {
  // STATES & VARIABLES
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  // VIDEO REFS
  const websiteRef = useRef();
  const amayRef = useRef();
  // IMAGESLIDER LOGIC
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current < 0 || current === length ? 0 : current - 1);
  console.log(current);

  // DATE TIME FUNCTION
  const dateStart = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(2020, 7, 19);
    const presentDate = Date.now();

    return Math.floor((presentDate - startDate) / oneDay);
  };
  return (
    <section className="coding">
      <Link to="/" className="coding__return">
        <FcHome className="coding__return-icon" />
      </Link>
      <Link to="/dancing" className="coding__dance">
        <FaArrowRight className="coding__return-icon" />
      </Link>
      <div id="style-3" className="coding__section">
        <div className="coding__head">
          <h2 className="coding__head-title">Full Stack Developer</h2>
        </div>
        <div className="coding__about">
          <h3 className="coding__about-head">About</h3>
          <ul className="coding__about-list">
            <p className="coding__about-list-item">
              Hello! I am Edro Gonzales and I started my coding journey{" "}
              {dateStart()} days ago. I am a Full Stack Developer from
              Vancouver, BC. I have creative passions which lead me to
              developing a Full Stack skillset as I love experimenting with
              technologies. My goal as a developer is to learn as much as I can
              in the next few years whist also developing impactful experiences
              for people.
            </p>
          </ul>
        </div>
        <div className="coding__skill">
          <h3 className="coding__skill-head">Technical Toolkit</h3>
          <ul className="coding__skill-kit">
            <img
              alt="javascript"
              src={javascript}
              className="coding__skill-kit-item"
            />
            <img
              alt="react"
              src={reactIcon}
              className="coding__skill-kit-item"
            />
            <img
              alt="styled components"
              src={styledComponents}
              className="coding__skill-kit-item"
            />
            <img alt="sass" src={sass} className="coding__skill-kit-item" />
            <img alt="git" src={git} className="coding__skill-kit-item" />
          </ul>
          <div className="coding__skill-note">
            <p className="coding__skill-note-text">
              To see the rest of my toolkit
            </p>
            <button className="coding__skill-note-btn">Download Resume</button>
          </div>
        </div>
        <div className="coding__project">
          <h3 className="coding__project-head">Portfolio</h3>
          <FaArrowAltCircleLeft className="project__left" onClick={prevSlide} />
          <FaArrowAltCircleRight
            className="project__right"
            onClick={nextSlide}
          />
          {SliderData?.map((slide, index) => {
            return (
              <div
                className={index === current ? "project active" : "project"}
                key={index}
              >
                {index === current && (
                  <>
                    <h4 className="project__head">{slide.title}</h4>
                    <p className="project__description">{slide.description}</p>
                    <div className="project__video">
                      <HoverVideoPlayer
                        videoSrc={slide.video}
                        loop={true}
                        style={{
                          width: "75%",
                        }}
                      />
                      <a
                        className="project__video-link"
                        target="_blank"
                        href={slide.github}
                      >
                        <VscGithub className="project__video-github" />
                      </a>
                    </div>
                    <a
                      className="project__link"
                      target="_blank"
                      href={slide.link}
                    >
                      Go to site
                    </a>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <footer className="coding__footer">
          <div className="coding__footer-info">
            <a
              href="https://www.linkedin.com/in/edrogonzales/"
              target="_blank"
              className="coding__footer-link"
            >
              <SiLinkedin className="coding__footer-icon" />
            </a>
            <a
              target="_blank"
              href="https://github.com/Nog-bs"
              className="coding__footer-link"
            >
              <VscGithub className="coding__footer-icon" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nog.e/"
              className="coding__footer-link"
            >
              <SiInstagram className="coding__footer-icon" />
            </a>
            <a
              target="_blank"
              href="mailto:edrogonzales@gmail.com"
              className="coding__footer-link"
            >
              <AiOutlineMail className="coding__footer-icon" />
            </a>

            <a className="coding__footer-download" href={resume} download>
              Download Resume
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CodingPage;
