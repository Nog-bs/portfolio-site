import React from "react";
import Typical from "react-typical";
// STYLED COMPONENTS
import {
  HeroSection,
  HeroImage,
  TextContainer,
  HeroText,
  InfoContainer,
  InfoLocation,
  InfoCopyright,
} from "./Hero.elements";

const Hero = ({ load }) => {
  return (
    <>
      <HeroImage />
      <HeroSection>
        <TextContainer>
          <HeroText>
            {load ? (
              <Typical loop={1} wrapper="b" steps={["Edro Gonzales.", 1000]} />
            ) : (
              <Typical
                loop={1}
                wrapper="b"
                steps={[
                  "Welcome",
                  1000,
                  "My name is Edro.",
                  1000,
                  "I'm a Dancer 🕺.",
                  1000,
                  "I'm a Developer 💻.",
                  1000,
                ]}
              />
            )}
          </HeroText>
        </TextContainer>
        <InfoContainer>
          <InfoLocation>Vancouver, BC</InfoLocation>
          <InfoCopyright>
            © 2021 Edro Gonzales / Coded in React.js
          </InfoCopyright>
        </InfoContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
