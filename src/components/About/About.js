import React from "react";
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

const About = ({ load, height }) => {
    return (
        <>
            <div id="about" />
            <AboutSection load={load}>
                <AboutHead height={height}>About</AboutHead>
                <AboutContainer>
                    <AboutText>
                        {load ? (
                            <Typical
                                loop={1}
                                wrapper="b"
                                steps={[
                                    "Hi! My name is Edro Gonzales and I am a Full Stack Developer from Vancouver, BC. My goal as a Developer is to create online experiences. Here are the technologies that I employ regularly:",
                                    5000,
                                ]}
                            />
                        ) : (
                            <Typical
                                loop={1}
                                wrapper="b"
                                steps={[
                                    "Thinking about what I want to say...",
                                    5000,
                                ]}
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
                <AboutButtonContainer>
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
