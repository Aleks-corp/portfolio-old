import {
  Project,
  ProjectContainer,
  ProjectImage,
  ProjectImgWrapper,
  ProjectItem,
  ProjectItemText,
  ProjectItemTextWrapper,
  ProjectItemTitle,
  ProjectList,
  ProjectTitle,
  ProjectTitleAccent,
} from "./ProjectSection.styled";
import IceCream from "../../assets/photo-projects/Screenshot_1.jpg";
import DrinkMaster from "../../assets/photo-projects/Screenshot_26.jpg";
import CarRent from "../../assets/photo-projects/Screenshot_27.jpg";
import Filmoteka from "../../assets/photo-projects/Screenshot_3.jpg";

export function ProjectSection() {
  return (
    <Project>
      <ProjectContainer>
        <ProjectTitle>
          <ProjectTitleAccent>{"<"}</ProjectTitleAccent>Project
          <ProjectTitleAccent>{">"}</ProjectTitleAccent>
        </ProjectTitle>
        <ProjectList>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={IceCream} />
            </ProjectImgWrapper>

            <ProjectItemTitle>Ice Cream Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>FrontEnd</ProjectItemText>
              <ProjectItemText>HTML</ProjectItemText>
              <ProjectItemText>JavaScript</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={Filmoteka} />
            </ProjectImgWrapper>
            <ProjectItemTitle>Filmoteka Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>FrontEnd</ProjectItemText>
              <ProjectItemText>JavaScript</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={DrinkMaster} />
            </ProjectImgWrapper>
            <ProjectItemTitle>DrinkMaster Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>FrontEnd</ProjectItemText>
              <ProjectItemText>BackEnd</ProjectItemText>
              <ProjectItemText>ReactJS</ProjectItemText>
              <ProjectItemText>NodeJS</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={CarRent} />
            </ProjectImgWrapper>
            <ProjectItemTitle>Car Rent Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>FrontEnd</ProjectItemText>
              <ProjectItemText>ReactJS</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
        </ProjectList>
      </ProjectContainer>
    </Project>
  );
}
