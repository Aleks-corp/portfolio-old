import {
  Skills,
  SkillsContainer,
  SkillsItem,
  SkillsList,
  SkillText,
  SkillsTitle,
  SkillsTitleAccent,
} from "./SkillsSection.styled";
import { SKILLS } from "../../constants/slills";

export function SkillsSection() {
  return (
    <Skills>
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
