import NavBar from "../NavBar/NavBar";
import { CVLink, HeaderContainer, HeaderLogo } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>Portfolio</HeaderLogo>
      <NavBar />
      <CVLink
        to="/CV_Oleksandr_Haran_Junior_FullStack_Developer.pdf"
        target="_blank"
      >
        My CV
      </CVLink>
    </HeaderContainer>
  );
};
