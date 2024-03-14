import styled from "styled-components";
import "../../assets/base.css";

export const Project = styled.section`
  object-fit: cover;
  overflow: hidden;
  background: var(--color-background-soft);
`;

export const ProjectContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 0 46px;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 46px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`;

export const ProjectTitleAccent = styled.span`
  color: var(--color-text-accent);
`;

export const ProjectList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 500px;
  grid-auto-columns: 550px;
  grid-column-gap: 18px;
  grid-row-gap: 24px;
`;

export const ProjectItem = styled.li`
  border-radius: 20px;
  text-align: start;
`;

export const ProjectImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 380px;
`;

export const ProjectImage = styled.img`
  transition: transform 1s;
  transform: scale(1.33);
  &:hover {
    transform: scale(1);
  }
`;

export const ProjectItemTitle = styled.p`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
`;

export const ProjectItemTextWrapper = styled.div`
  display: flex;
`;

export const ProjectItemText = styled.p`
  display: inline-block;
  margin-top: 8px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.17;
  border-radius: 8px;
  border: 1px solid #88898b60;
`;
