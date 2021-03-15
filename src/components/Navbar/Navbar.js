import React, { useState } from "react";
import {
  Nav,
  NavMenu,
  NavMenuIcon,
  NavHeadContainer,
  NavHead,
  NavContact,
  NavLink,
  NavLinkedIn,
  NavGitHub,
  NavEmail,
  NavInstagram,
  NavModal,
  ModalContainer,
  ModalIcon,
  ModalSelection,
  ModalLink,
  ModalContact,
} from "./Navbar.elements";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal(!modal);
  return (
    <Nav>
      <NavModal modal={modal}>
        <ModalContainer>
          <ModalSelection>
            <ModalLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleModal}
            >
              Home
            </ModalLink>
            <ModalLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleModal}
            >
              About
            </ModalLink>
            <ModalLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              onClick={handleModal}
            >
              Portfolio
            </ModalLink>
          </ModalSelection>
          <ModalContact>
            <NavLinkedIn />
            <NavGitHub />
            <NavEmail />
            <NavInstagram />
          </ModalContact>
        </ModalContainer>
      </NavModal>
      <NavMenu>
        {modal ? (
          <ModalIcon onClick={handleModal} />
        ) : (
          <NavMenuIcon onClick={handleModal} />
        )}
      </NavMenu>
      <NavHeadContainer>
        <NavHead to="home" smooth={true} duration={500} spy={true} exact="true">
          Dancer, Developer
        </NavHead>
      </NavHeadContainer>
      <NavContact>
        <NavLink
          href="https://www.linkedin.com/in/edrogonzales/"
          target="_blank"
        >
          <NavLinkedIn />
        </NavLink>
        <NavLink href="https://github.com/Nog-bs" target="_blank">
          <NavGitHub />
        </NavLink>
        <NavLink href="mailto:edrogonzales@gmail.com" target="_blank">
          <NavEmail />
        </NavLink>
        <NavLink href="https://www.instagram.com/nog.e/" target="_blank">
          <NavInstagram />
        </NavLink>
      </NavContact>
    </Nav>
  );
};

export default Navbar;
