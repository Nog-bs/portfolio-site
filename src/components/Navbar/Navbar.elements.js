import styled from "styled-components";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { SiInstagram, SiGithub, SiLinkedin, SiMailDotRu } from "react-icons/si";
import modalImage from "../../assets/images/about.jpg";
import { Link } from "react-scroll";

export const Nav = styled.nav`
    position: fixed;
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
    z-index: 999;
    color: white;

    &:hover {
        transition: 0.5s all ease-in;
        border-radius: 100%;
        color: black;
        background-color: white;
    }
`;
export const NavMenuIcon = styled(HiOutlineMenuAlt4)`
    font-size: 2.5rem;
`;

// NAME
export const NavHeadContainer = styled.div`
    padding: 16px;
    z-index: 999;

    &:hover {
        cursor: pointer;
        transition: 0.5s ease-in all;
        color: black;
    }
`;
export const NavHead = styled(Link)`
    font-size: 1.5rem;
    font-weight: 700;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

// CONTACT
export const NavContact = styled.div`
    display: flex;
    visibility: hidden;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;

    @media (min-width: 768px) {
        visibility: visible;
    }
`;
export const NavLink = styled.a`
    color: white;
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

// MODAL
export const NavModal = styled.div`
    background-image: url(${modalImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    z-index: ${({ modal }) => (modal ? 999 : -999)};
    opacity: ${({ modal }) => (modal ? 1 : 0)};
    visibility: ${({ modal }) => (modal ? "visible" : "hidden")};
    transition: 0.5s all ease-in;
`;
export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    background: rgb(2, 18, 5);
    background: linear-gradient(
        90deg,
        rgba(2, 18, 5, 0.1) 0%,
        rgba(0, 16, 3, 1) 100%
    );
`;
export const ModalIcon = styled(RiCloseFill)`
    font-size: 2.5rem;
`;
export const ModalSelection = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ModalLink = styled(Link)`
    font-size: 2.25rem;
    margin: 24px;
    opacity: 0.6;
    transition: 0.3s ease-in all;

    &:hover {
        opacity: 1;
    }
`;
export const ModalContact = styled.div`
    display: flex;
`;
