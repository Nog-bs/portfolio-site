import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { BsLink } from "react-icons/bs";

export const ShowcaseSection = styled.section`
  display: ${({ load }) => (load ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #001003;
  color: white;
  padding: 42px 0;
`;

export const ShowcaseHead = styled.h2`
  padding-top: 12px;
  font-size: 2rem;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  height: 50%;
  background-color: white;
  color: black;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

// CARDS STYLING
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 100%;
`;
export const Card = styled.div`
  margin: 6px;
  height: 30vh;
  width: 35vw;
  position: relative;
  @media (min-width: 768px) {
    margin: 12px;
    width: 350px;
    height: 500px;
  }
`;
export const CardLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  opacity: 0.5;
`;
export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(2, 18, 5);
  background: linear-gradient(
    180deg,
    rgba(2, 18, 5, 0.1) 0%,
    rgba(0, 16, 3, 1) 100%
  );

  &:hover {
    transition: 0.3s all ease-in;
    background: linear-gradient(
      180deg,
      rgba(2, 18, 5, 0.1) 0%,
      rgba(0, 16, 3, 1) 75%
    );
    ${CardLinkContainer} {
      transition: 0.5s all ease-in;
      opacity: 1;
    }
  }
`;
export const CardHead = styled.h3`
  margin: 12px;
  font-size: 1.75rem;
`;
export const CardImg = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  position: absolute;
  height: 100%;
  width: 100%;
`;
export const CardGitHub = styled(SiGithub)`
  width: 50px;
  height: 50px;

  &:hover {
    transition: 0.1s ease-in all;
    opacity: 0.9;
    transform: scale(1.1);
  }
`;
export const CardLink = styled(BsLink)`
  width: 50px;
  height: 50px;

  &:hover {
    transition: 0.1s ease-in all;
    opacity: 0.9;
    transform: scale(1.1);
  }
`;
export const CardLinkTo = styled.a`
  color: white;
`;
