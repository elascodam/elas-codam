import React from 'react';
import { PapoDelasText } from '../../Constants';
import {
  IntroContainer,
  TextContainer,
  Paragraph
} from './styles';

const IntroPapoDelas = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <Paragraph fontSize="25px">{PapoDelasText.Paragraph1}</Paragraph>
        <Paragraph fontSize="25px">{PapoDelasText.Paragraph2}</Paragraph>
      </TextContainer>
    </IntroContainer>
  )
}

export default IntroPapoDelas;
