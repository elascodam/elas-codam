import React from 'react';
import { SobreElasText } from '../../Constants';

import {
  IntroContainer,
  TextContainer,
  Paragraph
} from './styles';

const IntroSobreElas = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <Paragraph fontSize="25px">{SobreElasText.Paragraph1}</Paragraph>
      </TextContainer>
    </IntroContainer>
  )
}

export default IntroSobreElas;
