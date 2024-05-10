import styled from "styled-components";
import "../../assets/base.css";
import { NavLink } from "react-router-dom";

export const About = styled.section`
  position: relative;
  width: 100%;
  height: 448px;
  background: var(--color-background-soft);
`;

export const AboutBGThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 448px;
  object-fit: cover;
  overflow: hidden;
`;

export const PhotoElipse = styled.div`
  position: absolute;
  object-fit: cover;
  top: 81px;
  left: 122px;
  width: 468px;
  height: 468px;
  border-radius: 468px;
  background: linear-gradient(180deg, #121715 0%, #627d76 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  filter: blur(1px);
`;

export const BGImg = styled.img`
  position: absolute;
  object-fit: cover;
  bottom: -64px;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PhotoImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 208px;
  width: 384px;
  height: 541px;
`;

export const AboutContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
  z-index: 2;
`;

export const AboutTitle = styled.h2`
  margin-bottom: 68px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`;

export const AboutTitleAccent = styled.span`
  color: var(--color-text-accent);
`;

export const AboutTextContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 150px;
  align-items: center;
  text-align: justify;
`;

export const AboutText = styled.p`
  width: 550px;
  color: #fff;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
`;

export const AboutTextLink = styled(NavLink)`
  color: var(--color-text-accent);
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  text-decoration: underline;
`;

export const AboutTextAccent = styled.p`
  height: 200px;
  color: var(--color-text-accent);
  font-family: Raleway;
  font-size: 96px;
  font-style: normal;
  font-weight: 500;
  &:last-child {
    transform: rotate(180deg);
  }
`;

export const AboutListImage = styled.div`
  width: calc(100% / 4);
`;

export const AboutList = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: start;
`;

export const AboutItemTitle = styled.p`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
`;

export const AboutItemText = styled.p`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.17;
`;
