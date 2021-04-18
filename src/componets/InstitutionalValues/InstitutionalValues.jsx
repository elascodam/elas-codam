import React from 'react';
import { MissionText, PurposeText } from '../../Constants';
import {
  InstitutionalContainer,
  MissionContainer,
  PurposeContainer,
  TextContainer,
  Title,
  Span,
  Paragraph
} from './styles';

const InstitutionalValues = () => {
  return (
    <InstitutionalContainer>
      <MissionContainer>
        <Title fontSize="50px">
          <Span fontSize="50px">&lt;</Span>
            {MissionText.Title}
          <Span fontSize="50px">&gt;</Span>
        </Title>
        <TextContainer>
          <Paragraph fontSize="25px">{MissionText.Paragraph1}</Paragraph>
          <Paragraph fontSize="25px">{MissionText.Paragraph2}</Paragraph>
        </TextContainer>
      </MissionContainer>
      <PurposeContainer>
        <Title fontSize="50px">
          <Span fontSize="50px">&lt;</Span>
            {PurposeText.Title}
          <Span fontSize="50px">&gt;</Span>
        </Title>
        <TextContainer>
          <Paragraph fontSize="25px">{PurposeText.Paragraph1}</Paragraph>
          <Paragraph fontSize="25px">{PurposeText.Paragraph2}</Paragraph>
        </TextContainer>
      </PurposeContainer>
    </InstitutionalContainer>
  )
}

export default InstitutionalValues;
