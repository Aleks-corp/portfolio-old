import {
  AboutItemText,
  AboutItemTitle,
  AboutList,
  AboutListImage,
} from "./AboutSection.styled";
import { ABOUT_SKILLS } from "../../constants/aboutSkills";
import res from "../../assets/icons/fluent_phone-tablet-20-regular.svg";
import speed from "../../assets/icons/fluent_top-speed-20-regular.svg";
import err from "../../assets/icons/iconoir_error-window.svg";
import time from "../../assets/icons/pepicons-pencil_rewind-time.svg";

export function AboutSection() {
  return (
    <>
      <AboutList>
        <AboutListImage>
          <img width={64} src={err} alt="Problem solving icon" />
        </AboutListImage>
        <AboutListImage>
          <img width={64} src={time} alt="Time management icon" />
        </AboutListImage>
        <AboutListImage>
          <img width={64} src={speed} alt="Fast load icon" />
        </AboutListImage>
        <AboutListImage>
          <img width={64} src={res} alt="Responsive icon" />
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
    </>
  );
}
