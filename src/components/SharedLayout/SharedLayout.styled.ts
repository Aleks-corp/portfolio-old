import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

export const Main = styled.main`
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: #24282c;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #727272;
    border-radius: 5px;
  }
`;
