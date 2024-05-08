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
  HeroBox,
} from "./HeroSection.styled";
import { HeroGradient } from "../HeroGradient/HeroGradient";
export function HeroSection() {
  return (
    <Hero>
      <HeroContainer>
        <h1 className="hidden">Portfolio</h1>
        <HeroGradient />
        <HeroBox>
          <HeroText>Hello World</HeroText>
          <HeroText>
            I&apos;m <HeroTextBold>Oleksandr Haran</HeroTextBold>.
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
        </HeroBox>
      </HeroContainer>
    </Hero>
  );
}
