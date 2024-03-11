import NavBar from "../NavBar/NavBar";
import { CVLink, HeaderContainer, HeaderLogo } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo className="header__logo accentGradient">Portfolio</HeaderLogo>
      <NavBar />
      <CVLink
        to="../../../public/CV_Oleksandr_Haran_Junior_FullStack_Developer.pdf"
        target="_blank"
      >
        My CV
      </CVLink>
    </HeaderContainer>
  );
};
