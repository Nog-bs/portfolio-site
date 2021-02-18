// MODULES AND LIBRARIES
import React, { useState } from "react";
import { Link } from "react-router-dom";

// STYLING
import "../styles/HomePage.scss";

const Header = () => {
  const [contact, setContact] = useState(false);

  const handleContact = () => setContact(!contact);
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
        <p onClick={handleContact} to="/contact" className="home__head-button">
          Contact
        </p>
        {contact && (
          <div className="home__contact">
            <h5 className="home__contact-head">
              Feel free to contact me through:
            </h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
