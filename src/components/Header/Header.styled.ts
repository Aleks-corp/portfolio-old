import styled from "styled-components";
import "../../assets/base.css";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #212121;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderLogo = styled.p`
  font-size: 24px;
  font-weight: 600;
  background-image: linear-gradient(
    135deg,
    var(--color-text-accent),
    #54b2bd,
    #6287f3
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
