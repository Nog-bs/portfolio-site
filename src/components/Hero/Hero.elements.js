import styled from "styled-components";
import hero from "../../assets/images/hero.jpg";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: showoff 18s ease-in;
  background: rgb(2, 18, 5);
  background: linear-gradient(
    180deg,
    rgba(2, 18, 5, 0.1) 0%,
    rgba(0, 16, 3, 1) 100%
  );

  @keyframes showoff {
    from {
      background: transparent;
    }
    to {
      background: rgb(2, 18, 5);
      background: linear-gradient(
        180deg,
        rgba(2, 18, 5, 0.1) 0%,
        rgba(0, 16, 3, 1) 100%
      );
    }
  }
`;

export const HeroImage = styled.div`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;

  animation: appear 12s ease-in;

  @keyframes appear {
    0% {
      transform: scale(0.65);
    }
    50% {
      transform: scale(0.65);
    }
    80% {
      transform: scale(0.65);
    }
    100% {
      transform: scale(1);
    }
  }
`;

// HERO TEXT
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeroText = styled.p`
  font-weight: 700;
  text-align: center;
  color: white;
  font-size: 2rem;
`;

// BOTTOM INFOSECTION
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 16px;
  width: 100%;
  color: white;
  font-size: 0.7rem;
`;
export const InfoLocation = styled.p``;
export const InfoCopyright = styled.p`
  text-align: right;
`;
