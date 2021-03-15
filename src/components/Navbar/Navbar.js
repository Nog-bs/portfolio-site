import React, { useState } from "react";
import {
  Nav,
  NavMenu,
  NavMenuIcon,
  NavHeadContainer,
  NavHead,
  NavContact,
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
        <NavHead>Dancer, Developer</NavHead>
      </NavHeadContainer>
      <NavContact>
        <NavLinkedIn />
        <NavGitHub />
        <NavEmail />
        <NavInstagram />
      </NavContact>
    </Nav>
  );
};

export default Navbar;
