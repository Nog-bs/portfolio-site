// MODULE & LIBRARIES
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
// COMPONENTS
import { Header } from "../components";
// STYLE
import "../styles/HomePage.scss";
// ASSET
import videoPreview from "../assets/videos/homepage-preview.mp4";
import websitePreview from "../assets/videos/happy-bonsai-trim.mp4";

const HomePage = () => {
  const videoRef = useRef();
  const websiteRef = useRef();
  return (
    <section className="home">
      <Header />
      {/* CASCADING */}
      <div className="home__navigation">
        <Link to="/dancing" ref={videoRef} className="home__navigation-dancing">
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
        </Link>
        <Link to="/coding" ref={websiteRef} className="home__navigation-coding">
          <div className="home__navigation-coding-video">
            <HoverVideoPlayer
              videoSrc={websitePreview}
              hoverTargetRef={websiteRef}
              loop={true}
              videoClassName="player-video"
              videoStyle={{ height: "100%" }}
            />
          </div>
          <h2>Coding</h2>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
