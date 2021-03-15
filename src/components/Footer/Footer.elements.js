import styled from "styled-components";
import footerImg from "../../assets/images/footer.jpg";
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";

export const FooterSection = styled.section`
  display: ${({ load }) => (load ? "flex" : "none")};
  color: white;
  height: 40vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  height: 40vh;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const FooterHead = styled.h3`
  font-size: 2rem;
`;

export const FooterEmail = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterGitHub = styled(SiGithub)`
  margin: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const FooterLinkedIn = styled(SiLinkedin)`
  margin: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const FooterInstagram = styled(SiInstagram)`
  margin: 8px;
  font-size: 1.5rem;

  &:hover {
    transition: 0.25s all ease-in;
    color: black;
    opacity: 0.8;
  }
`;
export const FooterLink = styled.a`
  color: white;
`;
export const FooterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterCopyRight = styled.p``;
