import styled from "styled-components";
import "../../assets/base.css";

export const Hero = styled.section`
  object-fit: cover;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 160px 0 250px;
  text-align: center;
`;

export const HeroText = styled.h2`
  font-size: 54px;
  font-weight: 300;
`;

export const HeroTextBold = styled.span`
  font-size: 54px;
  font-weight: 600;
`;

export const HeroTextAccent = styled.h2`
  font-size: 54px;
  font-weight: 600;
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
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
`;

export const MailLine = styled.div`
  width: 2px;
  height: 162px;
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`;

export const BackgroundImageBlue = styled.div`
  animation-name: animation-blue;
  background-color: rgba(96, 143, 234, 0.6);
  top: 55px;
  right: 0;
  transform: rotate(45deg);
  @keyframes animation-blue {
    from {
      width: 262px;
      height: 315px;
    }
    to {
      width: 328px;
      height: 394px;
    }
  }
`;
export const BackgroundImageGreen = styled.div`
  animation-name: animation-green;
  background-color: rgba(66, 184, 131, 0.6);
  bottom: 55px;
  left: 0px;
  transform: rotate(-30deg);
  @keyframes animation-green {
    from {
      width: 328px;
      height: 394px;
    }
    to {
      width: 262px;
      height: 315px;
    }
  }
`;
