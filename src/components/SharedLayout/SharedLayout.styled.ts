import styled from "styled-components";
import "../../assets/base.css";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

export const Main = styled.main`
  overflow: auto;
  overflow-x: hidden;
  width: 100%;

  &::-webkit-scrollbar {
    background-color: var(--color-background-mute);
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #727272;
    border-radius: 5px;
  }
`;
