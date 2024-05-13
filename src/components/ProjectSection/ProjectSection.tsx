import {
  Project,
  ProjectBG,
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
import Dashboard from "../../assets/photo-projects/Dashboard.jpg";
import DrinkMaster from "../../assets/photo-projects/drink-master.jpg";
import CarRent from "../../assets/photo-projects/car-rent-2.jpg";
import Filmoteka from "../../assets/photo-projects/filmoteka.jpg";

export function ProjectSection() {
  return (
    <Project>
      <ProjectContainer>
        <ProjectBG $left />
        <ProjectBG />
        <ProjectTitle>
          <ProjectTitleAccent>{"<"}</ProjectTitleAccent>Project
          <ProjectTitleAccent>{">"}</ProjectTitleAccent>
        </ProjectTitle>
        <ProjectList>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={Filmoteka} />
            </ProjectImgWrapper>
            <ProjectItemTitle>Filmoteka Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>HTML</ProjectItemText>
              <ProjectItemText>SCSS</ProjectItemText>
              <ProjectItemText>JavaScript</ProjectItemText>
              <ProjectItemText>FireBase</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={DrinkMaster} />
            </ProjectImgWrapper>
            <ProjectItemTitle>DrinkMaster Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>React</ProjectItemText>
              <ProjectItemText>Redux-toolkit</ProjectItemText>
              <ProjectItemText>NodeJs</ProjectItemText>
              <ProjectItemText>Express</ProjectItemText>
              <ProjectItemText>Mongoose</ProjectItemText>
              <ProjectItemText>Swagger</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={Dashboard} />
            </ProjectImgWrapper>
            <ProjectItemTitle>Tasks Dashboard</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>React</ProjectItemText>
              <ProjectItemText>Redux-toolkit</ProjectItemText>
              <ProjectItemText>NodeJs</ProjectItemText>
              <ProjectItemText>TypeScript</ProjectItemText>
              <ProjectItemText>NestJs</ProjectItemText>
              <ProjectItemText>Postgres</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
          <ProjectItem>
            <ProjectImgWrapper>
              <ProjectImage width={600} src={CarRent} />
            </ProjectImgWrapper>
            <ProjectItemTitle>Car Rent Website</ProjectItemTitle>
            <ProjectItemTextWrapper>
              <ProjectItemText>React</ProjectItemText>
              <ProjectItemText>Redux-toolkit</ProjectItemText>
              <ProjectItemText>Styled-components</ProjectItemText>
            </ProjectItemTextWrapper>
          </ProjectItem>
        </ProjectList>
      </ProjectContainer>
    </Project>
  );
}
