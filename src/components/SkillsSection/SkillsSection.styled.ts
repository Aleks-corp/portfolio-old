import styled from "styled-components";
import "../../assets/base.css";

export const Skills = styled.section`
  position: relative;
  background: transparent;
  z-index: 1;
`;

export const BGImgCont = styled.div`
  position: absolute;
  top: 84px;
  left: -5%;
  width: 120%;
  z-index: -1;
`;

export const BGImg = styled.img`
  transform: rotate(180deg);
  width: 100%;
`;

export const SkillsContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0 42px;
`;

export const SkillsTitle = styled.h2`
  margin-bottom: 84px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.17;
`;

export const SkillsTitleAccent = styled.span`
  color: var(--color-text-accent);
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 18px;
  column-gap: 14px;
`;

export const SkillsItem = styled.li`
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 10px;
  padding: 8px 14px;
  &:nth-child(2n) {
    background-color: var(--color-text);
    color: var(--color-background-soft);
  }
`;

export const SkillText = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
`;
