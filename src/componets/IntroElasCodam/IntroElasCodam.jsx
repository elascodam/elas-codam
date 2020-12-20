import React from "react";
import woman from "../../assets/women-icon.svg";
import { IntroText, ButtonsText } from "../../Constants";
import {
  IntroButton,
  IntroContainer,
  Paragraph,
  RedirectLink,
  TextContainer,
  WomanImage,
} from "./styles";

const IntroElasCodam = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <Paragraph fontSize="25px">{IntroText.Paragraph1}</Paragraph>
        <Paragraph fontSize="20px">{IntroText.Paragraph2}</Paragraph>
        <RedirectLink href="/sobre-elas">
          <IntroButton type="button">{ButtonsText.KnowMore}</IntroButton>
        </RedirectLink>
      </TextContainer>
      <WomanImage src={woman} alt="Ilustração de 4 mulheres diversas" />
    </IntroContainer>
  );
};

export default IntroElasCodam;
