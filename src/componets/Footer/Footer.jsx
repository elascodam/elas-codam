import React from "react";
import {
  FooterContainer,
  RedirectLink,
  Icon,
  Links,
  Copyrigth,
} from "./styles";
import InstagramIcon from "../../assets/instagram-icon.svg";
import YouTubeIcon from "../../assets/youtube-icon.svg";
import LinkedInIcon from "../../assets/linkedin-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import GitHubIcon from "../../assets/github-icon.svg";
import EmailIcon from "../../assets/email-icon.svg";
import { ContactURLs, Email, Pages } from "../../Constants";

const createLink = (url, icon, alt) => (
  <RedirectLink target="_blank" href={url}>
    <Icon src={icon} alt={alt} />
  </RedirectLink>
);

const Footer = ({ page }) => {
  let background;

  switch (page) {
    case Pages.SobreElas:
      background = "var(--SOFT_ORANGE)";
      break;
    case Pages.ElasIndicam:
      background = "var(--SOFT_ORANGE)";
      break;
    default:
      background = "var(--VIOLET)";
  }

  return (
    <FooterContainer background={background}>
      <Links>
        {createLink(ContactURLs.Instagram, InstagramIcon, "Ícone do Instagram")}
        {createLink(ContactURLs.YouTube, YouTubeIcon, "Ícone do YouTube")}
        {createLink(ContactURLs.LinkedIn, LinkedInIcon, "Ícone do LinkedIn")}
        {createLink(ContactURLs.Twitter, TwitterIcon, "Ícone do Twitter")}
        {createLink(ContactURLs.GitHub, GitHubIcon, "Ícone do GitHub")}
        {createLink(Email, EmailIcon, "Ícone de Email")}
      </Links>
      <Copyrigth>Copyrigth © 2021 Elas Codam</Copyrigth>
    </FooterContainer>
  );
};

export default Footer;
