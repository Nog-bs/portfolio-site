import styled from "styled-components";

export const AboutSection = styled.section`
  display: ${({ load }) => (load ? "flex" : "none")};
  width: 100%;
  background-color: #001003;
  color: white;
  padding: 42px 0;
  height: 100vh;
`;

export const AboutHead = styled.h2`
  margin-top: 42px;
  align-self: flex-start;
  padding-top: 12px;
  font-size: 4rem;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  height: 50%;
  background-color: white;
  color: black;
  order: 1;
`;

// ABOUT TEXT
export const AboutContainer = styled.div`
  font-size: 1.75rem;
  padding: 16px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 70vw;
  }
`;
export const AboutText = styled.p`
  margin-bottom: 42px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

// TECH CONTAINER
export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  animation: present 15s ease-in;

  @keyframes present {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const TechImage = styled.img`
  margin: 6px;
  height: 100px;
  width: 100px;

  @media (min-width: 768px) {
    margin: 12px;
    height: 175px;
    width: 175px;
  }
`;
