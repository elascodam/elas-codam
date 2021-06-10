import React from "react";
import { PageTemplate } from "../../componets";
import { Paragraph } from "../../componets/IntroElasCodam/styles";
import { ElasIndicamText, Pages } from "../../Constants";
import {
  Title,
  Span,
  TextContainer
} from './styles';

const ElasIndicam = () => (
  <PageTemplate page={Pages.ElasIndicam}>
    <Title fontSize="60px">
      <Span fontSize="60px">&lt;</Span>
        {ElasIndicamText.Title}
        <Span fontSize="60px">&gt;</Span>
    </Title>
    <TextContainer>
      <Paragraph fontSize="40px">{ElasIndicamText.Paragraph1}</Paragraph>
    </TextContainer>
  </PageTemplate>
);

export default ElasIndicam;
