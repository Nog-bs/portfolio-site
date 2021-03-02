// MODULES AND LIBRARIES
import React from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import { Header } from "../components";
// STYLE
import "../styles/DancingPage.scss";

const DancingPage = () => {
  return (
    <section className="dancing">
      <Link to="/" className="dancing__return">
        Go Back
      </Link>
      <Header />
      <div id="style-3" className="dancing__section">
        <h2 className="dancing__section-head">Choreographer & Battler</h2>
        <div className="dancing__section-experience">
          <h3 className="experience__head">
            Choreography Experience [2013 - Present]
          </h3>
          <ul className="experience__list">
            <li className="experience__list-item">
              [2016 - 2020] Co-Director of Epiphany (Now known as Emanate)
            </li>
            <li className="experience__list-item">
              [2018 - 2019] Rare Candies Choreographer
            </li>
            <li className="experience__list-item">
              [2016 - 2018] Oblivious Dance Company
            </li>
          </ul>
        </div>
        <div className="dancing__section-experience">
          <h3 className="experience__head">
            Street-Dance/Battle Experience [2018 - Present]
          </h3>
          <ul className="experience__list">
            <p className="experience__list-styles">
              Dance styles: Popping [2 years], Hip hop [2 years], Waacking [1
              year], House [1 year]
            </p>
            <li className="experience__list-item">
              [2018 - 2020] Founder of Level Up All-Styles Company
            </li>
          </ul>
        </div>
        <div className="dancing__section-projects">
          <h3 className="projects__head">Projects</h3>
          <div className="project__item">
            <h4 className="project__item-head">[2019] 1985 Choreography</h4>
            <p className="project__item-description">
              My first self choreographed video production
            </p>
            <iframe
              height="350px"
              width="100%"
              src="https://www.youtube.com/embed/s9WUAFoSSeI"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="project__item">
            <h4 className="project__item-head">[2017] Rare Candies</h4>
            <p className="project__item-description">
              Had the honour of joining this team for UBC's biggest talent
              showcase
            </p>
            <iframe
              height="350px"
              width="100%"
              src="https://www.youtube.com/embed/-g3C7o6yzF0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="project__item">
            <h4 className="project__item-head">[2016] Oblivious</h4>
            <p className="project__item-description">
              International Competition in San Francisco, California
            </p>
            <iframe
              height="350px"
              width="100%"
              src="https://www.youtube.com/embed/1y2O4QVNwfw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DancingPage;
