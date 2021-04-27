import React from "react";
import Fade from "react-reveal/Fade";
import {
  ShowcaseSection,
  ShowcaseHead,
  CardsContainer,
  Card,
  CardTextContainer,
  CardImg,
  CardHead,
  CardGitHub,
  CardLink,
  CardLinkTo,
  CardLinkContainer,
} from "./Showcase.elements";
import happyBonsai from "../../assets/images/happy-bonsai.JPG";
import amaySweets from "../../assets/images/amay-sweets.JPG";
import portfolio from "../../assets/images/portfolio-card.JPG";
import battleboard from '../../assets/images/battleboard.png';
import baka from '../../assets/images/baka-list.png';

const Showcase = ({ load, height }) => {
  return (
    <>
      <div id="portfolio" />
      <ShowcaseSection load={load}>
        <ShowcaseHead height={height}>Portfolio</ShowcaseHead>
        <CardsContainer>
          <Fade>
            <Card>
              <CardImg img={amaySweets} />
              <CardTextContainer>
                <CardHead>Amay Sweets</CardHead>
                <CardLinkContainer>
                  <CardLinkTo
                    href="https://github.com/Nog-bs/amay-sweets"
                    target="_blank"
                  >
                    <CardGitHub />
                  </CardLinkTo>
                  <CardLinkTo href="https://amay-sweets.com/" target="_blank">
                    <CardLink />
                  </CardLinkTo>
                </CardLinkContainer>
              </CardTextContainer>
            </Card>
            <Card>
              <CardImg img={happyBonsai} />
              <CardTextContainer>
                <CardHead>Happy Bonsai</CardHead>
                <CardLinkContainer>
                  <CardLinkTo
                    href="https://github.com/Nog-bs/happy-bonsai/"
                    target="_blank"
                  >
                    <CardGitHub />
                  </CardLinkTo>
                  <CardLinkTo
                    href="https://happy-bonsai.netlify.app/"
                    target="_blank"
                  >
                    <CardLink />
                  </CardLinkTo>
                </CardLinkContainer>
              </CardTextContainer>
            </Card>
            <Card>
              <CardImg img={portfolio} />
              <CardTextContainer>
                <CardHead>Portfolio</CardHead>
                <CardLinkContainer>
                  <CardLinkTo
                    href="https://github.com/Nog-bs/portfolio-site/"
                    target="_blank"
                  >
                    <CardGitHub />
                  </CardLinkTo>
                </CardLinkContainer>
              </CardTextContainer>
            </Card>
            <Card>
              <CardImg img={battleboard} />
              <CardTextContainer>
                <CardHead>Battleboard</CardHead>
                <CardLinkContainer>
                  <CardLinkTo
                    href="https://battle-board-dev.herokuapp.com/"
                    target="_blank"
                  >
                    <CardLink />
                  </CardLinkTo>
                </CardLinkContainer>
              </CardTextContainer>
            </Card>
            <Card>
              <CardImg img={baka} />
              <CardTextContainer>
                <CardHead>Baka List</CardHead>
                <CardLinkContainer>
                  <CardLinkTo
                    href="https://github.com/Nog-bs/anime-app/"
                    target="_blank"
                  >
                    <CardGitHub />
                  </CardLinkTo>
                  <CardLinkTo
                    href="https://bakalist.netlify.app/"
                    target="_blank"
                  >
                    <CardLink />
                  </CardLinkTo>
                </CardLinkContainer>
              </CardTextContainer>
            </Card>
          </Fade>
        </CardsContainer>
      </ShowcaseSection>
    </>
  );
};

export default Showcase;
