import React from "react";
import { PageTemplate, IntroPapoDelas } from "../../componets";
import { Pages, PapoDelasText } from "../../Constants";
import {
  Title,
  Span,
  PapoDelasContainer,
} from './styles';

const PapoDelas = () => (
  <PageTemplate page={Pages.PapoDelas}>
    <PapoDelasContainer>
      <Title fontSize="60px">
      <Span fontSize="60px">&lt;</Span>
        {PapoDelasText.Title}
      <Span fontSize="60px">&gt;</Span>
      </Title>
    <IntroPapoDelas />
    </PapoDelasContainer>
  </PageTemplate>
);

export default PapoDelas;
