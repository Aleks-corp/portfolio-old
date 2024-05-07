import styled from "styled-components";
import "../../assets/base.css";
import { NavLink } from "react-router-dom";
import { devices } from "../../constants/breakpoints";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  margin-left: 9px;
  width: 100%;
  max-width: 500px;
  min-height: 58px;
  padding: 10px 0;
  /* border-bottom: 1px solid #212121; */
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  @media screen and (${devices.sm}) {
    max-width: 700px;
    min-height: 58px;
  }
  @media screen and (${devices.md}) {
    max-width: 900px;
    min-height: 58px;
  }
  @media screen and (${devices.lg}) {
    max-width: 1150px;
    min-height: 58px;
  }
  @media screen and (${devices.xl}) {
    max-width: 1200px;
    min-height: 58px;
  }
`;

export const HeaderLogo = styled.p`
  font-size: 24px;
  font-weight: 600;
  background-image: linear-gradient(
    135deg,
    var(--color-text-gr-start),
    var(--color-text-gr-center),
    var(--color-text-gr-end)
  );
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const CVLink = styled(NavLink)`
  color: var(--color-text-accent);
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 4px 3px 7px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--color-text-accent);

  &:hover,
  &:focus {
    color: var(--color-text-accent-hover);
    border-color: var(--color-text-accent-hover);
  }
`;
