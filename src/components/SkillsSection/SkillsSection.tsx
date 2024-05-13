import {
  Skills,
  SkillsContainer,
  SkillsItem,
  SkillsList,
  SkillText,
  SkillsTitle,
  SkillsTitleAccent,
  BGImg,
  BGImgCont,
} from "./SkillsSection.styled";
import { SKILLS } from "../../constants/slills";
import BG from "../../assets/aboutBG.svg";

export function SkillsSection() {
  return (
    <Skills>
      <BGImgCont>
        <BGImg src={BG} />
      </BGImgCont>
      <SkillsContainer>
        <SkillsTitle>
          <SkillsTitleAccent>{"<"}</SkillsTitleAccent>Skills
          <SkillsTitleAccent>{">"}</SkillsTitleAccent>
        </SkillsTitle>
        <SkillsList>
          {SKILLS.map((item, index) => (
            <SkillsItem key={index}>
              {item.img && <img height={34} src={item.img} />}
              <SkillText>#{item.title}</SkillText>
            </SkillsItem>
          ))}
        </SkillsList>
      </SkillsContainer>
    </Skills>
  );
}
