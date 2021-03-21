import React from "react";
import { PageTemplate } from "../../componets";
import { Pages, PapoDelasText } from "../../Constants";
import {
  Title,
  Span,
} from './styles';

const PapoDelas = () => (
  <PageTemplate page={Pages.PapoDelas}>
    <Title fontSize="60px">
    <Span fontSize="60px">&lt;</Span>
    {PapoDelasText.Title}
    <Span fontSize="60px">&gt;</Span>
    </Title>
  </PageTemplate>
);

export default PapoDelas;
