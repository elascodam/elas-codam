import React from "react";
import { PageTemplate } from "../../componets";
import { Pages, SobreElasText } from "../../Constants";
import {
  Paragraph,
  Span,
  Title,
  TextContainer
} from './styles';

const AboutUs = () => (
  <PageTemplate page={Pages.SobreElas}>
    <Title fontSize="60px">
      <Span fontSize="60px">&lt;</Span>
      {SobreElasText.Title}
      <Span fontSize="60px">&gt;</Span>
    </Title>
    <TextContainer>
      <Paragraph fontSize="40px">{SobreElasText.Paragraph1}</Paragraph>
    </TextContainer>
  </PageTemplate>
);

export default AboutUs;
