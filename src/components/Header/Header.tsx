import NavBar from "../NavBar/NavBar";
import { CallLink, HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <p className="header__logo accentGradient">Portfolio</p>
      <NavBar />
      <CallLink href="tel:+380730000000">CALL US</CallLink>
    </HeaderContainer>
  );
};
