import React, { useState } from "react";
import Typical from "react-typical";
import {
    AboutSection,
    AboutHead,
    AboutContainer,
    AboutText,
    TechContainer,
    TechImage,
    AboutButtonContainer,
    AboutButtonHead,
    AboutButton,
} from "./About.elements";
import javascript from "../../assets/images/js.png";
import reactIcon from "../../assets/images/react.png";
import styledComponents from "../../assets/images/styled-components.png";
import sass from "../../assets/images/sass.png";
import git from "../../assets/images/git.png";
import ts from "../../assets/images/typescript.png";
import postgre from "../../assets/images/postgre-svg.svg";
import graphql from "../../assets/images/graphql.png";

const About = ({ load, height }) => {
    const [skip, setSkip] = useState(false);

    const handleSkip = () => setSkip(true);

    return (
        <>
            <div id="about" />
            <AboutSection load={load}>
                <AboutHead height={height}>About</AboutHead>
                <AboutContainer onClick={handleSkip}>
                    <AboutText>
                        {skip
                            ? "Hi! My name is Edro Gonzales and I am a Full Stack Developer from Vancouver, BC. My goal as a Developer currently is to learn a variety of technologies. Here are the technologies that I am currently learning:"
                            : load && (
                                  <Typical
                                      loop={1}
                                      steps={[
                                          "Hi! My name is Edro Gonzales and I am a Full Stack Developer from Vancouver, BC. My goal as a Developer currently is to learn a variety of technologies. Here are the stacks that I am currently learning:",
                                          20000,
                                      ]}
                                  />
                              )}
                    </AboutText>
                    <TechContainer skip={skip}>
                        <TechImage src={javascript} />
                        <TechImage src={reactIcon} />
                        <TechImage src={styledComponents} />
                        <TechImage src={sass} />
                        <TechImage src={git} />
                        <TechImage src={ts} />
                        <TechImage src={postgre} />
                        <TechImage src={graphql} />
                    </TechContainer>
                </AboutContainer>
                <AboutButtonContainer skip={skip}>
                    <AboutButtonHead>
                        For more of my stack check out my
                    </AboutButtonHead>
                    <AboutButton
                        href="https://resume.io/r/5cLy7fyZN"
                        target="_blank"
                    >
                        Resume
                    </AboutButton>
                </AboutButtonContainer>
            </AboutSection>
        </>
    );
};

export default About;
