import styled from "styled-components";

export const ShowcaseSection = styled.section`
  display: ${({ load }) => (load ? "flex" : "none")};
  align-items: center;
  background-color: #001003;
  height: 100vh;
  width: 100%;
  color: white;
  padding: 42px 0;
`;

export const ShowcaseHead = styled.h2`
  align-self: flex-start;
  padding-top: 12px;
  font-size: 4rem;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  height: ${({ height }) => `${height}%`};
  background-color: white;
  color: black;
`;

// CARDS STYLING
export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  padding: 16px;
  margin: 6px;
  background-color: black;
  height: 40vh;
  width: 30vw;
`;
