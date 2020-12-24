import React from "react";
import { HeaderContainer, Logo, NavBar, RedirectLink } from "./styles";
import LogoEC from "../../assets/logo-elas-codam.svg";
import { Pages } from "../../Constants";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src={LogoEC}
        alt="Logomarca: Elas Codam escrito entre símbolos de maior e menor"
      />
      <NavBar>
        <RedirectLink href="/">{Pages.Home}</RedirectLink>
        <RedirectLink href="/sobre-elas">{Pages.SobreElas}</RedirectLink>
        <RedirectLink href="/papo-delas">{Pages.PapoDelas}</RedirectLink>
        <RedirectLink href="/elas-indicam">{Pages.ElasIndicam}</RedirectLink>
        <RedirectLink href="/contato">{Pages.Contato}</RedirectLink>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
