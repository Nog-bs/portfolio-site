import React from "react";
import {
  ShowcaseSection,
  ShowcaseHead,
  CardsContainer,
  Card,
} from "./Showcase.elements";

const Showcase = ({ load, height }) => {
  return (
    <ShowcaseSection load={load}>
      <ShowcaseHead height={height}>Portfolio</ShowcaseHead>
      <CardsContainer>
        <Card>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
        </Card>
        <Card>CARD 2</Card>
        <Card>CARD 3</Card>
      </CardsContainer>
    </ShowcaseSection>
  );
};

export default Showcase;
