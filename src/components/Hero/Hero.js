import React from "react";
import Typical from "react-typical";
// STYLED COMPONENTS
import {
    HeroSection,
    HeroImage,
    TextContainer,
    HeroText,
    HeroButton,
    InfoContainer,
    InfoLocation,
    InfoCopyright,
} from "./Hero.elements";

const Hero = ({ load, handleSkip }) => {
    return (
        <>
            <div id="home" />
            <HeroImage load={load} />
            <HeroSection load={load}>
                <TextContainer>
                    <HeroText>
                        {load ? (
                            <Typical
                                loop={1}
                                wrapper="b"
                                steps={["Edro Gonzales.", 1000]}
                            />
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
                {load ? (
                    <HeroButton
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                    >
                        Start
                    </HeroButton>
                ) : (
                    <HeroButton onClick={handleSkip}>Skip</HeroButton>
                )}
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
