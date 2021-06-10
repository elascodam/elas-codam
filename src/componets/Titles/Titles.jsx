import React from 'react';
import { TitleH1, TitleSpan } from './styles';

export const Titles = (props) => {
  return (
    <>
      <TitleH1>
        <TitleSpan>&lt;</TitleSpan>
        { props.text }
        <TitleSpan>&gt;</TitleSpan>
      </TitleH1>
    </>
  )
};
