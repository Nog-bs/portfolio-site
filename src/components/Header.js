// MODULES AND LIBRARIES
import React from "react";
import { Link } from "react-router-dom";
// STYLING
import "../styles/HomePage.scss";

const Header = () => {
  return (
    <>
      <div className="home__head">
        <h1 className="home__head-title">Edro Gonzales</h1>
        {/* DESCRIPTION */}
        <div className="home__head-description">
          <h2 className="home__head-dance">Dancer,</h2>
          <h2 className="home__head-develop">Developer</h2>
        </div>
        {/* DESCRIPTION */}
        {/* CASCADING */}
        <div className="home__head-description">
          <h3 className="home__head-dance">Dancer,</h3>
          <h3 className="home__head-develop">Developer</h3>
        </div>
        <div className="home__head-description">
          <h4 className="home__head-dance">Dancer,</h4>
          <h4 className="home__head-develop">Developer</h4>
        </div>
        <div className="home__head-description">
          <h5 className="home__head-dance">Dancer,</h5>
          <h5 className="home__head-develop">Developer</h5>
        </div>
        <Link to="/contact" className="home__head-button">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
