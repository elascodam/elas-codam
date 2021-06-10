import React from "react";
import { PageTemplate, IntroSobreElas, InstitutionalValues } from "../../componets";
import { Pages, SobreElasText } from "../../Constants";
import {
  Span,
  Title,
  AboutUsContainer
} from './styles';

const AboutUs = () => (
  <PageTemplate page={Pages.SobreElas}>
    <AboutUsContainer>
    <Title fontSize="60px">
      <Span fontSize="60px">&lt;</Span>
      {SobreElasText.Title}
      <Span fontSize="60px">&gt;</Span>
    </Title>
    <IntroSobreElas />
    <InstitutionalValues />
    </AboutUsContainer>
  </PageTemplate>
);

export default AboutUs;
