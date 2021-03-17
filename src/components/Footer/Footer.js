import React from "react";
import {
    FooterSection,
    FooterImg,
    FooterHead,
    FooterContent,
    FooterEmail,
    FooterContact,
    FooterGitHub,
    FooterLinkedIn,
    FooterInstagram,
    FooterDetailContainer,
    FooterCopyRight,
    FooterLink,
    FooterLocation,
    FooterVideoContainer,
} from "./Footer.elements";

const Footer = ({ load }) => {
    return (
        <FooterSection load={load}>
            <div id="contact" />
            <FooterImg />
            <FooterContent>
                <FooterHead>Feel free to connect!</FooterHead>
                <FooterVideoContainer>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/IsE0m_crjLc"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </FooterVideoContainer>
                <FooterContact>
                    <FooterLink
                        href="emailto:edrogonzales@gmail.com"
                        target="_blank"
                    >
                        <FooterEmail />
                    </FooterLink>
                    <FooterLink
                        href="https://github.com/Nog-bs"
                        target="_blank"
                    >
                        <FooterGitHub />
                    </FooterLink>
                    <FooterLink
                        href="https://www.linkedin.com/in/edrogonzales/"
                        target="_blank"
                    >
                        <FooterLinkedIn />
                    </FooterLink>
                    <FooterLink
                        href="https://www.instagram.com/nog.e/"
                        target="_blank"
                    >
                        <FooterInstagram />
                    </FooterLink>
                </FooterContact>
            </FooterContent>
            <FooterDetailContainer>
                <FooterLocation>Vancouver, BC</FooterLocation>
                <FooterCopyRight>
                    © 2021 Edro Gonzales / Code by Edro
                </FooterCopyRight>
            </FooterDetailContainer>
        </FooterSection>
    );
};

export default Footer;
