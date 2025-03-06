import styled, { keyframes } from "styled-components";
import "../../assets/base.css";
import { devices } from "../../constants/breakpoints";

export const Hero = styled.section`
  object-fit: cover;
  /* overflow: hidden; */
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  @media screen and (${devices.sm}) {
    height: 500px;
  }
  @media screen and (${devices.md}) {
    height: 500px;
  }
  @media screen and (${devices.xl}) {
    height: 600px;
  }
`;

export const HeroBox = styled.div`
  position: relative;
  max-width: 1200px;
  max-height: 500px;
  margin: 0 auto;
  padding-top: 160px;
  padding-bottom: 245px;
  text-align: center;
  @media screen and (${devices.sm}) {
    max-width: 700px;
    max-height: 500px;
    padding-top: 150px;
    padding-bottom: 195px;
  }
  @media screen and (${devices.md}) {
    max-width: 900px;
    max-height: 500px;
    padding-top: 125px;
    padding-bottom: 180px;
  }
  @media screen and (${devices.lg}) {
    max-width: 1150px;
    max-height: 500px;
    padding-top: 125px;
    padding-bottom: 180px;
  }
  @media screen and (${devices.xl}) {
    max-width: 1200px;
    max-height: 600px;
    padding-top: 160px;
    padding-bottom: 245px;
  }
`;

export const HeroText = styled.h2`
  font-size: 44px;
  font-weight: 300;
  @media screen and (${devices.md}) {
    font-size: 54px;
    font-weight: 300;
  }
`;

export const HeroTextBold = styled.h2`
  font-size: 44px;
  font-weight: 600;
  @media screen and (${devices.md}) {
    font-size: 54px;
    font-weight: 600;
  }
`;

export const HeroTextAccent = styled.span`
  font-size: 44px;
  font-weight: 600;
  @media screen and (${devices.md}) {
    font-size: 54px;
    font-weight: 600;
  }
  background-image: linear-gradient(
    135deg,
    var(--color-text-gr-start),
    var(--color-text-gr-center),
    var(--color-text-gr-end)
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const SocialContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`;

export const SocialLink = styled.a`
  color: var(--color-text);
  &:hover {
    color: var(--color-text-accent);
  }
`;

export const SocialLine = styled.div`
  width: 2px;
  height: 62px;
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`;

export const MailContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: -15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
`;

export const MailText = styled.span`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.3;
`;

export const MailLine = styled.div`
  width: 2px;
  height: 142px;
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`;

const animationBlue = keyframes`
from {
      width: 262px;
      height: 215px;
    }
    to {
      width: 428px;
      height: 494px;
    }
`;

export const BackgroundImageBlue = styled.div`
  position: absolute;
  filter: blur(58.5px);
  border-radius: 395px;
  animation-name: ${animationBlue};
  animation-duration: 6s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(96, 143, 234, 0.6);
  top: 55px;
  right: 50px;
  transform: rotate(45deg);
`;

const animationGreen = keyframes`
from {
      width: 428px;
      height: 394px;
    }
    to {
      width: 262px;
      height: 315px;
    }
`;

export const BackgroundImageGreen = styled.div`
  position: absolute;
  filter: blur(58.5px);
  border-radius: 395px;
  animation-name: ${animationGreen};
  animation-duration: 4s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: rgba(66, 184, 131, 0.6);
  bottom: 65px;
  left: 50px;
  transform: rotate(-30deg);
`;
