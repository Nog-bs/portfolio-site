import styled from "styled-components";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { SiInstagram, SiGithub, SiLinkedin, SiMailDotRu } from "react-icons/si";

export const Nav = styled.nav`
  position: absolute;
  /* position: sticky;
  top: 0; */
  z-index: 2;
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// MENU
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 6px;

  &:hover {
    transition: 0.5s all ease-in;
    color: black;
    background-color: white;
    border-radius: 100%;
  }
`;
export const NavMenuIcon = styled(HiOutlineMenuAlt4)`
  font-size: 2.5rem;
`;

// NAME
export const NavHeadContainer = styled.div`
  padding: 16px;
`;
export const NavHead = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

// CONTACT
export const NavContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const NavGitHub = styled(SiGithub)`
  margin-bottom: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const NavLinkedIn = styled(SiLinkedin)`
  margin-bottom: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const NavEmail = styled(SiMailDotRu)`
  margin-bottom: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const NavInstagram = styled(SiInstagram)`
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
