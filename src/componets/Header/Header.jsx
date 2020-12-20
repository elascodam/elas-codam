import React from "react";
import { HeaderContainer, Logo, NavBar, RedirectLink } from "./styles";
import LogoEC from "../../assets/logo-elas-codam.svg";
import { LinksText } from "../../Constants";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src={LogoEC}
        alt="Logomarca: Elas Codam escrito entre símbolos de maior e menor"
      />
      <NavBar>
        <RedirectLink href="/">{LinksText.Home}</RedirectLink>
        <RedirectLink href="/sobre-elas">{LinksText.SobreElas}</RedirectLink>
        <RedirectLink href="/papo-delas">{LinksText.PapoDelas}</RedirectLink>
        <RedirectLink href="/elas-indicam">
          {LinksText.ElasIndicam}
        </RedirectLink>
        <RedirectLink href="/contato">{LinksText.Contato}</RedirectLink>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
