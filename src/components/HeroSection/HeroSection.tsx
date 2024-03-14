import { LuGithub } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import {
  Hero,
  HeroContainer,
  HeroText,
  HeroTextBold,
  HeroTextAccent,
  SocialContainer,
  SocialLink,
  SocialLine,
  MailContainer,
  MailText,
  MailLine,
  BackgroundImageBlue,
  BackgroundImageGreen,
} from "./HeroSection.styled";
export function HeroSection() {
  return (
    <Hero>
      <HeroContainer>
        <h1 className="hidden">Portfolio</h1>
        <HeroText>Hello World</HeroText>
        <HeroText>
          I'm <HeroTextBold>Oleksandr Haran</HeroTextBold>.
        </HeroText>
        <HeroTextAccent>{`<FullStack web developer />`}</HeroTextAccent>

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
          <SocialLine />
        </SocialContainer>
        <MailContainer>
          <SocialLink href="mailto:aleks.haran.dev@gmail.com">
            <MailText>aleks.haran.dev@gmail.com</MailText>
            <LuMail />
          </SocialLink>
          <MailLine />
        </MailContainer>
        <BackgroundImageBlue />
        <BackgroundImageGreen />
      </HeroContainer>
    </Hero>
  );
}
