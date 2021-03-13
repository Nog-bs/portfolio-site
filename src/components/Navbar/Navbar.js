import React from "react";
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
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavMenuIcon />
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
