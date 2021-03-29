import styled from "styled-components";

export const AboutSection = styled.section`
    display: ${({ load }) => (load ? "flex" : "none")};
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #001003;
    color: white;
    padding: 42px 0;
    height: 100vh;
    position: relative;
`;

export const AboutHead = styled.h2`
    margin-top: 42px;
    padding-top: 12px;
    font-size: 2rem;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    height: 50%;
    background-color: white;
    color: black;
    order: 1;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

// ABOUT TEXT
export const AboutContainer = styled.div`
    font-size: 1.75rem;
    padding: 16px;
    margin: 0 auto;
    height: 80%;

    @media (min-width: 768px) {
        width: 70vw;
    }
`;
export const AboutText = styled.p`
    font-size: 1.5rem;
    margin: 42px 0;

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
    ${({ skip }) => !skip && "animation: present 15s ease-in;"}

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
    height: 80px;
    width: 80px;

    @media (min-width: 768px) {
        margin: 12px;
        height: 100px;
        width: 100px;
    }
`;
// RESUME BUTTON
export const AboutButtonContainer = styled.div`
    position: absolute;
    bottom: 12px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 400;

    ${({ skip }) => !skip && "animation: present 16s ease-in;"}

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
export const AboutButtonHead = styled.h3``;
export const AboutButton = styled.a`
    margin-left: 8px;
    background-color: #b0352d;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 16px;
    font-size: 1.25rem;
    outline: none;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        transition: 0.3s all ease-in;
        color: white;
        background-color: #001003;
    }
`;
