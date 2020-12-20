import React from 'react';
import woman from '../../assets/women-icon.svg'
import { paragraph1, paragraph2 } from './introText';
import {
  IntroButton,
  IntroContainer,
  Paragraph,
  RedirectLink,
  TextContainer,
  WomanImage
} from './styles';

const IntroElasCodam = () => {
  return (
    <IntroContainer>
      <TextContainer>
        <Paragraph fontSize="25px">{ paragraph1 }</Paragraph>
        <Paragraph fontSize="20px">{ paragraph2 }</Paragraph>
        <RedirectLink href='/sobre-elas'>
          <IntroButton type="button">
            Saiba Mais
          </IntroButton>
        </RedirectLink>
      </TextContainer>
      <WomanImage src={ woman } alt="Ilustração de 3 mulheres" />
    </IntroContainer>
  )
};

export default IntroElasCodam;
