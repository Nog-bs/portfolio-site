import styled from "styled-components";
import footerImg from "../../assets/images/footer.jpg";
import { SiInstagram, SiGithub, SiLinkedin, SiMailDotRu } from "react-icons/si";

export const FooterSection = styled.section`
    display: ${({ load }) => (load ? "flex" : "none")};
    color: white;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    background: rgb(2, 18, 5);
    background: linear-gradient(
        0deg,
        rgba(2, 18, 5, 0.1) 0%,
        rgba(0, 16, 3, 1) 100%
    );
`;
export const FooterImg = styled.div`
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: -1;
`;

// MIDDLE SECTION
export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 112px;
`;
export const FooterHead = styled.h3`
    font-size: 1rem;
    border-bottom: white 1px solid;
    text-align: center;
    width: 80%;
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;
export const FooterContact = styled.div`
    display: flex;
    justify-content: center;
`;
export const FooterEmail = styled(SiMailDotRu)`
    margin: 6px;
    font-size: 2rem;

    @media (min-width: 768px) {
        margin: 16px;
        font-size: 3rem;
    }

    &:hover {
        transition: 0.25s all ease-in;
        color: black;
        opacity: 0.8;
    }
`;
export const FooterGitHub = styled(SiGithub)`
    margin: 6px;
    font-size: 2rem;

    @media (min-width: 768px) {
        margin: 16px;
        font-size: 3rem;
    }

    &:hover {
        transition: 0.25s all ease-in;
        color: black;
        opacity: 0.8;
    }
`;
export const FooterLinkedIn = styled(SiLinkedin)`
    margin: 6px;
    font-size: 2rem;

    @media (min-width: 768px) {
        margin: 16px;
        font-size: 3rem;
    }
    display: flex;

    &:hover {
        transition: 0.25s all ease-in;
        color: black;
        opacity: 0.8;
    }
`;
export const FooterInstagram = styled(SiInstagram)`
    margin: 6px;
    font-size: 2rem;

    @media (min-width: 768px) {
        margin: 16px;
        font-size: 3rem;
    }

    &:hover {
        transition: 0.25s all ease-in;
        color: black;
        opacity: 0.8;
    }
`;
export const FooterLink = styled.a`
    color: white;
`;
export const FooterVideoContainer = styled.div`
    height: 50vh;
    width: 80vw;
    margin-bottom: 18px;

    @media (min-width: 768px) {
        height: 60vh;
        width: 50vw;
    }
`;

// BOTTOM SECTION
export const FooterDetailContainer = styled.div`
    padding: 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 0.75rem;
`;
export const FooterCopyRight = styled.p``;
export const FooterLocation = styled.p``;
