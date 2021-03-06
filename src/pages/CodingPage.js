// MODULES AND LIBRARIES
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
// COMPONENTS
import { Header } from "../components";
// STYLE
import "../styles/pages/CodingPage.scss";
// ASSETS
import resume from "../assets/download/edro-resume.pdf";
import websitePreview from "../assets/videos/happy-bonsai-trim.mp4";
import amayPreview from "../assets/videos/amay-sweets-trim.mp4";

const CodingPage = () => {
  const websiteRef = useRef();
  const amayRef = useRef();

  const dateStart = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDate = new Date(2020, 7, 19);
    const presentDate = Date.now();

    return Math.floor((presentDate - startDate) / oneDay);
  };
  return (
    <section className="coding">
      <Link to="/" className="coding__return">
        <p className="coding__return-icon-text">Go Back</p>
      </Link>
      <div id="style-3" className="coding__section">
        <h2 className="coding__section-head">Full Stack Developer</h2>
        <div className="coding__section-experience">
          <h3 className="experience__head">About</h3>
          <ul className="experience__list">
            <li className="experience__list-item">
              Greetings! My name is Edro Gonzales and I started my coding
              journey {dateStart()} days ago. I am a Full Stack Developer from
              Vancouver, BC that has a background in sales and business, whilst
              also having maintained a long dance career. I have creative
              passions which lead me to developing a Full Stack skillset as I
              love experimenting with technologies. My goal as a developer is to
              learn as much as I can in the next few years whist also developing
              impactful experiences for people, just as I have done in my
              previous domains.
            </li>
          </ul>
        </div>
        <div className="coding__section-projects">
          <h3 className="projects__head">Deployed Projects</h3>
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
        <a className="coding__download" href={resume} download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default CodingPage;
