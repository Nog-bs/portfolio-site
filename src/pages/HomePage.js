// MODULE
import React, { useRef } from "react";
// STYLE
import "./HomePage.scss";
// LIBRARY
import HoverVideoPlayer from "react-hover-video-player";
// ASSET
import videoPreview from "../assets/videos/homepage-preview.mp4";

const HomePage = () => {
  const videoRef = useRef();
  return (
    <section className="home">
      <div className="home__head">
        <h1 className="home__head-title">Edro Gonzales</h1>
        <h2 className="home__head-description">
          <span className="home__head-dance">Dancer</span>,{" "}
          <span className="home__head-develop">Developer</span>
        </h2>
        <h3 className="home__head-description-second">Dancer, Developer</h3>
        <h4 className="home__head-description-third">Dancer, Developer</h4>
        <h5 className="home__head-description-fourth">Dancer, Developer</h5>
        <button className="home__head-button">Contact</button>
      </div>
      <div className="home__navigation">
        <div ref={videoRef} className="home__navigation-dancing">
          <div className="home__navigation-dancing-video">
            <HoverVideoPlayer
              videoSrc={videoPreview}
              hoverTargetRef={videoRef}
              loop={true}
              videoClassName="player-video"
              videoStyle={{ height: "100%" }}
            />
          </div>
          <h2>Dancing</h2>
        </div>

        <div className="home__navigation-coding">
          <h2>Coding</h2>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
