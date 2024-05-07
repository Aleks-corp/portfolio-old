import styled from "styled-components";
import "../../assets/base.css";
import { NavLink as BaseNavLink } from "react-router-dom";
import { devices } from "../../constants/breakpoints";

export const List = styled.ul`
  display: flex;
  width: 210px;
  justify-content: space-between;
  @media screen and (${devices.sm}) {
    width: 360px;
  }
  @media screen and (${devices.md}) {
    width: 400px;
  }
  @media screen and (${devices.xl}) {
    width: 430px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 10px;
  background-color: transparent;
`;

export const NavLink = styled(BaseNavLink)`
  position: relative;
  display: inline-block;
  margin: 0 15px;
  font-weight: 300;
  color: var(--color-text);
  font-size: 18px;
  line-height: 1.2;
  &.active {
    color: var(--color-text-accent);
  }
  &::after {
    position: absolute;
    width: 0;
    height: 1px;
    background-color: var(--color-text);
    bottom: -5px;
    right: 50%;
    transform: translate(50%);
    content: "";
  }
  &:hover&::after {
    width: calc(100%);
    transition: width 0.3s ease-in-out;
  }
  &.active:hover&::after {
    background-color: var(--color-text-accent);
  }
`;
