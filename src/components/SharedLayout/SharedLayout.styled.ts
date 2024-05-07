import styled from "styled-components";
import "../../assets/base.css";

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: var(--color-background);
  &::-webkit-scrollbar {
    background-color: var(--color-background-mute);
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #727272;
    border-radius: 5px;
  }
`;

export const Main = styled.main`
  /* overflow-y: auto; */
  width: 100%;

  &::-webkit-scrollbar {
    background-color: var(--color-background-mute);
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #727272;
    border-radius: 5px;
  }
`;
