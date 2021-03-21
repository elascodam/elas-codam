import React from "react";
import { PageTemplate } from "../../componets";
import { Paragraph } from "../../componets/IntroElasCodam/styles";
import { Pages, PapoDelasText } from "../../Constants";
import {
  Title,
  Span,
  TextContainer,
} from './styles';

const PapoDelas = () => (
  <PageTemplate page={Pages.PapoDelas}>
    <Title fontSize="60px">
    <Span fontSize="60px">&lt;</Span>
    {PapoDelasText.Title}
    <Span fontSize="60px">&gt;</Span>
    </Title>
    <TextContainer>
      <Paragraph fontSize="40px">{PapoDelasText.Paragraph1}</Paragraph>
      <Paragraph fontSize="40px">{PapoDelasText.Paragraph2}</Paragraph>
    </TextContainer>
  </PageTemplate>
);

export default PapoDelas;
