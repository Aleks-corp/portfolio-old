import {
  About,
  AboutBGThumb,
  AboutContainer,
  AboutText,
  AboutTextAccent,
  AboutTextContainer,
  AboutTextLink,
  AboutTitle,
  AboutTitleAccent,
  BGImg,
  PhotoElipse,
  PhotoImg,
} from "./AboutSection.styled";
import BG from "../../assets/aboutBG.svg";
import Photo from "../../assets/photo.webp";

export function AboutSection() {
  return (
    <About>
      <AboutBGThumb>
        <PhotoElipse />
        <BGImg width={"100%"} height={"100%"} src={BG} />
      </AboutBGThumb>
      <PhotoImg width={"384px"} height={"541px"} src={Photo} />
      <AboutContainer>
        <AboutTitle>
          <AboutTitleAccent>{"<"}</AboutTitleAccent>About
          <AboutTitleAccent>{">"}</AboutTitleAccent>
        </AboutTitle>
        <AboutTextContainer>
          <AboutTextAccent>“</AboutTextAccent>
          <AboutText>
            Hey there! I&apos;m a web developer from Ukraine with a passion for
            solving tricky problems. I&apos;m comfortable working on both
            front-end and back-end development{" "}
            <AboutTextLink to={"/about"}>Learn more...</AboutTextLink>
          </AboutText>
          <AboutTextAccent>“</AboutTextAccent>
        </AboutTextContainer>
      </AboutContainer>
    </About>
  );
}
