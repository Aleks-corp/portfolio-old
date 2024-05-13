import styled from "styled-components";
import "../../assets/base.css";
import { devices } from "../../constants/breakpoints";

export const FooterBox = styled.footer`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 316px;
  background: var(--color-background-soft);
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  height: 316px;
  max-width: 500px;
  padding: 70px 0 8px;
  /* border-bottom: 1px solid #212121; */

  @media screen and (${devices.sm}) {
    max-width: 700px;
    min-height: 316px;
  }
  @media screen and (${devices.md}) {
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    min-height: 316px;
  }
  @media screen and (${devices.lg}) {
    max-width: 1150px;
    min-height: 316px;
  }
  @media screen and (${devices.xl}) {
    max-width: 1200px;
    min-height: 316px;
  }
`;

export const FooterLogo = styled.p`
  display: inline-flex;
  font-size: 24px;
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

export const FooterName = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.97;
`;

export const FooterLine = styled.div`
  width: 2px;
  height: 62px;
  transform: rotate(90deg) translate(-30px, -30px);
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 8px;
  transform: translateY(-55px);
`;

export const RightText = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.86;
  opacity: 0.6;
  margin-top: 40px;
  margin-left: 44px;
`;

export const FooterText = styled.p`
  width: 250px;
  margin-top: 32px;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.17;
`;

export const FooterMail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  text-align: right;
  align-items: end;
`;

export const SocialLink = styled.a`
  display: flex;
  color: var(--color-text);
  &:hover {
    color: var(--color-text-accent);
  }
`;

export const FooterMailText = styled.p`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
`;

export const MailLine = styled.div`
  width: 2px;
  height: 162px;
  transform: rotate(-90deg) translate(55px, -65px);
  background: linear-gradient(
    180deg,
    var(--color-text-gr-start) 9.95%,
    var(--color-text-gr-center) 51.55%,
    var(--color-text-gr-end) 87.59%
  );
`;
export const FooterPhone = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
  transform: translateY(-110px);
`;
