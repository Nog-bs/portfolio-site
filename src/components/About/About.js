import React from "react";
import Typical from "react-typical";
import {
  AboutSection,
  AboutHead,
  AboutContainer,
  AboutText,
  TechContainer,
  TechImage,
} from "./About.elements";
import javascript from "../../assets/images/js.png";
import reactIcon from "../../assets/images/react.png";
import styledComponents from "../../assets/images/styled-components.png";
import sass from "../../assets/images/sass.png";
import git from "../../assets/images/git.png";

const About = ({ load, height }) => {
  return (
    <AboutSection load={load}>
      <AboutHead height={height}>About</AboutHead>
      <AboutContainer>
        <AboutText>
          {load ? (
            <Typical
              loop={1}
              wrapper="b"
              steps={[
                "Hi! My name is Edro Gonzales and I am a Full Stack Developer from Vancouver, BC. My goal as a Developer is to create meaningful experiences, here are the technologies that I employ regularly.",
                5000,
              ]}
            />
          ) : (
            <Typical
              loop={1}
              wrapper="b"
              steps={["Thinking about what I want to say...", 5000]}
            />
          )}
        </AboutText>
        <TechContainer>
          <TechImage src={javascript} />
          <TechImage src={reactIcon} />
          <TechImage src={styledComponents} />
          <TechImage src={sass} />
          <TechImage src={git} />
        </TechContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
