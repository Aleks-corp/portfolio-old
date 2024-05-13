import styled from "styled-components";
import "../../assets/base.css";

export const Project = styled.section`
  background: var(--color-background);
`;

export const ProjectBG = styled.div<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$left && 0};
  right: ${(props) => !props.$left && 0};
  transform: translate(${(props) => (props.$left ? "-100%" : "100%")}, -50%);
  width: 540px;
  height: 1000px;
  border-radius: 1200px;
  background: rgba(66, 184, 131, 0.2);
  filter: blur(100px);
`;

export const ProjectContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 86px 0 24px;
`;

export const ProjectTitle = styled.h2`
  margin-bottom: 84px;
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
  grid-auto-rows: 434px;
  grid-auto-columns: 576px;
  grid-column-gap: 48px;
  grid-row-gap: 34px;
`;

export const ProjectImgWrapper = styled.div`
  width: 100%;
  padding: 38px 28px;
  border-radius: 14px;
  box-shadow: 0px 8px 14px 2px rgba(0, 0, 0, 0.25);
  background: var(--color-background-soft);
`;

export const ProjectItem = styled.li`
  border-radius: 20px;
  text-align: start;
  user-select: none;
  &:hover {
    ${ProjectImgWrapper} {
      background: var(--color-background-mute);
    }
  }
`;

export const ProjectImage = styled.img``;

export const ProjectItemTitle = styled.p`
  margin-top: 24px;
  margin-left: 8px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.17;
`;

export const ProjectItemTextWrapper = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const ProjectItemText = styled.p`
  display: inline-block;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 8px;
  border: 1px solid #88898b60;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;
