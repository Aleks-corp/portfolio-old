import { LuGithub, LuMail } from "react-icons/lu";
import {
  FooterBox,
  FooterContainer,
  FooterLine,
  FooterLogo,
  FooterMail,
  FooterMailText,
  FooterName,
  FooterPhone,
  FooterText,
  MailLine,
  RightText,
  SocialContainer,
  SocialLink,
} from "./Footer.styled";
import { PiFacebookLogo, PiLinkedinLogo } from "react-icons/pi";

export const Footer = () => {
  return (
    <FooterBox>
      <FooterContainer>
        <div>
          <FooterLogo>Portfolio</FooterLogo>
          <FooterName>Oleksandr Haran</FooterName>
          <FooterLine />
          <SocialContainer>
            <SocialLink href="https://github.com/Aleks-corp" target="_blank">
              <LuGithub />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/aleks.root.corp/"
              target="_blank"
            >
              <PiFacebookLogo />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/aleks-haran-dev"
              target="_blank"
            >
              <PiLinkedinLogo />
            </SocialLink>
          </SocialContainer>
          <RightText>All rights reserved</RightText>
        </div>
        <FooterText>
          Feel free to contact me to discuss plans for your desired projects
        </FooterText>
        <FooterMail>
          <SocialLink href="mailto:aleks.haran.dev@gmail.com">
            <LuMail />
            <FooterMailText>aleks.haran.dev@gmail.com</FooterMailText>
          </SocialLink>
          <MailLine />
          <SocialLink href="tel:+380679460569">
            <FooterPhone>+380679460569</FooterPhone>
          </SocialLink>
        </FooterMail>
      </FooterContainer>
    </FooterBox>
  );
};
