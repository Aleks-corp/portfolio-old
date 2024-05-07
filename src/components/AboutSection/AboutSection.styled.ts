import styled from "styled-components";
import "../../assets/base.css";

export const About = styled.section`
  object-fit: cover;
  overflow: hidden;
  background: var(--color-background-soft);
`;

export const AboutContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
`;

export const AboutTitle = styled.h2`
  margin-bottom: 46px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`;

export const AboutTitleAccent = styled.span`
  color: var(--color-text-accent);
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
