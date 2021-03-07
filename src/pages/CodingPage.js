// MODULES AND LIBRARIES
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
// COMPONENTS

// STYLE
import "../styles/pages/CodingPage.scss";
// ASSETS
import resume from "../assets/download/edro-resume.pdf";
import { SliderData } from "../data/SliderData";

const CodingPage = () => {
  // STATES & VARIABLES
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  // VIDEO REFS
  const websiteRef = useRef();
  const amayRef = useRef();

  // IMAGESLIDER LOGIC
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === length ? 0 : current - 1);

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
          <a className="coding__head-download" href={resume} download>
            Download Resume
          </a>
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
        <div className="coding__project">
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
                    {/* <p className="project__description">{slide.description}</p> */}
                    <div className="project__video">
                      <HoverVideoPlayer
                        videoSrc={slide.video}
                        loop={true}
                        style={{
                          width: "75%",
                        }}
                      />
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
      </div>
    </section>
  );
};

export default CodingPage;
