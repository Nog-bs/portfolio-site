// MODULES AND LIBRARIES
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
// COMPONENTS
import { Header } from "../components";
// STYLE
import "../styles/CodingPage.scss";
// ASSETS
import resume from "../assets/download/edro-resume.pdf";
import websitePreview from "../assets/videos/happy-bonsai-trim.mp4";
import amayPreview from "../assets/videos/amay-sweets-trim.mp4";

const CodingPage = () => {
  const websiteRef = useRef();
  const amayRef = useRef();
  return (
    <section className="coding">
      <Link to="/" className="coding__return">
        <p className="coding__return-icon-text">Go Back</p>
      </Link>
      <Header />
      <div id="style-3" className="coding__section">
        <h2 className="coding__section-head">Full Stack Developer</h2>
        <a className="coding__download" href={resume} download>
          Download Resume
        </a>
        <div className="coding__section-experience">
          <h3 className="experience__head">Education</h3>
          <ul className="experience__list">
            <li className="experience__list-item">
              [Nov 2020 - Feb 2021] BrainStation | Web Development Diploma
            </li>
            <li className="experience__list-item">
              [Sept 2018 – Aug 2020] Simon Fraser University | Bachelor of
              Commerce
            </li>
          </ul>
        </div>
        <div className="coding__section-projects">
          <h3 className="projects__head">Projects</h3>
          <div className="project__item">
            <h4 className="project__item-head">[Jan 2021] Happy Bonsai</h4>
            <p className="project__item-description">
              Full Stack application utilizing: Firebase Authentication &
              Realtime Database, Axios, Google Books API, Three.js,
              React-Three-Fiber
            </p>
            <div ref={websiteRef} className="project__item-video">
              <HoverVideoPlayer
                videoSrc={websitePreview}
                hoverTargetRef={websiteRef}
                loop={true}
                videoClassName="player-video"
                videoStyle={{ height: "100%" }}
              />
            </div>
            <a
              className="project__item-link"
              target="_blank"
              href="https://happy-bonsai.netlify.app/"
            >
              Go to site
            </a>
          </div>
          <div className="project__item">
            <h4 className="project__item-head">[Dec 2020] Amay Sweets</h4>
            <p className="project__item-description">
              Gallery website to display local business products
            </p>
            <div ref={amayRef} className="project__item-video">
              <HoverVideoPlayer
                videoSrc={amayPreview}
                hoverTargetRef={amayRef}
                loop={true}
                videoClassName="player-video"
                videoStyle={{ height: "100%" }}
              />
            </div>
            <a
              className="project__item-link"
              target="_blank"
              href="https://amay-sweets.com/"
            >
              Go to site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingPage;
