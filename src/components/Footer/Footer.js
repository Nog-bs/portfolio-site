import React from "react";
import {
  FooterSection,
  FooterImg,
  FooterHead,
  FooterEmail,
  FooterContact,
  FooterGitHub,
  FooterLinkedIn,
  FooterInstagram,
  FooterDetailContainer,
  FooterCopyRight,
  FooterLink,
} from "./Footer.elements";

const Footer = ({ load }) => {
  return (
    <FooterSection load={load}>
      <FooterImg />
      <FooterHead>Feel free to connect!</FooterHead>
      <FooterEmail href="mailto:edrogonzales@gmail.com" blank="_blank">
        edrogonzales@gmail.com
      </FooterEmail>
      <FooterDetailContainer>
        <FooterCopyRight>© 2021 Edro Gonzales / Code by Edro</FooterCopyRight>
        <FooterContact>
          <FooterLink href="https://github.com/Nog-bs" target="_blank">
            <FooterGitHub />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/edrogonzales/"
            target="_blank"
          >
            <FooterLinkedIn />
          </FooterLink>
          <FooterLink href="https://www.instagram.com/nog.e/" target="_blank">
            <FooterInstagram />
          </FooterLink>
        </FooterContact>
      </FooterDetailContainer>
    </FooterSection>
  );
};

export default Footer;
