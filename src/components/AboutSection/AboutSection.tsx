import {
  About,
  AboutContainer,
  AboutItemText,
  AboutItemTitle,
  AboutList,
  AboutListImage,
  AboutTitle,
  AboutTitleAccent,
} from "./AboutSection.styled";
import { ABOUT_SKILLS } from "../../constants/aboutSkills";
import res from "../../assets/fluent_phone-tablet-20-regular.svg";
import speed from "../../assets/fluent_top-speed-20-regular.svg";
import err from "../../assets/iconoir_error-window.svg";
import time from "../../assets/pepicons-pencil_rewind-time.svg";

export function AboutSection() {
  return (
    <About>
      <AboutContainer>
        <AboutTitle>
          <AboutTitleAccent>{"<"}</AboutTitleAccent>About
          <AboutTitleAccent>{">"}</AboutTitleAccent>
        </AboutTitle>
        <AboutList>
          <AboutListImage>
            <img width={64} src={err} alt="" />
          </AboutListImage>
          <AboutListImage>
            <img width={64} src={time} alt="" />
          </AboutListImage>
          <AboutListImage>
            <img width={64} src={speed} alt="" />
          </AboutListImage>
          <AboutListImage>
            <img width={64} src={res} alt="" />
          </AboutListImage>
        </AboutList>
        <AboutList>
          {ABOUT_SKILLS.map((item, index) => (
            <li key={index}>
              <AboutItemTitle>{item.title}</AboutItemTitle>
              <AboutItemText>{item.text}</AboutItemText>
            </li>
          ))}
        </AboutList>
      </AboutContainer>
    </About>
  );
}
